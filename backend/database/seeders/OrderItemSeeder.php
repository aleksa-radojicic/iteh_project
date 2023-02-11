<?php

namespace Database\Seeders;

use App\Models\OrderItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        OrderItem::truncate();

        OrderItem::insert([
            [


                'order_id' => 1,
                'product_id' => 1,
                'price' => 149.99,
                'quantity' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [


                'order_id' => 2,
                'product_id' => 1,
                'price' => 149.99,
                'quantity' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [


                'order_id' => 2,
                'product_id' => 4,
                'price' => 5.99,
                'quantity' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [


                'order_id' => 3,
                'product_id' => 3,
                'price' => 39.99,
                'quantity' => 5,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [


                'order_id' => 5,
                'product_id' => 4,
                'price' => 149.99,
                'quantity' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],

        ]);
    }
}
