<?php

use App\Models\PageModel;

function renderBreadcrumbs(PageModel|null $page): void {
  // Проверка, что $page не null
  if ($page === null) {
    return;
  }

  $active = Page && Page->url === $page->url ? '_active' : '';
  $parent = $page->parent;

  // Рекурсивный вызов для родителя, если он существует
  if ($parent) {
    renderBreadcrumbs($parent);
  }

  // Рендер текущего элемента, если данные присутствуют
  echo "
  <li class='breadcrumbsItem' itemprop='itemListElement' itemscope itemtype='http://schema.org/ListItem'>
    <a itemprop='item' class='breadcrumbsLink $active' href='$page->url' title='$page->title'>
      $page->title
    </a>
  </li>";
}

?>

<div class="breadcrumbs">
  <div class="breadcrumbsContainer">
    <ul class="breadcrumbsList" itemscope itemtype="https://schema.org/BreadcrumbList">
      <?php renderBreadcrumbs(Page); ?>
    </ul>
  </div>
</div>
