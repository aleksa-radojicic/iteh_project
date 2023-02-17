<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderItemCollection;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class OrderOrderItemController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $order_id = $id;

        //only allow access for orders of authenticated user
        // $order_items = OrderItem::with(['product', 'order'])->whereHas("order", function ($query) {
        //     $query->where("user_id", Auth::id());
        // })->where('order_id', $order_id)->get();

        $order_items = OrderItem::where("order_id", $order_id)->get();
        

        if ($order_items->isEmpty()) 
        {
            return "Order doesn't exist.";
        }
        return new OrderItemCollection($order_items);
    }
}
