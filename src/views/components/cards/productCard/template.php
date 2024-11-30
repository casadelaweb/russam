<?php
/** @var string $title */
/** @var string $price */
/** @var string $priceOld */
/** @var string $discount */
/** @var string $url */
/** @var array $images */
/** @var string $imgUrl */
?>

<article class="productCard">
  <?php if (isset($images) && count($images) > 1): ?>
    <div class="productCardSlider swiper">
      <div class="swiper-wrapper">
        <?php foreach ($images as $image): ?>
          <div class="swiper-slide">
            <span class="swiper-lazy-preloader"></span>
            <a href="<?= $url; ?>" title="<?= $title; ?>">
              <picture class="productCardPicture">
                <img alt="img" class="productCardImg" loading="lazy"
                     src="<?= $image; ?>">
              </picture>
            </a>
          </div>
        <?php endforeach; ?>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  <?php else: ?>
    <a href="<?= $url; ?>" title="<?= $title; ?>">
      <picture class="productCardPicture">
        <img alt="img" class="productCardImg" loading="lazy" src="<?= $imgUrl; ?>">
      </picture>
    </a>
  <?php endif; ?>
  <div class="productCardTags">
    <span class="productCardTag">NEW</span>
  </div>
  <button class="productCardFav" type="button">
    <span class="iconfont icon-heart-outline"></span>
    <span class="iconfont icon-heart-fill"></span>
  </button>
  <div class="productCardPrices">
    <div class="productCardPriceCurrent">
      <?= $price; ?>
    </div>
    <span class="productCardPriceOld">
      <?= $priceOld; ?>
    </span>
    <span class="productCardDiscount">
      <?= $discount; ?>
    </span>
  </div>
  <h2 class="productCardTitle">
    <a href="<?= $url; ?>" title="<?= $title; ?>">
      <?= $title; ?>
    </a>
  </h2>
  <button class="productCardCart" type="button">
    В корзину
  </button>
</article>
