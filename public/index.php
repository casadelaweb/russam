<?php
require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../core/Kernel/Router.php';
require_once __DIR__ . '/../core/Kernel/Controller.php';
require_once __DIR__ . '/../core/Kernel/Model.php';
require_once __DIR__ . '/../core/Kernel/View.php';

use App\App;
use App\Controllers\PageController;
use App\Models\PageModel;

$app = new App();

$app->router->add('', PageController::class, new PageModel('Главная страница', 'Краткое описание', '/', 'home'));
$app->router->add('catalog', PageController::class, new PageModel('Каталог', 'Краткое описание', '/catalog', 'catalog'));

$app->run();


