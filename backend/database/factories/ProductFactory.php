<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            
                'name' => fake()->name(),
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium aperiam consequuntur fugiat esse dicta nihil quas modi voluptas dolore.',
                'image' => 'featured' . rand(1, 60) . '.jpg',
                'image2' => 'featured' . rand(1, 60) . '.jpg',
                'image3' => 'featured' . rand(1, 60) . '.jpg',
                'image4' => 'featured' . rand(1, 60) . '.jpg',
                'price' => rand(1, 10000) / 100,
                'product_category_id' => rand(1, 5),
        ];
    }
}
