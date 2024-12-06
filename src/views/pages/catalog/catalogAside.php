<?php

use Middlewares\Render; ?>

<div class="catalogAside" data-modal="catalog-aside">
  <form class="catalogFilters" id="form-catalog-filters">
    <div class="catalogFiltersHeader">
      <div class="catalogFiltersHeaderRow">
        <span>Фильтры</span>
        <button type="button" data-modal-close class="catalogFiltersClose">
          <span class="iconfont icon-close"></span>
        </button>
      </div>
      <div class="catalogFiltersChoices">
        <button type="button" class="catalogFiltersChoice">
          <span>Белое золото 585 пробы</span>
          <span class="iconfont icon-close"></span>
        </button>
        <button type="button" class="catalogFiltersChoice">
          <span>Белое золото 750 пробы</span>
          <span class="iconfont icon-close"></span>
        </button>
        <button type="button" class="catalogFiltersChoice">
          <span>Белый</span>
          <span class="iconfont icon-close"></span>
        </button>
        <button type="button" class="catalogFiltersChoice">
          <span>Mix</span>
          <span class="iconfont icon-close"></span>
        </button>
        <button type="button" class="catalogFiltersChoice">
          <span>Бесцветный</span>
          <span class="iconfont icon-close"></span>
        </button>
        <button type="button" class="catalogFiltersChoice">
          <span>Голубой</span>
          <span class="iconfont icon-close"></span>
        </button>
        <button type="button" class="catalogFiltersChoice">
          <span>Круг</span>
          <span class="iconfont icon-close"></span>
        </button>
        <button type="button" class="catalogFiltersChoice">
          <span>Круг-57</span>
          <span class="iconfont icon-close"></span>
        </button>
      </div>
    </div>
    <div class="catalogFiltersBody">
      <?php Render::component('catalog/catalogFilterBool', [
        'filterTitle' => 'В наличии',
        'isChecked' => true,
        'inputName' => 'is_in_stock',
      ]); ?>
      <?php Render::component('catalog/catalogFilterBool', [
        'filterTitle' => 'Доступно в рассрочку',
        'isChecked' => false,
        'inputName' => 'is_available_installment',
      ]); ?>
      <?php Render::component('catalog/catalogFilterRange', [
        'filterTitle' => 'Цена',
        'min' => 2850,
        'max' => 15783691,
      ]) ?>
      <?php Render::component('catalog/catalogFilter', [
        'filterTitle' => 'Тип изделия',
        'inputType' => 'checkbox',
        'inputName' => 'stock',
        'filterType' => 'row',
        'hasSearch' => false,
        'options' => [
          'Кольцо',
          'Обручальное кольцо',
          'Помолвочное кольцо',
        ],
      ]) ?>
      <?php Render::component('catalog/catalogFilterShape', [
        'filterTitle' => 'Форма камня',
        'inputType' => 'checkbox',
        'inputName' => 'shape',
        'shapes' => [
          '/assets/img/catalog/shape-asher.svg',
          '/assets/img/catalog/shape-baget.svg',
          '/assets/img/catalog/shape-brilliant.svg',
          '/assets/img/catalog/shape-corazon.svg',
          '/assets/img/catalog/shape-izumrud.svg',
          '/assets/img/catalog/shape-kushon.svg',
          '/assets/img/catalog/shape-markiz.svg',
          '/assets/img/catalog/shape-octagon.svg',
          '/assets/img/catalog/shape-ovalado.svg',
          '/assets/img/catalog/shape-pera.svg',
          '/assets/img/catalog/shape-princesa.svg',
          '/assets/img/catalog/shape-radiant.svg',
          '/assets/img/catalog/shape-triangulo.svg',
        ],
      ]) ?>
      <?php Render::component('catalog/catalogFilter', [
        'filterTitle' => 'Фильтр с радио',
        'inputType' => 'radio',
        'inputName' => 'filter_test_1',
        'filterType' => 'row',
        'hasSearch' => false,
        'options' => ['Круглый', 'Плоский', 'Третий', 'Четвертый', 'Пятый', 'Шестой'],
      ]) ?>
      <?php Render::component('catalog/catalogFilter', [
        'filterTitle' => 'Фильтр с большим количеством опций',
        'inputType' => 'radio',
        'inputName' => 'filter_test_1',
        'filterType' => 'row',
        'hasSearch' => false,
        'options' => ['Круглый', 'Плоский', 'Третий', 'Четвертый', 'Пятый', 'Шестой', 'Круглый', 'Плоский', 'Третий', 'Четвертый', 'Пятый', 'Шестой', 'Круглый', 'Плоский', 'Третий', 'Четвертый', 'Пятый', 'Шестой'],
      ]) ?>
      <?php Render::component('catalog/catalogFilter', [
        'filterTitle' => 'Фильтр с поиском и списком',
        'inputType' => 'checkbox',
        'inputName' => 'filter_test_2',
        'filterType' => 'row',
        'hasSearch' => true,
        'options' => ['Круглый', 'Плоский', 'Третий', 'Четвертый', 'Пятый', 'Шестой'],
      ]) ?>
      <?php Render::component('catalog/catalogFilter', [
        'filterTitle' => 'Фильтр с поиском и сеткой',
        'inputType' => 'checkbox',
        'inputName' => 'filter_test_3',
        'filterType' => 'grid',
        'hasSearch' => true,
        'options' => ['Круглый', 'Плоский', 'Третий', 'Четвертый', 'Пятый', 'Шестой'],
      ]) ?>
      <?php Render::component('catalog/catalogFilterColor', [
        'filterTitle' => 'Цвет',
        'inputType' => 'checkbox',
        'inputName' => 'color',
        'options' => [
          [
            'title' => 'Черный',
            'color' => '#000000',
          ],
          [
            'title' => 'Белый',
            'color' => '#ffffff',
          ],
          [
            'title' => 'Изумрудный',
            'color' => 'green',
          ],
          [
            'title' => 'Аквамариновый',
            'color' => 'teal',
          ],
          [
            'title' => 'Красный',
            'color' => 'red',
          ],
          [
            'title' => 'Оранжевый',
            'color' => 'orange',
          ],
          [
            'title' => 'Прозрачный>',
            'url' => '/assets/img/catalog/transparent.png',
          ],
          [
            'title' => 'Желтый',
            'color' => 'yellow',
          ],
          [
            'title' => 'Разноцветный',
            'url' => '/assets/img/catalog/multicolor.png',
          ],
        ],
      ]) ?>
    </div>
    <div class="catalogFiltersButtons">
      <button class="catalogFiltersSubmit" type="submit" id="catalog-filters-submit">
        Применить
      </button>
      <button class="catalogFiltersReset" type="reset">
        <span class="iconfont icon-refresh"></span>
        Сбросить
      </button>
    </div>
    <div class="catalogFiltersTooltip">
      <label for="catalog-filters-submit" class="catalogFiltersTooltipButton">
        Применить
      </label>
    </div>
  </form>
