<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
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
                'email' => 'blagoje@',
                'password' => Hash::make('blagoje'),
                'user_type' => 'regular',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'name' => 'Vojihna',
                'email' => 'vojihna@',
                'password' => Hash::make('vojihna'),
                'user_type' => 'regular',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Hrvatin',
                'email' => 'hrvatin@',
                'password' => Hash::make('hrvatin'),
                'user_type' => 'regular',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now()
            ],

            [
                'name' => "Milan",
                'email' => "milan@",
                'password' => Hash::make("milan"),
                'user_type' => 'admin',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => "Nebojsa",
                'email' => "nebojsa@",
                'password' => Hash::make("nebojsa"),
                'user_type' => 'admin',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => "Aleksa",
                'email' => "aleksa@",
                'password' => Hash::make("aleksa"),
                'user_type' => 'admin',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
