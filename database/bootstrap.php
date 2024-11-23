<?php

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

$capsule->addConnection([
  'driver' => 'mysql',
  'host' => 'db',
  'database' => 'main',
  'username' => 'root',
  'password' => '',
  'charset' => 'utf8mb4',
  'collation' => 'utf8mb4_unicode_ci',
  'prefix' => '',
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();
