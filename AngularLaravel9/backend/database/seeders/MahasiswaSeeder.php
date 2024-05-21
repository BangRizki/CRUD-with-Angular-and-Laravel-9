<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Mahasiswa;

class MahasiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Contoh penambahan data ke tabel mahasiswa
        Mahasiswa::create([
            'nama' => 'Rizki',
            'jurusan' => 'Teknik Informatika',
            'nim' => '10101010'
        ]);

        Mahasiswa::create([
            'nama' => 'Rizka',
            'jurusan' => 'Sistem Informasi',
            'nim' => '20202020'
        ]);

        Mahasiswa::create([
            'nama' => 'Rizko',
            'jurusan' => 'Sistem Informasi',
            'nim' => '30303030'
        ]);
    }
}
