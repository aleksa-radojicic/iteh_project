<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ProductCategory::truncate();

        ProductCategory::insert([
            [

                'name' => "Lepenka",
                'created_at' => now(),
            ],
            [

                'name' => "Klirit 2mm",
                'created_at' => now(),
            ],
            [

                'name' => "Klirit 3mm",
                'created_at' => now(),
            ],
            [

                'name' => "Lesonit",
                'created_at' => now(),
            ],
            [

                'name' => "Jelkica",
                'created_at' => now(),
            ],
            [

                'name' => "Ostalo",
                'created_at' => now(),
            ],
        ]);
    }
}
