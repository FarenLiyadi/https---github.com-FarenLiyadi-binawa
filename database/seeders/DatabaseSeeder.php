<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\CompanyModel;
use Illuminate\Database\Seeder;
use \App\Models\User;

use function Laravel\Prompts\password;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        User::create([
            'name' => 'toris',
            'email' => 'toris@gmail.com',
            'email_verified_at' => date("Y-m-d"),
            'roles' => 'ADMIN',
            'password' => bcrypt('12345678'),
            'active' => true
        ]);

        User::create([
            'name' => 'faren',
            'email' => 'faren@gmail.com',
            'email_verified_at' => date("Y-m-d"),
            'roles' => 'PELATIH',
            'password' => bcrypt('12345678'),
            'active' => false
        ]);

        User::create([
            'name' => 'alex',
            'email' => 'alex@gmail.com',
            'email_verified_at' => date("Y-m-d"),
            'roles' => 'USER',
            'password' => bcrypt('12345678'),
            'active' => false
        ]);
        User::create([
            'name' => 'bryan',
            'email' => 'bryan@gmail.com',
            'email_verified_at' => date("Y-m-d"),
            'roles' => 'USER',
            'password' => bcrypt('12345678'),
            'active' => false
        ]);

        CompanyModel::create([
            'judul'=>'1 bulan',
            'desc'=>'Sangat cocok buat PEMULA yang ingin latihan.',
            'harga'=>'300',
        ]);
        CompanyModel::create([
            'judul'=>'1 bulan',
            'desc'=>'Sangat cocok buat PEMULA yang ingin latihan.',
            'harga'=>'300',
        ]);
        CompanyModel::create([
            'judul'=>'1 bulan',
            'desc'=>'Sangat cocok buat PEMULA yang ingin latihan.',
            'harga'=>'300',
        ]);
    }
}
