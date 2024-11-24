<?php

require_once __DIR__ . '/../bootstrap.php';

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

Capsule::schema()->create('users', function (Blueprint $table) {
  $table->id();
  $table->string('name');
  $table->string('email')->unique();
  $table->string('password');
  $table->softDeletes();
  $table->timestamps();
});

echo "Table 'users' created successfully.\n";
