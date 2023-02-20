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
                'description' => fake()->paragraph(35),
                'image' => 'featured' . rand(1, 20) . '.jpg',
                'image2' => 'featured' . rand(1, 20) . '.jpg',
                'image3' => 'featured' . rand(1, 20) . '.jpg',
                'image4' => 'featured' . rand(1, 20) . '.jpg',
                'price' => rand(1, 10000) / 100,
                'product_category_id' => rand(1, 5),
        ];
    }
}
