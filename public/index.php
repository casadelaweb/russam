<?php
require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../core/Kernel/Router.php';
require_once __DIR__ . '/../core/Kernel/Controller.php';
require_once __DIR__ . '/../core/Kernel/Model.php';
require_once __DIR__ . '/../core/Kernel/View.php';
require_once __DIR__ . '/../database/bootstrap.php';

use App\App;
use App\Controllers\PageController;
use App\Models\PageModel;

//use App\Models\ProductModel;
//use App\Models\User;

$app = new App();

$pageHome = new PageModel(
  'Главная',
  'Ювелирные украшения, столовое серебро и предметы интерьера',
  '/',
  'home',
  null,
);
$pageCatalog = new PageModel(
  'Каталог',
  'Ювелирные украшения, столовое серебро и предметы интерьера по лучшим ценам в интернет-магазине ювелирных магазинов «Русские самоцветы» с доставкой по России. За более подробной информацией обращайтесь по телефону 8 (800) 777-19-12',
  '/catalog',
  'catalog',
  $pageHome,
);

$app->router->add('', PageController::class, $pageHome);
$app->router->add('catalog', PageController::class, $pageCatalog);

$app->run();
