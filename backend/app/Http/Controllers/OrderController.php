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
        $validator = Validator::make($request->all(), [
            'cost' => 'required',
            'user_phone' => 'required|string|max:12',
            'user_city' => 'required|string|max:30',
            'user_address' => 'required|string|max:30',
            'order_items' => 'required',
        ]);

        if ($validator->fails()) {
            $result = [
                "success" => false,
                "errors" => $validator->errors()
            ];

            return response()->json($result);
        }

        try {
            DB::beginTransaction();

            $order = Order::create([
                'cost' => $request->cost,
                'user_id' => $request->user_id,
                'user_phone' => $request->user_phone,
                'user_city' => $request->user_city,
                'user_address' => $request->user_address,
            ]);

            foreach ($request->order_items as $order_item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $order_item['product']['id'],
                    'price' => $order_item['price'],
                    'quantity' => $order_item['quantity'],
                    
                ]);
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

        $result = [
            "success" => true,
            "order" => $order
        ];

        return response()->json($result);
    }
}
