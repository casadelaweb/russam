<?php

namespace App\Models;

use Kernel\Model;

class PageModel {
  public string $title;
  public string $description;
  public string $url;
  public string $view;

  public function __construct(
    string $title,
    string $description,
    string $url,
    string $view,
  ) {
    $this->title = $title;
    $this->description = $description;
    $this->url = $url;
    $this->view = $view;
  }

  public function getData(): array {
    return [
      'title' => $this->title,
      'description' => $this->description,
      'url' => $this->url,
      'view' => $this->view,
    ];
  }
}
