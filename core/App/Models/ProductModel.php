<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model {
  protected $table = 'products';

  protected $fillable = [
    'name',
    'short_description',
    'detailed_description',
    'price',
    'discount',
    'old_price',
    'quantity',
    'image',
    'images',
  ];

  protected $casts = [
    'images' => 'array',
  ];
}

