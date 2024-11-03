<?php

namespace Kernel;
class Controller {
  public function model(string $model): object {
    require_once __DIR__ . "/../app/Models/$model.php";
    return new $model();
  }

  public function view(string $view, array $data = []): void {
    require_once __DIR__ . "/../app/Views/$view.php";
  }
}
