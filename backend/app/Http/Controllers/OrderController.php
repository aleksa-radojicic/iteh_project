<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class OrderController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::with('order_items')->get();

        if ($orders) {
            return new OrderCollection($orders);
        }
        return response()->json('Products not found');
    }

    public function store(Request $request)
    {
        global $message;
        try
        {
        DB::transaction(function () {

            global $request;
            global $message;
            $validator = Validator::make($request->all(), [
                'cost' => 'required',
                'user_phone' => 'required|string|max:12',
                'user_city' => 'required|string|max:100',
                'user_address' => 'required|string|max:100',
                'order_items' => 'required',

                //VALIDATION FOR ORDERITEM DOESN'T WORK

                // 'order_items.*.price' => Rule::forEach(function ($attribute, $value) {
                //     return 
                //         'required'
                //     ;}),

                // 'order_items.*.quantity' => Rule::forEach(function ($attribute, $value) {
                //     return 
                //         'required'
                //     ;}),
                // 'order_items.*.product_id' => Rule::forEach(function ($attribute, $value) {
                //     return 
                //         'required'
                //     ;}),
                ]);

            if ($validator->fails()) {
                $message = json_encode($validator->errors());
            }

            $order = Order::create([
                'cost' => $request->cost,
                'user_id' => Auth::id(),
                'user_phone' => $request->user_phone,
                'user_city' => $request->user_city,
                'user_address' => $request->user_address,
            ]);

            echo json_encode($request->all());

            // $validator = Validator::make($request->order_items->all(), [
            //     'price' => 'required',
            //     'quantity' => 'required',
            //     'product_id' => 'required',
            // ]);

            // if ($validator->fails()) {
            //     $message = response()->json($validator->errors());
            // }

            foreach ($request->order_items as $order_item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $order_item['product_id'],
                    'price' => $order_item['price'],
                    'quantity' => $order_item['quantity'],
                ]);
            }

            $message = 'Successfully created an order';
            // return response()->json([
            //     'message' => 'Successfully created an order',
            // ]);
        });
        } catch (\Exception $e)
        {
            echo 'An error occured.';
        } finally
        {
        echo $message;

        }
    }
}
