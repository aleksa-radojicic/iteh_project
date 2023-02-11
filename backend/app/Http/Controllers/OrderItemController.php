<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class OrderItemController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'price' => 'required',
            'quantity' => 'required',
        ]);

        if ($validator->fails())
        {
            return response()->json($validator->errors());
        }

        OrderItem::create([
            'order_id' => $request->order_id,
            'product_id' => $request->product_id,
            'price' => $request->price,
            'quantity' => $request->quantity,
        ]);

        return response()->json([
            'message' => 'Successfully created order item',
        ]);
    }
}
