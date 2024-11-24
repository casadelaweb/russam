<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

$capsule->addConnection([
  'driver' => 'mysql',
  'host' => 'db',
  'database' => 'mydatabase',
  'username' => 'myuser',
  'password' => 'mypassword',
  'charset' => 'utf8mb4',
  'collation' => 'utf8mb4_unicode_ci',
  'prefix' => '',
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();
