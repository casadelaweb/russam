<?php

require_once __DIR__ . '/../../vendor/autoload.php'; // Подключаем автозагрузчик Composer

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

$capsule = new Capsule;

// Подключение к базе данных
$capsule->addConnection([
  'driver' => 'mysql',
  'host' => 'db',  // Имя сервиса в docker-compose
  'database' => 'mydatabase', // Название вашей базы данных
  'username' => 'myuser', // Имя пользователя
  'password' => 'mypassword', // Пароль
  'charset' => 'utf8mb4',
  'collation' => 'utf8mb4_unicode_ci',
]);

// Настройка Eloquent
$capsule->setAsGlobal();
$capsule->bootEloquent();

// Создание таблицы migrations
Capsule::schema()->create('migrations', function (Blueprint $table) {
  $table->bigIncrements('id');
  $table->string('migration');
  $table->timestamps();
});

echo "Миграция успешно выполнена: таблица 'migrations' создана.\n";
