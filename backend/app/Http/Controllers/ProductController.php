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
    public function showProductsPerPage($offset, $total_records_per_page)
    {


        // $number_of_products = Product::count();

        $products = DB::table('products')->skip($offset)->take($total_records_per_page)->get();

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
            return response()->json($validator->errors());
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
            'message' => 'Successfully created a product',
        ]);
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
    public function update(Request $request, Product $product)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string|max:100',
            'price' => 'required',
            'image' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

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
