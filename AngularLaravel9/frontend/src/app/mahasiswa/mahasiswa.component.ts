import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {

  MahasiswaArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  nama: string = "";
  jurusan: string = "";
  nim: number | null = null;

  currentMahasiswaID = "";

  alertMessage: string = "";
  showAlert: boolean = false;

  constructor(private http: HttpClient) {
    this.getAllMahasiswa();
  }

  ngOnInit(): void {}

  getAllMahasiswa() {
    this.http.get("http://127.0.0.1:8000/api/mahasiswa")
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData);
        this.MahasiswaArray = resultData;
      });
  }

  register() {
    let bodyData = {
      "nama": this.nama,
      "jurusan": this.jurusan,
      "nim": this.nim
    };

    this.http.post("http://127.0.0.1:8000/api/save", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      this.displayAlert("Data Tersimpan");
      this.getAllMahasiswa();
      this.resetForm();
    });
  }

  setUpdate(data: any) {
    this.nama = data.nama;
    this.jurusan = data.jurusan;
    this.nim = data.nim;
    this.currentMahasiswaID = data.id;
  }

  UpdateRecords() {
    let bodyData = {
      "nama": this.nama,
      "jurusan": this.jurusan,
      "nim": this.nim,
    };

    this.http.put("http://127.0.0.1:8000/api/update" + "/" + this.currentMahasiswaID, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      this.displayAlert("Data berhasil diupdate");
      this.getAllMahasiswa();
      this.resetForm();
    });
  }

  save() {
    if (this.currentMahasiswaID === '') {
      this.register();
    } else {
      this.UpdateRecords();
    }
  }

  setDelete(data: any) {
    this.http.delete("http://127.0.0.1:8000/api/delete" + "/" + data.id).subscribe((resultData: any) => {
      console.log(resultData);
      this.displayAlert("Data Terhapus");
      this.getAllMahasiswa();
    });
  }

  resetForm() {
    this.nama = '';
    this.jurusan = '';
    this.nim = null;
    this.currentMahasiswaID = '';
  }

  displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000); // Menghilang setelah 3 detik
  }
}
