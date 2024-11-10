<?php namespace Middlewares;

class Render {
  public static function component(string $name, array $props = []): void {
    extract($props);
    ob_start();
    include $_SERVER['DOCUMENT_ROOT'] . "/../src/views/components/$name/template.php";
    $output = ob_get_clean();
    echo $output;
  }

  public static function page(string $name): void {
    include_once $_SERVER['DOCUMENT_ROOT'] . "/../src/views/pages/$name/template.php";
  }
}
