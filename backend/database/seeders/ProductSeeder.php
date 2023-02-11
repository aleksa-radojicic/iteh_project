<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::truncate();

        Product::insert([
            [
                'name' => 'EHEIM External Filter',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'featured1.jpg',
                'image2' => 'featured1.jpg2',
                'image3' => 'featured1.jpg3',
                'image4' => 'featured1.jpg4',
                'price' => 149.99,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'EHEIM Smart climate controller',
                'description' => 'the device which controlls climate parameters',
                'image' => 'featured2.jpg',
                'image2' => 'featured1.jpg2',
                'image3' => 'featured1.jpg3',
                'image4' => 'featured1.jpg4',
                'price' => 299.99,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'EHEIM Autofeeder',
                'description' => 'autofeeder from EHEIM',
                'image' => 'featured3.jpg',
                'image2' => 'featured1.jpg2',
                'image3' => 'featured1.jpg3',
                'image4' => 'featured1.jpg4',
                'price' => 39.99,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Sera Marine Granules Nature',
                'description' => 'marine granules nature from Sera',
                'image' => 'featured1.jpg',
                'image2' => 'featured1.jpg2',
                'image3' => 'featured1.jpg3',
                'image4' => 'featured1.jpg4',
                'price' => 5.99,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'EHEIM Internal Filter',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'featured1.jpg',
                'image2' => 'featured1.jpg2',
                'image3' => 'featured1.jpg3',
                'image4' => 'featured1.jpg4',
                'price' => 149.99,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
