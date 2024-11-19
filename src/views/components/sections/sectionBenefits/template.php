<?php
$slides = [
  [
    'title' => 'ЗАКАЗЫВАЙТЕ <br> ИЗДЕЛИЯ НА ВЫБОР',
    'note' => 'Выберите подходящий размер или модель',
    'iconName' => 'wallet',
    'footerTitle' => 'ОПЛАТА <br> ПРИ ПОЛУЧЕНИИ',
    'imgUrl' => '/assets/img/sectionBenefits/slide-1-img.jpg',
    'videoUrl' => '/assets/video/sectionBenefits/slide-1-video.mp4',
  ],
  [
    'title' => 'ЗАКАЗЫВАЙТЕ <br> ИЗДЕЛИЯ НА ВЫБОР',
    'note' => 'Выберите подходящий размер или модель',
    'iconName' => 'rings',
    'footerTitle' => 'ИЗДЕЛИЯ <br> НА ВЫБОР',
    'imgUrl' => '/assets/img/sectionBenefits/slide-1-img.jpg',
    'videoUrl' => '/assets/video/sectionBenefits/slide-1-video.mp4',
  ],
  [
    'title' => 'ЗАКАЗЫВАЙТЕ <br> ИЗДЕЛИЯ НА ВЫБОР',
    'note' => 'Выберите подходящий размер или модель',
    'iconName' => 'gift',
    'footerTitle' => 'ДОСТАВКА <br> ОТ 1 ДНЯ',
    'imgUrl' => '/assets/img/sectionBenefits/slide-1-img.jpg',
    'videoUrl' => '/assets/video/sectionBenefits/slide-1-video.mp4',
  ],
  [
    'title' => 'ЗАКАЗЫВАЙТЕ <br> ИЗДЕЛИЯ НА ВЫБОР',
    'note' => 'Выберите подходящий размер или модель',
    'iconName' => 'warranty',
    'footerTitle' => 'ГАРАНТИЯ <br> 2 ГОДА',
    'imgUrl' => '/assets/img/sectionBenefits/slide-1-img.jpg',
    'videoUrl' => '/assets/video/sectionBenefits/slide-1-video.mp4',
  ],
  [
    'title' => 'ЗАКАЗЫВАЙТЕ <br> ИЗДЕЛИЯ НА ВЫБОР',
    'note' => 'Выберите подходящий размер или модель',
    'iconName' => 'engraving',
    'footerTitle' => 'РУЧНАЯ ГРАВИРОВКА <br> С ВЫБОРОМ ШРИФТА',
    'imgUrl' => '/assets/img/sectionBenefits/slide-1-img.jpg',
    'videoUrl' => '/assets/video/sectionBenefits/slide-1-video.mp4',
  ],
];

$activeSlide = 2;
?>

<section class="sectionBenefits">
  <div class="sectionBenefitsContainer">
    <div class="sectionBenefitsMain">
      <div class="sectionBenefitsMainIcons">
        <?php
        foreach ($slides as $i => $slide):
          $class = $i === $activeSlide ? '_active' : '';
          ?>
          <button class="sectionBenefitsMainIcon <?= $class; ?>" type="button"
                  data-index="<?= $i; ?>">
            <span class="iconfont icon-<?= $slide['iconName']; ?>"></span>
          </button>
        <?php endforeach; ?>
      </div>
      <div class="sectionBenefitsMainSlider">
        <?php
        foreach ($slides as $i => $slide):
          $slideImgUrl = $slide['imgUrl'];
          $slideVideoUrl = $slide['videoUrl'];
          $class = $i === $activeSlide ? '_active' : '';
          ?>
          <article class="sectionBenefitsMainSlide <?= $class; ?>" data-index="<?= $i; ?>">
            <div class="sectionBenefitsMainSlideImg">
              <img src="<?= $slideImgUrl; ?>" alt="">
            </div>
            <div class="sectionBenefitsMainSlideVideo">
              <video autoplay muted loop width="auto" height="100%">
                <source src="<?= $slideVideoUrl; ?>" type="video/mp4">
              </video>
            </div>
            <button type="button" class="sectionBenefitsMainSlideIcon">
              <span class="iconfont icon-<?= $slide['iconName']; ?>"></span>
            </button>

            <h3 class="sectionBenefitsMainSlideTitle">
              <?= $slide['title']; ?>
            </h3>
            <div class="sectionBenefitsMainSlideNote">
              <?= $slide['note']; ?>
            </div>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
    <div class="sectionBenefitsFooter">
      <div class="sectionBenefitsFooterBtns swiper">
        <div class="swiper-wrapper">
          <?php
            foreach ($slides as $i => $slide):
            $class = $i === $activeSlide ? '_active' : '';
          ?>

            <div class="sectionBenefitsFooterBtn swiper-slide <?= $class; ?>" data-index="<?= $i; ?>">
              <?= $slide['footerTitle']; ?>
            </div>

          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>
</section>
