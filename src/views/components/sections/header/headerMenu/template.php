<?php
$headerMenu = [
  [
    'title' => 'Украшения',
    'url' => '/',
    'children' => [
      [
        'title' => 'КОЛЬЦА',
        'url' => '/',
        'children' => [
          [
            'title' => 'с бриллиантами',
            'url' => '/',
          ],
          [
            'title' => 'помолвочные',
            'url' => '/',
          ],
          [
            'title' => 'обручальные',
            'url' => '/',
          ],
          [
            'title' => 'мужские',
            'url' => '/',
          ],
        ],
      ],
      [
        'title' => 'СЕРЬГИ',
        'url' => '/',
        'children' => [
          [
            'title' => 'с бриллиантами 1',
            'url' => '/',
          ],
          [
            'title' => 'помолвочные 1',
            'url' => '/',
          ],
          [
            'title' => 'обручальные 1',
            'url' => '/',
          ],
          [
            'title' => 'мужские 1',
            'url' => '/',
          ],
        ],
      ],
      [
        'title' => 'БРОШИ',
        'url' => '/',
        'children' => [
          [
            'title' => 'с бриллиантами 2',
            'url' => '/',
          ],
          [
            'title' => 'помолвочные 123',
            'url' => '/',
          ],
          [
            'title' => 'обручальные 12',
            'url' => '/',
          ],
          [
            'title' => 'мужские 5',
            'url' => '/',
          ],
        ],
      ],
      [
        'title' => 'КОЛЬЕ',
        'url' => '/',
        'children' => [
          [
            'title' => 'с бриллиантами 42',
            'url' => '/',
          ],
          [
            'title' => 'помолвочные 3',
            'url' => '/',
          ],
          [
            'title' => 'обручальные 42',
            'url' => '/',
          ],
          [
            'title' => 'мужские 2',
            'url' => '/',
          ],
        ],
      ],
      [
        'title' => 'ПОДВЕСКИ и кресты',
        'url' => '/',
        'children' => [
          [
            'title' => 'с бриллиантами 2',
            'url' => '/',
          ],
          [
            'title' => 'помолвочные 3',
            'url' => '/',
          ],
          [
            'title' => 'обручальные 4',
            'url' => '/',
          ],
          [
            'title' => 'мужские 5',
            'url' => '/',
          ],
        ],
      ],
    ],
    'childrenWithGoldLine' => [
      [
        'title' => 'мужчинам',
        'url' => '/',
      ],
      [
        'title' => 'детям',
        'url' => '/',
      ],
      [
        'title' => 'подарки',
        'url' => '/',
      ],
    ],
  ],
  [
    'title' => 'эксклюзив',
    'url' => '/',
  ],
  [
    'title' => 'коллекции',
    'url' => '/',
  ],
  [
    'title' => 'wedding',
    'url' => '/',
  ],
  [
    'title' => 'ДОМ & АКСЕССУАРЫ',
    'url' => '/',
    'children' => [
      [
        'title' => 'КОЛЬЦА',
        'url' => '/',
        'children' => [
          [
            'title' => 'с бриллиантами',
            'url' => '/',
          ],
          [
            'title' => 'помолвочные',
            'url' => '/',
          ],
          [
            'title' => 'обручальные',
            'url' => '/',
          ],
          [
            'title' => 'мужские',
            'url' => '/',
          ],
        ],
      ],
      [
        'title' => 'СЕРЬГИ',
        'url' => '/',
        'children' => [
          [
            'title' => 'с бриллиантами 1',
            'url' => '/',
          ],
          [
            'title' => 'помолвочные 1',
            'url' => '/',
          ],
          [
            'title' => 'обручальные 1',
            'url' => '/',
          ],
          [
            'title' => 'мужские 1',
            'url' => '/',
          ],
        ],
      ],
      [
        'title' => 'БРОШИ',
        'url' => '/',
        'children' => [
          [
            'title' => 'с бриллиантами 2',
            'url' => '/',
          ],
          [
            'title' => 'помолвочные 123',
            'url' => '/',
          ],
          [
            'title' => 'обручальные 12',
            'url' => '/',
          ],
          [
            'title' => 'мужские 5',
            'url' => '/',
          ],
        ],
      ],
      [
        'title' => 'КОЛЬЕ',
        'url' => '/',
        'children' => [
          [
            'title' => 'с бриллиантами 42',
            'url' => '/',
          ],
          [
            'title' => 'помолвочные 3',
            'url' => '/',
          ],
          [
            'title' => 'обручальные 42',
            'url' => '/',
          ],
          [
            'title' => 'мужские 2',
            'url' => '/',
          ],
        ],
      ],
      [
        'title' => 'ПОДВЕСКИ и кресты',
        'url' => '/',
        'children' => [
          [
            'title' => 'с бриллиантами 2',
            'url' => '/',
          ],
          [
            'title' => 'помолвочные 3',
            'url' => '/',
          ],
          [
            'title' => 'обручальные 4',
            'url' => '/',
          ],
          [
            'title' => 'мужские 5',
            'url' => '/',
          ],
        ],
      ],
    ],
  ],
  [
    'title' => 'АКЦИИ',
    'url' => '/',
  ],
];

