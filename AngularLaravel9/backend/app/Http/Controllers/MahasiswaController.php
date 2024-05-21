<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Mahasiswa;

class MahasiswaController extends Controller
{  
    public function getAll()
    {
        $mahasiswa = Mahasiswa::all();
        return response()->json($mahasiswa); 
    }   
    public function createData(Request $request)
    {
        $mahasiswa = new Mahasiswa([
            'nama' => $request->input('nama'),
            'jurusan' => $request->input('jurusan'),
            'nim' => $request->input('nim'),
        ]);
        $mahasiswa->save();
        return response()->json('created!');
    }
    // public function getOne($id)
    // {
    //     $mahasiswa = Mahasiswa::find($id);
    //     return response()->json($mahasiswa);
    // }
    public function updateData(Request $request, $id)
    {
       $mahasiswa = Mahasiswa::find($id);
       $mahasiswa->update($request->all());
       return response()->json('updated');
    }
    public function deleteData($id)
    {
        $mahasiswa = Mahasiswa::find($id);
        $mahasiswa->delete();
        return response()->json('deleted!');
    }
}
