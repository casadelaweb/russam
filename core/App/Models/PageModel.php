<?php

namespace App\Models;

class PageModel {
  public string $title;
  public string $description;
  public string $url;
  public string $view;
  public PageModel|null $parent;

  public function __construct(string $title, string $description, string $url, string $view, PageModel|null $parent) {
    $this->title = $title;
    $this->description = $description;
    $this->url = $url;
    $this->view = $view;
    $this->parent = $parent;
  }

  public function getData(): array {
    return [
      'title' => $this->title,
      'description' => $this->description,
      'url' => $this->url,
      'view' => $this->view,
      'parent' => $this->parent,
    ];
  }
}
