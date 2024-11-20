<?php
/** @var string $title */
/** @var string $price */
/** @var string $priceOld */
/** @var string $discount */
/** @var string $url */
/** @var string $imgUrl */
?>

<article class="productCard">
  <a href="<?= $url; ?>">
    <picture class="productCardPicture">
      <img alt="img" class="productCardImg" loading="lazy" src="<?= $imgUrl; ?>">
    </picture>
  </a>
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
    <a href="<?= $url; ?>">
      <?= $title; ?>
    </a>
  </h2>
  <button class="productCardCart" type="button">
    В корзину
  </button>
</article>
