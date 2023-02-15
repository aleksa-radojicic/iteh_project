<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'image',
        'image2',
        'image3',
        'image4',
        'product_category_id',
        'updated_at',
    ];

    public function order_item() 
    {
        return $this->hasOne(OrderItem::class);

    }

    public function product_category()
    {
        return $this->belongsTo(ProductCategory::class);
    }
}
