<?php
$slides = [
  [
    'title' => 'ЗАКАЗЫВАЙТЕ ИЗДЕЛИЯ НА ВЫБОР',
    'note' => 'Выберите подходящий размер или модель',
    'iconName' => 'wallet',
    'footerTitle' => 'ОПЛАТА ПРИ ПОЛУЧЕНИИ',
  ],
  [
    'title' => 'ЗАКАЗЫВАЙТЕ ИЗДЕЛИЯ НА ВЫБОР',
    'note' => 'Выберите подходящий размер или модель',
    'iconName' => 'rings',
    'footerTitle' => 'ИЗДЕЛИЯ  НА ВЫБОР',
  ],
  [
    'title' => 'ЗАКАЗЫВАЙТЕ ИЗДЕЛИЯ НА ВЫБОР',
    'note' => 'Выберите подходящий размер или модель',
    'iconName' => 'gift',
    'footerTitle' => 'ДОСТАВКА ОТ 1 ДНЯ',
  ],
  [
    'title' => 'ЗАКАЗЫВАЙТЕ ИЗДЕЛИЯ НА ВЫБОР',
    'note' => 'Выберите подходящий размер или модель',
    'iconName' => 'warranty',
    'footerTitle' => 'ГАРАНТИЯ 2 ГОДА',
  ],
  [
    'title' => 'ЗАКАЗЫВАЙТЕ ИЗДЕЛИЯ НА ВЫБОР',
    'note' => 'Выберите подходящий размер или модель',
    'iconName' => 'engraving',
    'footerTitle' => 'РУЧНАЯ ГРАВИРОВКА С ВЫБОРОМ ШРИФТА',
  ],
]
?>

<section class="sectionBenefits">
  <div class="sectionBenefitsContainer">
    <div class="sectionBenefitsMain">
      <div class="sectionBenefitsMainSlider">
        <div class="sectionBenefitsMainIcons">
          <?php $i = 0;
          foreach ($slides as $slide):
            $class = $i === 0 ? '_active' : '';
            ?>
            <button class="sectionBenefitsMainIcon <?= $class; ?>" type="button"
                    data-index="<?= $i; ?>">
              <span class="iconfont icon-<?= $slide['iconName']; ?>"></span>
            </button>
            <?php $i++;
          endforeach;
          unset($i); ?>
        </div>
        <div class="swiper-wrapper">
          <?php foreach ($slides as $slide): ?>
            <article class="swiper-slide sectionBenefitsMainSlide">
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
    </div>
    <div class="sectionBenefitsFooter">
      <div class="sectionBenefitsFooterSlider swiper">
        <div class="swiper-wrapper">
          <?php foreach ($slides as $slide): ?>
            <div class="swiper-slide sectionBenefitsFooterSlide">
              <?= $slide['footerTitle']; ?>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>
</section>
