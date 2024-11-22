<?php
$collectionCategory = [
  [
    'title' => 'Украшения',
    'slides' => [
      [
        'title' => 'HERITAGE',
        'description' => '«Русские самоцветы» – наследник легендарных техник Карла Фаберже. Продолжая традиции легендарного мастера, Императорский ювелирный дом создал коллекцию украшений с гильотинированной эмалью HERITAGE – она стала поистине знаковой и в полной мере отражает ДНК бренда.',
        'imgUrl' => '/assets/img/sectionCollections/collection-heritage.jpg',
      ],
      [
        'title' => 'nightshade',
        'description' => 'В основу дизайна коллекции NIGHTSHADE легли готические элементы, авторски интерпретированные в современном видении. В украшениях комбинируются белое золото и черные бриллианты, а яркие самоцветы идеально гармонируют между собой и образуют контрастные сочетания. В коллекции прослеживается особая символика, которая воплощена в крестах-подвесках.',
        'imgUrl' => '/assets/img/sectionCollections/collection-nightshade.jpg',
      ],
      [
        'title' => 'forget me not',
        'description' => 'Украшения о незабываемых моментах, чувствах и дорогих сердцу людях. Хрупкие цветы с бриллиантами-сердцевинами в золотой оправе, нежно обнимающей лепестки из оникса и бирюзы глубоких оттенков. Украшения, наполненные сакральным смыслом, силой любви и верности.',
        'imgUrl' => '/assets/img/sectionCollections/collection-forget-me-not.jpg',
      ],
      [
        'title' => 'harmony',
        'description' => '',
        'imgUrl' => '/assets/img/sectionCollections/collection-harmony.jpg',
      ],
      [
        'title' => 'deep ocean',
        'description' => 'В коллекции DEEP OCEAN ювелиры обратились к теме бережного отношения к окружающей среде. Ключевые элементы – барочный жемчуг, бриллианты и лондон-топазы: камни закреплены таким образом, что свет свободно проходит сквозь грани, создавая игру оттенков морской волны.',
        'imgUrl' => '/assets/img/sectionCollections/collection-deep-ocean.jpg',
      ],
    ],
    'url' => '/collections/jewelry',
  ],
  [
    'title' => 'Дом',
    'slides' => [
      [
        'title' => 'Rosewood',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur illo ipsa provident, veniam veritatis.',
        'imgUrl' => '/assets/img/sectionCollections/collection-rosewood.jpg',
      ],
      [
        'title' => 'Chance',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque explicabo modi nemo neque qui quo soluta velit. Architecto atque autem commodi esse et, necessitatibus nulla, praesentium, quaerat quod reprehenderit tempore.',
        'imgUrl' => '/assets/img/sectionCollections/collection-chance.jpg',
      ],
    ],
    'url' => '/collections/home',
  ],
  [
    'title' => 'HIGH jewelry',
    'slides' => [
      [
        'title' => 'Deux Forces',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at eligendi fuga, necessitatibus ut voluptatem?',
        'imgUrl' => '/assets/img/sectionCollections/collection-deux-forces.jpg',
      ],
      [
        'title' => 'Star',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate in quae quis vitae? Eveniet natus optio perspiciatis sed, suscipit totam voluptas voluptatibus! Cupiditate dolore doloremque, itaque laboriosam maiores minus natus porro quae soluta! Debitis non possimus qui reiciendis similique.',
        'imgUrl' => '/assets/img/sectionCollections/collection-star.jpg',
      ],
      [
        'title' => 'Heritage',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate in quae quis vitae? Eveniet natus optio perspiciatis sed, suscipit totam voluptas voluptatibus! Cupiditate dolore doloremque, itaque laboriosam maiores minus natus porro quae soluta! Debitis non possimus qui reiciendis similique.',
        'imgUrl' => '/assets/img/sectionCollections/collection-heritage.jpg',
      ],
      [
        'title' => 'короткое название',
        'description' => 'короткое описание',
        'imgUrl' => '/assets/img/sectionCollections/collection-deux-forces.jpg',
      ],
      [
        'title' => 'длинное название',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate in quae quis vitae? Eveniet natus optio perspiciatis sed, suscipit totam voluptas voluptatibus! Cupiditate dolore doloremque, itaque laboriosam maiores minus natus porro quae soluta! Debitis non possimus qui reiciendis similique.',
        'imgUrl' => '/assets/img/sectionCollections/collection-star.jpg',
      ],
    ],
    'url' => '/collections/high-jewelry',
  ],
];
?>

<section class="sectionCollections">
  <div class="sectionCollectionsContainer">
    <nav class="sectionCollectionsNav">
      <?php $i = 0;
      foreach ($collectionCategory as $collectionGroup):
        $class = $i === 0 ? '_active' : '';
        $title = $collectionGroup['title'];
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
        <?php $collectionGroupIndex = 0;
        foreach ($collectionCategory as $collectionGroup):
          $slides = $collectionGroup['slides'];
          $collectionGroupUrl = $collectionGroup['url']; ?>
          <div class="swiper-slide sectionCollectionsSlidersSlide">
            <div class="sectionCollectionsSlider swiper">
              <div class="swiper-wrapper">
                <?php foreach ($slides as $slide):
                  $slideTitle = $slide['title'];
                  $slideDescription = $slide['description'];
                  $slideImgUrl = $slide['imgUrl'];
                  ?>
                  <article class="swiper-slide sectionCollectionsSlide">
                    <span class="swiper-lazy-preloader"></span>
                    <picture class="sectionCollectionsSlidePicture">
                      <img src="<?= $slideImgUrl; ?>" alt="img"
                           class="sectionCollectionsSlideImg" loading="lazy">
                    </picture>
                    <h3 class="sectionCollectionsSlideTitle">
                      <?= $slideTitle; ?>
                    </h3>
                    <div class="sectionCollectionsSlideContent">
                      <div class="sectionCollectionsSlideDescription">
                        <?= $slideDescription; ?>
                      </div>
                      <a href="<?= $collectionGroupUrl; ?>" class="sectionCollectionsSlideButton">
                        смотреть все
                      </a>
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
                <a href="<?= $collectionGroupUrl; ?>" class="sectionCollectionsSliderButton">
                  смотреть все
                </a>
              </div>
            </div>
            <div class="sectionCollectionsNames swiper">
              <div class="swiper-wrapper">
                <?php foreach ($slides as $slide):
                  $name = $slide['title']; ?>
                  <div class="swiper-slide sectionCollectionsName">
                    <?= $name; ?>
                  </div>
                <?php endforeach; ?>
              </div>
            </div>
          </div>
          <?php $collectionGroupIndex++;
        endforeach; ?>
      </div>
    </div>
    <img src="/assets/img/sectionCollections/bg.png" alt="img" class="sectionCollectionsBg"
         loading="lazy">
  </div>
</section>
