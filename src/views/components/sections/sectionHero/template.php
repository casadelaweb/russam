<?php $slides = [
  [
    'title' => 'коллекция',
    'brand' => 'CANDY',
    'description' => 'Яркая трендовая коллекция со смелыми решениями',
    'url' => '/catalog',
    'imgUrl' => '/assets/video/sectionHero/slide-1-mobile.mp4',
    'imgUrlDesktop' => '/assets/video/sectionHero/slide-1-desktop.mp4',
    'hasVideo' => true,

    /** css класс для смены цветовой темы
     * Всегда светлый текст или кнопка - _light
     * Светлый только на устройствах с шириной до 767px - _light-mobile
     * Светлый на устройствах с шириной 768px и более - _light-desktop
     * По умолчанию цвет будет темным.
     * */
    'colorScheme' => ' _light',
  ],
  [
    'title' => 'коллекция',
    'brand' => 'NIGHTSHADE',
    'description' => 'Готические элементы в современном видении',
    'url' => '/catalog',
    'imgUrl' => '/assets/img/sectionHero/slide-2-mobile-content.jpg',
    'imgUrlDesktop' => '/assets/img/sectionHero/slide-2-desktop-content.jpg',

    /** css класс для смены цветовой темы
     * Всегда светлый текст или кнопка - _light
     * Светлый только на устройствах с шириной до 767px - _light-mobile
     * Светлый на устройствах с шириной 768px и более - _light-desktop
     * По умолчанию цвет будет темным.
     * */
    'colorScheme' => ' _light-mobile',
  ],
  [
    'title' => 'коллекция',
    'brand' => 'MARQUIS',
    'description' => 'Романтика в новом прочтении',
    'url' => '/catalog',
    'imgUrl' => '/assets/img/sectionHero/slide-3-mobile-content.jpg',
    'imgUrlDesktop' => '/assets/img/sectionHero/slide-3-desktop-content.jpg',
  ],
  [
    'title' => '',
    'brand' => 'НОВЫЕ <br> МАГАЗИНЫ',
    'description' => 'ТЦ Коламбус | ТЦ Европейский | ТЦ Европолис | ТЦ Метрополис',
    'url' => '/catalog',
    'imgUrl' => '/assets/img/sectionHero/slide-4-mobile-content.jpg',
    'imgUrlDesktop' => '/assets/img/sectionHero/slide-4-desktop-content.jpg',
  ],
];

$showContent = false
?>

<section class="sectionHero">
  <div class="sectionHeroContainer">
    <div class="sectionHeroSlider swiper">
      <div class="swiper-wrapper">
        <?php foreach ($slides as $slide):
          $title = $slide['title'];
          $brand = $slide['brand'];
          $description = $slide['description'];
          $url = $slide['url'];
          $imgUrl = $slide['imgUrl'];
          $imgUrlDesktop = $slide['imgUrlDesktop'];
          $colorScheme = $slide['colorScheme'] ?? '';
          ?>
          <article class="swiper-slide sectionHeroSlide">
            <?php if ($showContent): ?>
              <div class="sectionHeroSlideBody">
                <div class="sectionHeroSlideContent">
                  <h2 class="sectionHeroSlideTitle <?= $colorScheme; ?>">
                    <?= $title; ?>
                  </h2>
                  <div class="sectionHeroSlideBrand <?= $colorScheme; ?>">
                    <?= $brand; ?>
                  </div>
                  <div class="sectionHeroSlideDescription <?= $colorScheme; ?>">
                    <?= $description; ?>
                  </div>
                  <a class="sectionHeroSlideButton" href="<?= $url; ?>">
                    Смотреть
                  </a>
                </div>
              </div>
            <?php endif; ?>
            <?php if ($slide['hasVideo']): ?>
              <video class="sectionHeroSlideImg" loop="loop" preload="metadata" autoplay muted>
                <source media="(min-width: 768px)" src="<?= $imgUrlDesktop; ?>">
                <source class="sectionHeroSlideVideo" src="<?= $imgUrl; ?>">
              </video>
            <?php else: ?>
              <span class="swiper-lazy-preloader"></span>
              <picture class="sectionHeroSlidePicture">
                <source media="(min-width: 768px)"
                        srcset="<?= $imgUrlDesktop; ?>">
                <img alt="img" class="sectionHeroSlideImg" loading="lazy"
                     src="<?= $imgUrl; ?>">
              </picture>
            <?php endif; ?>
          </article>
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
