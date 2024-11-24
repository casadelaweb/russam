<?php
require_once __DIR__ . '/../bootstrap.php';

use Illuminate\Database\Capsule\Manager as Capsule;

Capsule::schema()->create('products', function ($table) {
  $table->id();
  $table->string('name')->nullable();
  $table->text('short_description')->nullable();
  $table->text('detailed_description')->nullable();
  $table->decimal('price', 10, 2)->nullable();
  $table->decimal('discount', 10, 2)->nullable();
  $table->decimal('old_price', 10, 2)->nullable();
  $table->integer('quantity')->nullable();
  $table->string('image')->nullable();
  $table->json('images')->nullable();
  $table->softDeletes();
  $table->timestamps();
});

