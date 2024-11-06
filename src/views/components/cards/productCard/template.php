<?php
/** @var string $title */
/** @var string $price */
/** @var string $priceOld */
/** @var string $discount */
/** @var string $url */
/** @var array $images */
?>

<article class="productCard">
  <a href="<?= $url; ?>">
    <picture class="productCardPicture">
      <img alt="img" class="productCardImg" loading="lazy"
           src="../../assets/img/product-1.jpg">
    </picture>
  </a>
  <div class="productCardTags">
    <span class="productCardTag">NEW</span>
  </div>
  <div>
    <div class="productCardPrice">
      от 77 975 ₽
    </div>
    <span class="productCardPrice _old">
      150 000 ₽
    </span>
    <span class="productCardDiscount">
      25%
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
