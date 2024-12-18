<?php

namespace App\Controllers;

use App\Models\PageModel;
use Kernel\Controller;

class PageController extends Controller {
  public function index(?PageModel $page = null): void {

    /** Текущая страница */
    define("Page", $page);

    include_once __DIR__ . '/../Views/main.php';
  }
}

