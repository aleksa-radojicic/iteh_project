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

                'name' => "Aquariums",
                'created_at' => now(),
            ],
            [

                'name' => "Food",
                'created_at' => now(),
            ],
            [

                'name' => "Technical products",
                'created_at' => now(),
            ],
            [

                'name' => "Plants",
                'created_at' => now(),
            ],
            [

                'name' => "Animals",
                'created_at' => now(),
            ],
        ]);
    }
}