</div>
<div class="catalogAsideOverlay" data-modal-overlay="catalog-aside"></div>

<script>
  /** пример простого скрипта для поиска вариантов в компоненте catalogFilter */
  document.addEventListener('DOMContentLoaded', () => {

    /** простая функция для поиска подстроки в строке */
    function hasMatch(haystack, needle) {
      return haystack.trim().toLowerCase().includes(needle.trim().toLowerCase())
    }

    const searchElements = document.body.querySelectorAll('.catalogFilterSearch')
    searchElements.forEach((searchElement) => {
      const filter = searchElement.closest('.catalogFilter')
      const searchInput = searchElement.querySelector('.catalogFilterSearchInput')
      const options = filter.querySelectorAll('.catalogFilterLabel')

      searchInput.addEventListener('input', () => {
        /** получаем поисковый запрос */
        const value = searchInput.value.trim().toLowerCase()

        options.forEach((option) => {
          const input = option.querySelector('.catalogFilterInput')
          const title = option.querySelector('.catalogFilterTitle')

          if (value.length === 0) {
            /** если поисковый запрос пустой, показываем все */
            input.disabled = false
            option.style = ''
          } else if (hasMatch(title.textContent, value) || hasMatch(input.value, value)) {
            /** если запрос не пустой и есть совпадение */
            input.disabled = false
            option.style = ''
          } else {
            /** если запрос не пустой и нет совпадений */
            input.disabled = true
            option.style = 'display: none;'
          }
        })
      }, {
        passive: true,
      })
    })
  }, {
    passive: true,
    once: true,
  })
</script>
