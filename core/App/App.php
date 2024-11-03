<?php

namespace App;

use Kernel\Router;

class App {
  public Router $router;

  public function __construct() {
    $this->router = new Router();
  }

  public function run(): void {
    $this->router->dispatch($_SERVER['REQUEST_URI']);
  }
}
