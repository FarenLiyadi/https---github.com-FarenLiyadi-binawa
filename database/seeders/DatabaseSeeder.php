<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            'name' => 'bryan',
            'email' => 'bryan@test.com',
            'roles' => 'SUPERADMIN',
            'password' => bcrypt('12345678'),
            'active' => true
        ]);

        User::create([
            'name' => 'andre',
            'email' => 'andre@test.com',
            'roles' => 'USER',
            'password' => bcrypt('12345678'),
            'active' => false
        ]);

        User::create([
            'name' => 'jacob',
            'email' => 'jacob@test.com',
            'roles' => 'USER',
            'password' => bcrypt('12345678'),
            'active' => false
        ]);
    }
}
