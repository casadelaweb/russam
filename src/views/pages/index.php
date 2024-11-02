<?php use Core\Middlewares\Render;

$products = [
  [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
  ],
  [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
  ], [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
  ],
  [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
  ], [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
  ],
  [
    'title' => 'Кольцо из белого золота с изумрудом и турмалинами',
    'price' => 'от 77 975 ₽',
    'priceOld' => '150 000 ₽',
    'discount' => '25%',
  ],
];

Render::component('sections/sectionHero');

Render::component('sections/sectionProducts', [
  'title' => 'Новинки',
  'quantity' => 24,
  'url' => '/catalog/new',
  'buttonText' => 'Смотреть все',
  'products' => $products,
]); ?>
