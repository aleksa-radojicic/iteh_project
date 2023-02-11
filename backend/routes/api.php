<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\OrderOrderItemController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserOrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {

    Route::resource('orders', OrderController::class)->only(['store']);

    Route::resource('order_items', OrderItemController::class)->only(['store']);

    Route::resource('users.orders', UserOrderController::class)->only(['index']);

    Route::resource('orders.order_items', OrderOrderItemController::class)->only(['index']);

    Route::resource('products', ProductController::class)->only(['index', 'show']);

    Route::post('/logout', [AuthController::class, 'logout']);
});


Route::resource('products', ProductController::class)->only(['index', 'show']);

Route::get('/login', function () {
    return response()->json('Please log in');
})->name('login');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
