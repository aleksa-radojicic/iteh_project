<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderOrderItemController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductCategoryController;

use App\Models\ProductCategory;
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

//NEEDS TO BE IMPLEMENTED PROPERLY
Route::get('shop/{page}', [ProductController::class, 'showProductsPerPage']);


//EVERYTHING BELOW WORKS
Route::resource('products', ProductController::class)->only(['show']);

Route::get('/login', function () {
    return response()->json('Please log in');
})->name('login');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('products', [ProductController::class, 'index']);

//WORKS
Route::resource('shop/product', ProductController::class)->only(['show']);
Route::post('admin/products', [ProductController::class, 'store']);
Route::get('/product_categories', [ProductCategoryController::class, 'index']);
