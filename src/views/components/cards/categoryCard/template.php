<?php
/** @var string $title */
/** @var string $url */
/** @var string $imgUrl */
?>

<article class="categoryCard">
  <a href="<?= $url; ?>">
    <picture class="categoryCardPicture">
      <img src="<?= $imgUrl; ?>" alt="img" class="categoryCardImg" loading="lazy">
    </picture>
  </a>
  <h3 class="categoryCardTitle">
    <a href="<?= $url; ?>">
      <?= $title; ?>
    </a>
  </h3>
</article>
