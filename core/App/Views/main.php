<?php

use Core\App\Models\PageModel;
use Core\Middlewares\Helpers;
use Core\Middlewares\Render;

/** @var PageModel $page */
?>
<!doctype html>
<html lang="ru">
  <head itemscope itemtype="https://schema.org/WPHeader">
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <meta content="320" name="MobileOptimized">
    <meta content="True" name="HandheldFriendly">
    <title itemprop="headline">
      <?= $page->title ?>
    </title>
    <meta name="description"
          content="<?= $page->description ?>">
    <link rel="stylesheet" href="<?= Helpers::getFilePathWithHash('/assets/css/main.css'); ?>">
  </head>
  <body>
    <div id="app">
      <?php Render::component('sections/header') ?>
      <main class="main">
        <?php Render::page($page->view); ?>
      </main>
      <?php Render::component('sections/footer') ?>
      <div id="modals">
      </div>
    </div>
    <script src="<?= Helpers::getFilePathWithHash('/assets/js/main.js'); ?>"></script>
  </body>
</html>
