<?php

namespace Core\App\Controllers;

use Core\App\Models\PageModel;
use Core\Kernel\Controller;

class PageController extends Controller {
  public function index(?PageModel $page = null): void {
    include_once __DIR__ . '/../Views/main.php';
  }
}

