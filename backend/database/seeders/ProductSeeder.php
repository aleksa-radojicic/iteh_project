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
                'image2' => 'featured1.jpg',
                'image3' => 'featured1.jpg',
                'image4' => 'featured1.jpg',
                'price' => 149.99,
                'product_category_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'EHEIM climacontrol+',
                'description' => <<<'DESCRIPTION'
EHEIM climacontrol+ is the new electronically controlled climate control device from EHEIM. You simply set the ideal water temperature wirelessly - via smartphone, tablet, or PC/MAC. If the water is too warm, the unit automatically cools down, and if it gets too cold it warms up. The unit monitors and controls everything. Also, it gives you advanced warning of any problems, such as if the required temperature is exceeded or undershot by 2 °C for more than 5 minutes, you receive a warning notification. High outdoor temperatures often cause the aquarium water to overheat in summer. This is extremely harmful to fish and all other living creatures. For example if the temperature is too high, corals die in the marine aquarium, and in freshwater aquariums, oxygen deficiency and algae proliferation occur quickly. EHEIM climacontrol+ is the optimal climate control device for aquariums. It has low energy consumption and works with environmentally friendly coolant.
DESCRIPTION,
                'image' => 'featured2.jpg',
                'image2' => 'featured9.jpg',
                'image3' => 'featured7.jpg',
                'image4' => 'featured13.jpg',
                'price' => 299.99,
                'product_category_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'EHEIM Autofeeder',
                'description' => 'autofeeder from EHEIM',
                'image' => 'featured3.jpg',
                'image2' => 'featured1.jpg',
                'image3' => 'featured1.jpg',
                'image4' => 'featured1.jpg',
                'price' => 39.99,
                'product_category_id' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Sera Marine Granules Nature',
                'description' => 'marine granules nature from Sera',
                'image' => 'featured4.jpg',
                'image2' => 'featured1.jpg',
                'image3' => 'featured1.jpg',
                'image4' => 'featured1.jpg',
                'price' => 5.99,
                'product_category_id' => 3,

                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'EHEIM Internal Filter',
                'description' => 'filter for freshwater and marine aquariums',
                'image' => 'featured2.jpg',
                'image2' => 'featured1.jpg',
                'image3' => 'featured1.jpg',
                'image4' => 'featured1.jpg',
                'price' => 149.99,
                'product_category_id' => 4,

                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'sera Fish tank',
                'description' => 'The sera AquaTank 160 liters (42 US gal.) offers a lot of space for the creative design of underwater worlds on a base area of 82 x 40 cm (32 x 16 in.) at a height of 50 cm (20 in.), but also community tanks in which the fish have sufficient space in each swimming zone. The tank can be set up with a cover or open. Thanks to safety bars on all sides, which are placed approx. 1 cm (0.4 in.) below the glass edge, the risk of fish jumping out or shrimp crawling out is considerably reduced when designing as an open aquarium. Incl. internal filter X-Edge 700, 150 watt heater thermostat and thermo-safe mat.',
                'image' => 'featured20.jpg',
                'image2' => 'featured20.jpg',
                'image3' => 'featured20.jpg',
                'image4' => 'featured20.jpg',
                'price' => 149.99,
                'product_category_id' => 5,

                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'sera Goldfish Granules',
                'description' => <<<'DESCRIPTION'
                Goldfish Granules is the staple food consisting of granules without dyes and preservatives for larger goldfish and other fastidious coldwater fish.

Due to its high quality ingredients, such as insect meal, omega fatty acids and mannan oligosaccharides, the food is excellently digestible and provides even the most fastidious fancy variants with all required nutrients.

The fish thus will grow strongly without fattening, and disease resistance is enhanced. The floating granules retain their shape and do not pollute the water.
DESCRIPTION,
                'image' => 'featured11.jpg',
                'image2' => 'featured11.jpg',
                'image3' => 'featured11.jpg',
                'image4' => 'featured11.jpg',
                'price' => 5.99,
                'product_category_id' => 1,

                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'sera Daphnia Snack',
                'description' => <<<'DESCRIPTION'
Daphnia Snack is the natural snack consisting of 100% water fleas for all larger fish.

The daphnia are rich in fibers and minerals and enhance readiness to spawn and metabolism. The small crustaceans are a natural nutrition source for numerous fish species and optimally fulfill the requirements of the fish.

The daphnia are caught in clean waters and gently dried in the sun, so their valuable nutrients are entirely retained.
DESCRIPTION,
                'image' => 'featured12.jpg',
                'image2' => 'featured12.jpg',
                'image3' => 'featured12.jpg',
                'image4' => 'featured12.jpg',
                'price' => 7.99,
                'product_category_id' => 1,

                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
