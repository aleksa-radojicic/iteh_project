<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            // ProductCategorySeeder::class,
            // UserSeeder::class,
            ProductSeeder::class,
            // OrderSeeder::class,
            // OrderItemSeeder::class
        ]);

        // User::factory(1)->create();
        // Product::factory(1000)->create();
    }
}
