<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Order::truncate();

        Order::insert([
            [

                'cost' => 2 * 149.99,
                'user_id' => 1,
                'user_phone' => '125313513',
                'user_city' => 'Dubrovnik',
                'user_address' => 'Svecenika Matije 41',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'cost' => 149.99 + 3 * 5.99,
                'user_id' => 1,
                'user_phone' => '725113513',
                'user_city' => 'Mostar',
                'user_address' => 'Uskoka Stanimira 25',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'cost' => 5 * 39.99,
                'user_id' => 2,
                'user_phone' => '9865138026',
                'user_city' => 'Prilep',
                'user_address' => 'Dimitrija Kamenovica 9A',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'cost' => 3 * 149.99,
                'user_id' => 3,
                'user_phone' => '67325897530',
                'user_city' => 'Skadar',
                'user_address' => 'Kraljice Milice 88',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}