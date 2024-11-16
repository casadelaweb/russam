<?php
  $menu = [
    [
      'title'=> 'Украшения',
      'url'=>'/',
      'childrens'=> [
        [
          'title'=> 'КОЛЬЦА',
          'url'=>'/',
          'childrens'=> [
            [
              'title'=> 'с бриллиантами',
              'url'=>'/',
            ],
            [
              'title'=> 'помолвочные',
              'url'=>'/',
            ],
            [
              'title'=> 'обручальные',
              'url'=>'/',
            ],
            [
              'title'=> 'мужские',
              'url'=>'/',
            ],
          ],
        ],
        [
          'title'=> 'СЕРЬГИ',
          'url'=>'/',
          'childrens'=> [
            [
              'title'=> 'с бриллиантами',
              'url'=>'/',
            ],
            [
              'title'=> 'помолвочные',
              'url'=>'/',
            ],
            [
              'title'=> 'обручальные',
              'url'=>'/',
            ],
            [
              'title'=> 'мужские',
              'url'=>'/',
            ],
          ],
        ],
        [
          'title'=> 'ПОДВЕСКИ и кресты',
          'url'=>'/',
          'childrens'=> [
            [
              'title'=> 'с бриллиантами',
              'url'=>'/',
            ],
            [
              'title'=> 'помолвочные',
              'url'=>'/',
            ],
            [
              'title'=> 'обручальные',
              'url'=>'/',
            ],
            [
              'title'=> 'мужские',
              'url'=>'/',
            ],
          ],
        ],
      ],
    ],
    [
      'title'=> 'эксклюзив',
      'url'=>'/',
    ],
    [
      'title'=> 'коллекции',
      'url'=>'/',
    ],
    [
      'title'=> 'wedding',
      'url'=>'/',
    ],
    [
      'title'=> 'ДОМ & АКСЕССУАРЫ',
      'url'=>'/',
    ],
    [
      'title'=> 'АКЦИИ',
      'url'=>'/',
    ],
  ];

  function renderMenuItemL1($menuItem) {
    if(array_key_exists('childrens', $menuItem)):?>
      <div class="menuItemL1">
        <span class="headerButton menuBtnL1"><?= $menuItem['title']; ?></span>

        <div class="menuChildrensL1">
          <div class="menuContainer">
            <div class="menuChildrensL1Left">
              <?php foreach ($menuItem['childrens'] as $i=>$children) {renderMenuItemL2($children);} ?>
            </div>
          </div>
        </div>
      </div>
    <?php else:?>
      <a class="headerButton menuItemL1" href=""><?= $menuItem['title']; ?></a>
    <?php endif;

  }
  function renderMenuItemL2($menuItem) {
    if(array_key_exists('childrens', $menuItem)):?>

      <div class="menuItemL2">
        <span class="headerButton menuBtnL2"><?= $menuItem['title']; ?></span>
        <div class="menuChildrensL2">
          <div class="menuChildrensL2Left">
            <?php foreach ($menuItem['childrens'] as $i=>$children): ?>
              <a class="headerButton menuItemL3" href=""><?= $children['title']; ?></a>
            <?php endforeach; ?>
          </div>
          <div class="menuChildrensL2Right"></div>
        </div>
      </div>

      <?php else:?>

        <a class="headerButton menuItemL2" href=""><?= $menuItem['title']; ?></a>

      <?php endif;

  }
  function renderMenuItemL3($menuItem) {
    if(array_key_exists('childrens', $menuItem)):?>

      <div>
        <span class="headerButton menuBtnL3"><?= $menuItem['title']; ?></span>
        <div class="menuChildrensL3">
          <?php foreach ($menuItem['childrens'] as $i=>$children)
            {
              renderMenuItem4($children);
            }
          ?>
        </div>
      </div>

      <?php else:?>

        <a class="headerButton" href=""><?= $menuItem['title']; ?></a>

      <?php endif;

  }

?>


<div class="headerBottom menu">
  <?php foreach ($menu as $i=>$menuItem) { renderMenuItemL1($menuItem); }?>
  <!-- <a href="/" class="headerButton">
    Украшения
    <span class="iconfont icon-arrow-down"></span>
  </a>
  <a href="/" class="headerButton">эксклюзив</a>
  <a href="/" class="headerButton">коллекции</a>
  <a href="/" class="headerButton">wedding</a>
  <a href="/" class="headerButton">
    ДОМ & АКСЕССУАРЫ
    <span class="iconfont icon-arrow-down"></span>
  </a>
  <a href="/" class="headerButton">АКЦИИ</a> -->
  <button type="button">
    <span class="iconfont icon-search"></span>
  </button>
</div>
