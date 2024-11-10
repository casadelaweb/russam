<?php use Middlewares\Render;

$categories = [
  [
    'title' => 'Кольца',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/1-desktop.jpg',
  ],
  [
    'title' => 'Серьги',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/2-desktop.jpg',
  ],
  [
    'title' => 'броши',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/3-desktop.jpg',
  ],
  [
    'title' => 'колье',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/4-desktop.jpg',
  ],
  [
    'title' => 'цепи',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/5-desktop.jpg',
  ],
  [
    'title' => 'браслеты',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/6-desktop.jpg',
  ],
  [
    'title' => 'Кольца',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/1-desktop.jpg',
  ],
  [
    'title' => 'Серьги',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/2-desktop.jpg',
  ],
  [
    'title' => 'броши',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/3-desktop.jpg',
  ],
  [
    'title' => 'колье',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/4-desktop.jpg',
  ],
  [
    'title' => 'цепи',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/5-desktop.jpg',
  ],
  [
    'title' => 'браслеты',
    'url' => '/catalog/category',
    'imgUrl' => '/assets/img/sectionCategories/6-desktop.jpg',
  ],
];
$products = [
  [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
    'url' => '/product',
  ],
  [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
    'url' => '/product',
  ],
  [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
    'url' => '/product',
  ],
  [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
    'url' => '/product',
  ],
  [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
    'url' => '/product',
  ],
  [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
    'url' => '/product',
  ],
];

Render::component('sections/sectionHero');
Render::component('sections/sectionCategories', [
  'title' => 'Категории',
  'categories' => $categories,
]);
Render::component('sections/sectionProducts', [
  'title' => 'Новинки',
  'quantity' => 24,
  'url' => '/catalog/new',
  'buttonText' => 'Смотреть все',
  'products' => $products,
]);
Render::component('sections/sectionCollections');
Render::component('sections/sectionProducts', [
  'title' => 'Бестселлеры',
  'quantity' => 24,
  'url' => '/catalog/new',
  'buttonText' => 'Смотреть все',
  'products' => $products,
]);
Render::component('sections/sectionBenefits');
Render::component('sections/sectionAbout', [
  'title' => 'Петербургский <br/> ювелирный бренд <br/> с вековой историей',
]);
Render::component('sections/sectionActions', [
  'title' => '',
]);
