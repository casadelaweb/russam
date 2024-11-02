<?php use Core\Middlewares\Render;

/** @var string $title */
/** @var integer $quantity */
/** @var string $url */
/** @var string $buttonText */
/** @var array $products */
?>

<section class="sectionProducts">
  <div class="sectionProductsContainer">
    <div class="sectionProductsHeader">
      <h2 class="sectionProductsTitle">
        <a href="<?= $url; ?>">
          <span><?= $title; ?></span>
        </a>
        <span class="sectionProductsQuantity">
          (<?= $quantity; ?>)
        </span>
      </h2>
      <a class="sectionProductsButton" href="<?= $url; ?>">
        <?= $buttonText; ?>
      </a>
    </div>
    <div class="sectionProductsSlider swiper">
      <div class="swiper-wrapper">
        <?php foreach ($products as $product): ?>
          <div class="swiper-slide">
            <?php Render::component('cards/productCard', [
              'title' => $product['title'],
              'price' => $product['price'],
              'priceOld' => $product['priceOld'],
              'discount' => $product['discount'],
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
      <div class="swiper-pagination"></div>
    </div>
  </div>
</section>
