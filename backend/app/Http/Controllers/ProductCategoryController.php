<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCategoryCollection;
use App\Models\ProductCategory;


class ProductCategoryController extends Controller
{


    public function index()
    {
        $product_categories = ProductCategory::get();

        if ($product_categories) {
            return new ProductCategoryCollection($product_categories);
            // return response()->json([
            //     'success' => true,
            //     'message' => 'Successfully created a product',
            // ]);
        }
        return response()->json('Products not found', 404);
    }
}
