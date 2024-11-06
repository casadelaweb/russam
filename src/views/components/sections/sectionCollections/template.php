<?php
$groups = [
  [
    'title' => 'Украшения',
    'slides' => [
      [
        'title' => 'CANDY',
        'description' => '«Русские самоцветы» – наследник легендарных техник Карла Фаберже. Продолжая
                  традиции
                  легендарного мастера, Императорский ювелирный дом создал коллекцию украшений
                  с гильошированной эмалью HERITAGE — она стала поистине знаковой и в полной мере
                  отражает
                  ДНК бренда.',
        'imgUrl' => '/assets/img/sectionCollections/slide-1-mobile.jpg',
      ],
      [
        'title' => 'LA RIVIERE-TENNIS SNOWDROPS TENNIS',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur distinctio dolorum ipsum laboriosam, libero nisi nobis possimus praesentium vero!',
        'imgUrl' => '/assets/img/sectionCollections/slide-2-mobile.jpg',
      ],
    ],
  ],
  [
    'title' => 'Дом',
    'slides' => [
      [
        'title' => 'Lorem ipsum dolor.',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur illo ipsa provident, veniam veritatis.',
        'imgUrl' => '/assets/img/sectionCollections/slide-1-mobile.jpg',
      ],
      [
        'title' => 'Lorem',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque explicabo modi nemo neque qui quo soluta velit. Architecto atque autem commodi esse et, necessitatibus nulla, praesentium, quaerat quod reprehenderit tempore.',
        'imgUrl' => '/assets/img/sectionCollections/slide-2-mobile.jpg',
      ],
    ],
  ],
  [
    'title' => 'HIGH jewelry',
    'slides' => [
      [
        'title' => 'Lorem ipsum dolor sit.',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at eligendi fuga, necessitatibus ut voluptatem?',
        'imgUrl' => '/assets/img/sectionCollections/slide-1-mobile.jpg',
      ],
      [
        'title' => '  Lorem ipsum dolor sit amet.',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate in quae quis vitae? Eveniet natus optio perspiciatis sed, suscipit totam voluptas voluptatibus! Cupiditate dolore doloremque, itaque laboriosam maiores minus natus porro quae soluta! Debitis non possimus qui reiciendis similique.',
        'imgUrl' => '/assets/img/sectionCollections/slide-2-mobile.jpg',
      ],
    ],
  ],
];
?>

<section class="sectionCollections">
  <div class="sectionCollectionsContainer">
    <nav class="sectionCollectionsNav">
      <?php $i = 0;
      foreach ($groups as $group):
        $class = $i === 0 ? '_active' : '';
        $title = $group['title'];
        ?>
        <button type="button" class="sectionCollectionsNavItem <?= $class; ?>"
                data-index="<?= $i; ?>">
          <?= $title; ?>
        </button>
        <?php $i++;
      endforeach;
      unset($i); ?>
    </nav>
    <div class="sectionCollectionsHeading">
      коллекции
    </div>
    <div class="sectionCollectionsSliders swiper">
      <div class="swiper-wrapper">
        <?php
        foreach ($groups as $group):
          $slides = $group['slides'];
          ?>
          <div class="swiper-slide">
            <div class="sectionCollectionsSlider swiper">
              <div class="swiper-wrapper">
                <?php foreach ($slides as $slide):
                  $slideTitle = $slide['title'];
                  $slideDescription = $slide['description'];
                  $slideImgUrl = $slide['imgUrl'];
                  ?>
                  <article class="swiper-slide sectionCollectionsSlide">
                    <span class="swiper-lazy-preloader"></span>
                    <picture>
                      <img src="<?= $slideImgUrl; ?>" alt="img"
                           class="sectionCollectionsSlideImg" loading="lazy">
                    </picture>
                    <h3 class="sectionCollectionsSlideTitle">
                      <?= $slideTitle; ?>
                    </h3>
                    <div class="sectionCollectionsSlideDescription">
                      <?= $slideDescription; ?>
                    </div>
                  </article>
                <?php endforeach; ?>
              </div>
              <div class="sectionCollectionsSliderNav">
                <button class="swiper-button-prev" type="button">
                  <span class="iconfont icon-arrow-left"></span>
                </button>
                <button class="swiper-button-next" type="button">
                  <span class="iconfont icon-arrow-right"></span>
                </button>
                <a href="#" class="sectionCollectionsSliderButton">
                  смотреть все
                </a>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>
