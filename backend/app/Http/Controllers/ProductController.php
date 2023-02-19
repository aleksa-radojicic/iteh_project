<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{

    public $total_records_per_page = 1;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::with('product_category')->get();

        if ($products) {
            return new ProductCollection($products);
        }
        return response()->json('Products not found', 404);
    }


    //MORE WORK NEEDS TO BE DONE HERE
    public function showProductsPerPage($page)
    {
        $total_records_per_page = 3;
        $offset = ($page - 1) * $total_records_per_page;

        $products = Product::with('product_category')->skip($offset)->take($total_records_per_page)->get();

        if ($products) {
            return new ProductCollection($products);
        }
        return response()->json('Products not found', 404);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string|max:100',
            'price' => 'required',
            'image' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ]);
        }

        Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $request->image,
            'image2' => $request->image2,
            'image3' => $request->image3,
            'image4' => $request->image4,
            'price' => $request->price,
            'product_category_id' => $request->product_category_id,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Successfully created a product',
        ]);

        return $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $product = Product::find($id);

        if ($product) {

            return new ProductResource($product);
        }
        return response()->json('Product not found', 404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required|string',
        //     'description' => 'required|string|max:100',
        //     'price' => 'required',
        //     'image' => 'required'
        // ]);

        // if ($validator->fails()) {
        //     return response()->json([
        //         'success' => false,
        //         'errors' => $validator->errors()
        //     ]);
        // }
        $product = Product::find($id);
        $product->name = $request->name;
        $product->description = $request->description;
        $product->image = $request->image;
        $product->image2 = $request->image2;
        $product->image3 = $request->image3;
        $product->image4 = $request->image4;
        $product->price = $request->price;
        $product->product_category_id = $request->product_category_id;

        $product->save();

        return response()->json([
            'success' => true,
            'message' => 'Successfully updated the product',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
