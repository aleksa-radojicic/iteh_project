<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class OrderController extends Controller
{
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'cost' => 'required',
            'user_phone' => 'required|string|max:12',
            'user_city' => 'required|string|max:100',
            'user_address' => 'required|string|max:100'
        ]);

        if ($validator->fails())
        {
            return response()->json($validator->errors());
        }

        Order::create([
            'cost' => $request->cost,
            'user_id' => Auth::user()->id,
            'user_phone' => $request->user_phone,
            'user_city' => $request->user_city,
            'user_address' => $request->user_address,
        ]);

        return response()->json([
            'message' => 'Successfully created an order',
        ]);
    }
}
