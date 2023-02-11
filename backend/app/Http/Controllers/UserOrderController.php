<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use App\Models\Order;
use Illuminate\Http\Request;

class UserOrderController extends Controller
{

        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($user_id)
    {
        $orders = Order::where('user_id', $user_id)->get();

        if (!$orders) 
        {
            return response()->json('You have no orders.');
        }

        return new OrderCollection($orders);
    }
}
