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
                'name' => 'Lepenka 1mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'lepenka.jpg',
                'price' => 100,
                'quantity' => 20,
                'product_category_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Lepenka 2mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'lepenka.jpg',
                'price' => 150,
                'quantity' => 20,
                'product_category_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Lepenka 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'lepenka.jpg',
                'price' => 200,
                'quantity' => 20,
                'product_category_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Providni 2mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'transparent.jpg',
                'price' => 1200,
                'quantity' => 20,
                'product_category_id' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Beli 2mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'white.jpg',
                'price' => 1200,
                'quantity' => 20,
                'product_category_id' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Crni 2mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'black.jpg',
                'price' => 1200,
                'quantity' => 20,
                'product_category_id' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Ogledalo Srebro 2mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'mirror_silver.jpg',
                'price' => 2300,
                'quantity' => 20,
                'product_category_id' => 7,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Ogledalo Zlato 2mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'mirror_gold.jpg',
                'price' => 2300,
                'quantity' => 20,
                'product_category_id' => 7,
                'created_at' => now(),
                'updated_at' => now()
            ],

            [
                'name' => 'Klirit Beli 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'white.jpg',
                'price' => 1300,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Crni 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'black.jpg',
                'price' => 1300,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Providni 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'transparent.jpg',
                'price' => 1300,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Solid Crvena 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'red.jpg',
                'price' => 1400,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ], [
                'name' => 'Klirit Solid Zelena 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'green.jpg',
                'price' => 1400,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Solid Plava 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'blue.jpg',
                'price' => 1400,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Solid Zuti 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'yellow.png',
                'price' => 1400,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Solid Siva 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'grey.png',
                'price' => 1400,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Solid Roza 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'pink.jpg',
                'price' => 1400,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Mat Beli 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'matte.jpg',
                'price' => 1700,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Providni Crni 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'black_transparent.jpg',
                'price' => 1500,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Providni Plavi 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'blue_transparent.jpg',
                'price' => 1500,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Providni Zelena 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'green_transparent.jpg',
                'price' => 1500,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Providni Crvena 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'red_transparent.jpg',
                'price' => 1500,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Providni Zuta 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'yellow_transparent.jpg',
                'price' => 1500,
                'quantity' => 20,
                'product_category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],

            [
                'name' => 'Lesonit Sirov',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'sirovi.jpg',
                'price' => 350,
                'quantity' => 20,
                'product_category_id' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Lesonit Crni',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'black_lezonit.jpg',
                'price' => 350,
                'quantity' => 20,
                'product_category_id' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],            [
                'name' => 'Lesonit Beli',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'beli.jpg',
                'price' => 350,
                'quantity' => 20,
                'product_category_id' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],            [
                'name' => 'Lesonit Sivi',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'sivi.jpg',
                'price' => 350,
                'quantity' => 20,
                'product_category_id' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Klirit Roze Ogledalo 3mm',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'mirror_pink.jpg',
                'price' => 2300,
                'quantity' => 20,
                'product_category_id' => 7,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Lepak',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'lepak.jpg',
                'price' => 1500,
                'quantity' => 20,
                'product_category_id' => 6,
                'created_at' => now(),
                'updated_at' => now()
            ],



        ]);
    }
}
