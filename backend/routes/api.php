<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderOrderItemController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductCategoryController;
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

    Route::get('/user', [UserController::class, 'index']);

    Route::get('/order_items/{id}', [OrderOrderItemController::class, 'show']); 

    Route::post('/orders', [OrderController::class, 'store']);

    Route::post('/logout', [AuthController::class, 'logout']);
});


//WORKS
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {

    //WORKS
    Route::get('/orders', [OrderController::class, 'index']); 

    //Products
    Route::get('/products', [ProductController::class, 'index']); 
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']); 
});


Route::post('/register', [AuthController::class, 'register']); 
Route::post('/login', [AuthController::class, 'login']);       

Route::resource('shop/product', ProductController::class)->only(['show']);

//used on shop page, admin page for addProduct & editProduct
Route::get('/product_categories', [ProductCategoryController::class, 'index']);

Route::get('/shop', [ProductController::class, 'showProductsPerPage']); 

//used for pagination
Route::get('/numofprod', [ProductController::class, 'showNumberOfProducts']); 
