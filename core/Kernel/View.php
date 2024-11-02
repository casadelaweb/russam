<?php

namespace Core\Kernel;
class View {
  public static function render(string $view, array $data = []): void {
    extract($data);
    require __DIR__ . "/../app/Views/$view.php";
  }
}
