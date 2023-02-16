<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderOrderItemController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->group(function () {

    //WORKS
    Route::get('user', [UserController::class, 'index']);

    //WORKS
    //HOWEVER, VALIDATION FOR ORDERITEM HAS TO BE IMPLEMENTED
    Route::post('orders', [OrderController::class, 'store']);

    //WORKS
    Route::get('order_items', [OrderOrderItemController::class, 'show']);

    //WORKS
    Route::resource('products', ProductController::class)->only(['show']);

    //NEEDS TO BE IMPLEMENTED PROPERLY
    Route::get('shop', [ProductController::class, 'showProductsPerPage']);

    //WORKS
    Route::post('/logout', [AuthController::class, 'logout']);
});


//WORKS
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {

    //WORKS
    Route::get('orders', [OrderController::class, 'index']);

    //WORKS
    Route::get('products', [ProductController::class, 'index']);
    //WORKS
    Route::post('products', [ProductController::class, 'store']);
    //WORKS (x-www-form)
    Route::put('products/{id}', [ProductController::class, 'update']);
});

//EVERYTHING BELOW WORKS
Route::resource('products', ProductController::class)->only(['show']);

Route::get('/login', function () {
    return response()->json('Please log in');
})->name('login');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('products', [ProductController::class, 'index']);
