<?php

require_once __DIR__ . '/../bootstrap.php';

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

Capsule::schema()->create('migrations', function (Blueprint $table) {
  $table->bigIncrements('id');
  $table->string('migration');
  $table->timestamps();
});

echo "Миграция успешно выполнена: таблица 'migrations' создана.\n";
