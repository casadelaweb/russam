<?php

namespace Kernel;

use App\Models\PageModel;
use Exception;

class Router {
  public array $routes = [];

  public function add(string $route, string $controller, ?PageModel $page = null): void {
    $this->routes[$route] = [
      'controller' => $controller,
      'page' => $page,
    ];
  }

  public function dispatch(string $uri): void {
    try {
      $parsedUri = parse_url($uri);
      $path = $parsedUri['path'] ?? '/';
      $uri = trim($path, '/');

      if (($uri === '' || $uri === '/') && isset($this->routes[''])) {
        $route = $this->routes[''];
        $this->invokeController($route);
      } elseif (array_key_exists($uri, $this->routes)) {
        $route = $this->routes[$uri];
        $this->invokeController($route);
      } else {
        $this->renderError(404);
      }
    } catch (Exception $e) {
      $this->renderError(500);
    }
  }

  private function invokeController(array $route): void {
    $controllerClass = $route['controller'];
    $controller = new $controllerClass();
    $pageModel = $route['page'];

    if ($pageModel) {
      $controller->index($pageModel);
    } else {
      $controller->index(new PageModel('Default Title', 'Default Description', '/', 'default', null));
    }
  }


  private function renderError(int $statusCode): void {
    http_response_code($statusCode);
    if ($statusCode === 404) {
      include __DIR__ . '/../app/Views/errors/404.php';
    } elseif ($statusCode === 500) {
      include __DIR__ . '/../app/Views/errors/500.php';
    }
  }
}
