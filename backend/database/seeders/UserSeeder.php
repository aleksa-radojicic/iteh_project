<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        User::truncate();

        User::insert([
            [
                'name' => 'Blagoje',
                'email' => 'blagojevic@email.com',
                'password' => 'blagoje',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'name' => 'Vojihna',
                'email' => 'vojihnovic@email.com',
                'password' => 'vojihna',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Hrvatin',
                'email' => 'hrvatinic@email.com',
                'password' => 'hrvatin',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