function returnOffer(): void {
  $headerMenuOffer = [
    "title" => "новая коллекция SNOWDROPS",
    "text" => "Короткое описание в несколько строчек текста",
    "videoUrl" => "/assets/video/header/offer-video.mp4",
    "url" => "/",

  ];

  ?>

  <a href="<?= $headerMenuOffer['url']; ?>" class="headerMenuOffer">
    <div class="headerMenuOfferCont">
      <div class="headerMenuOfferTitle"><?= $headerMenuOffer['title']; ?></div>
      <div class="headerMenuOfferText"><?= $headerMenuOffer['text']; ?></div>
      <div class="headerMenuOfferBtn">Подробнее</div>
    </div>

    <video autoplay muted loop width="100%" height="auto">
      <source src="<?= $headerMenuOffer['videoUrl']; ?>" type="video/mp4">
    </video>
  </a>

  <?php
}

function renderMenuItemL1($menuItem): void {
  if (array_key_exists('children', $menuItem)):?>
    <div class="headerMenuParent headerMenuParentL1">
      <span class="headerMenuBtn headerMenuBtnL1">
        <?= $menuItem['title']; ?>
        <span class="iconfont icon-arrow-right"></span>
        <span class="iconfont icon-arrow-down"></span>
      </span>

      <div class="headerMenuChildren headerMenuChildrenL1">
        <div class="headerMenuContainer">
          <div class="headerMenuChildrenL1Left">

            <span class="headerMenuBtnBack">
              <span class="iconfont icon-arrow-left"></span>
              <?= $menuItem['title']; ?>
            </span>

            <a href="<?= $menuItem['url']; ?>" class="headerMenuBtnAll">
              Все <?= $menuItem['title']; ?></a>

            <?php foreach ($menuItem['children'] as $i => $children) {
              renderMenuItemL2($children);
            } ?>


            <?php if (array_key_exists('childrenWithGoldLine', $menuItem)): ?>

              <div class="headerMenuChildrenL1LeftGold">
                <?php foreach ($menuItem['childrenWithGoldLine'] as $i => $childrenWithGold) : ?>
                  <a class="headerMenuBtn headerMenuBtnL2"
                     href="<?= $childrenWithGold['url']; ?>"><?= $childrenWithGold['title']; ?></a>
                <?php endforeach; ?>
              </div>

            <?php endif; ?>


          </div>
        </div>
      </div>
    </div>
  <?php else: ?>
    <a class="headerMenuBtn headerMenuBtnL1"
       href="<?= $menuItem['url']; ?>"><?= $menuItem['title']; ?></a>
  <?php endif;
}

function renderMenuItemL2($menuItem): void {
  if (array_key_exists('children', $menuItem)):?>

    <div class="headerMenuParent headerMenuParentL2">
      <span class="headerMenuBtn headerMenuBtnL2">
        <?= $menuItem['title']; ?>
        <span class="iconfont icon-arrow-right"></span>
      </span>

      <div class="headerMenuChildren headerMenuChildrenL2">

        <div class="headerMenuChildrenL2Left">
          <span class="headerMenuBtnBack">
            <span class="iconfont icon-arrow-left"></span>
            <?= $menuItem['title']; ?>
          </span>

          <a href="<?= $menuItem['url']; ?>" class="headerMenuBtnAll">
            Все <?= $menuItem['title']; ?></a>

          <?php foreach ($menuItem['children'] as $i => $children): ?>
            <a class="headerMenuBtn headerMenuBtnL3"
               href="<?= $menuItem['url']; ?>"><?= $children['title']; ?></a>
          <?php endforeach; ?>
        </div>

        <div class="headerMenuChildrenL2Right">
          <?php
          returnOffer();
          ?>
        </div>

      </div>
    </div>

  <?php else: ?>

    <a class="headerMenuBtn headerMenuBtnL2"
       href="<?= $menuItem['url']; ?>"><?= $menuItem['title']; ?></a>

  <?php endif;
}

?>

<div class="headerMenu">

  <div class="headerMenuClose">

    <button>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <rect x="5.57422" y="5.36816" width="22" height="1" transform="rotate(45 5.57422 5.36816)"
              fill="#111111" />
        <rect x="5.57422" y="5.36816" width="22" height="1" transform="rotate(45 5.57422 5.36816)"
              fill="#111111" />
        <rect x="4.86719" y="20.9248" width="22" height="1" transform="rotate(-45 4.86719 20.9248)"
              fill="#111111" />
        <rect x="4.86719" y="20.9248" width="13" height="1" transform="rotate(-45 4.86719 20.9248)"
              fill="#111111" />
      </svg>
    </button>

    МЕНЮ

  </div>

  <?php foreach ($headerMenu as $i => $menuItem) {
    renderMenuItemL1($menuItem);
  } ?>

  <a href="/profile" class="headerMenuProfile">
    <span class="iconfont icon-user"></span>
    Войти в кабинет
  </a>

  <a href="tel:8 (800) 777-19-12" class="headerMenuTel">
    8 (800) 777-19-12
  </a>
  <button type="button" class="headerMenuSearch">
    <span class="iconfont icon-search"></span>
  </button>
</div>
