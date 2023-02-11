<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderItemCollection;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderOrderItemController extends Controller
{
        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($order_id)
    {
        $order_items = OrderItem::where('order_id', $order_id)->get();

        if ($order_items)
        {
            return new OrderItemCollection($order_items);
        }

        return response()->json('Order items not found.');
    }
}
