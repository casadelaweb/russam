<?php

require_once __DIR__ . '/../bootstrap.php';

use Illuminate\Database\Seeder;
use App\Models\ProductModel;

ProductModel::create([
  'name' => 'Product 1',
  'short_description' => 'Short description for product 1',
  'detailed_description' => 'Detailed description for product 1',
  'price' => 100.00,
  'discount' => 10.00,
  'old_price' => 120.00,
  'quantity' => 50,
  'image' => 'product1.jpg',
  'images' => json_encode(['product1.jpg', 'product1_1.jpg']),
]);

ProductModel::create([
  'name' => 'Product 2',
  'short_description' => 'Short description for product 2',
  'detailed_description' => 'Detailed description for product 2',
  'price' => 200.00,
  'discount' => 20.00,
  'old_price' => 250.00,
  'quantity' => 30,
  'image' => 'product2.jpg',
  'images' => json_encode(['product2.jpg', 'product2_1.jpg']),
]);

