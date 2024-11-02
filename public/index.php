<?php
require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../core/Kernel/Router.php';
require_once __DIR__ . '/../core/Kernel/Controller.php';
require_once __DIR__ . '/../core/Kernel/Model.php';
require_once __DIR__ . '/../core/Kernel/View.php';

use Core\App\App;
use Core\App\Controllers\PageController;
use Core\App\Models\PageModel;

$app = new App();

$app->router->add('', PageController::class, new PageModel('Главная страница', 'Краткое описание', '/', 'index'));

$app->run();


