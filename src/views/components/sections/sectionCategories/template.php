<?php use Middlewares\Render;

/** @var string $title */
/** @var array $categories */
?>

<section class="sectionCategories">
  <div class="sectionCategoriesContainer">
    <h2 class="sectionCategoriesTitle">
      <?= $title; ?>
    </h2>
    <div class="sectionCategoriesBody">
      <div class="sectionCategoriesSlider swiper">
        <div class="swiper-wrapper">
          <?php foreach ($categories as $category): ?>
            <div class="swiper-slide">
              <span class="swiper-lazy-preloader"></span>
              <?php Render::component('cards/categoryCard', [
                'title' => $category['title'],
                'url' => $category['url'],
                'imgUrl' => $category['imgUrl'],
              ]); ?>
            </div>
          <?php endforeach; ?>
        </div>
        <button class="swiper-button-prev" type="button">
          <span class="iconfont icon-arrow-left"></span>
        </button>
        <button class="swiper-button-next" type="button">
          <span class="iconfont icon-arrow-right"></span>
        </button>
      </div>
    </div>
  </div>
</section>
