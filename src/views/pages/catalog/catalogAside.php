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
      <?php Render::component('catalog/catalogFilter', [
        'filterTitle' => 'Форма камня',
        'filterType' => 'grid',
        'hasSearch' => true,
        'inputType' => 'checkbox',
        'inputName' => 'brand',
        'options' => [
          'Вариант 1',
          'Вариант 2',
          'Вариант 3',
          'Вариант 4',
          'Вариант 5',
          'Вариант 6',
          'Вариант 7',
          'Вариант 8',
        ],
      ]) ?>
      <?php Render::component('catalog/catalogFilter', [
        'filterTitle' => 'Фильтр по радио',
        'inputType' => 'radio',
        'inputName' => 'cable_form',
        'filterType' => 'row',
        'hasSearch' => false,
        'options' => ['Круглый', 'Плоский',],
      ]) ?>
      <?php Render::component('catalog/catalogFilter', [
        'filterTitle' => 'Цвет',
        'inputType' => 'checkbox',
        'inputName' => 'color',
        'filterType' => 'row',
        'hasSearch' => false,
        'options' => [
          'Черный',
          'Белый',
          'Изумрудный',
          'Аквамариновый',
          'Красный',
          'Оранжевый',
          'Желтый',
          'Разноцветный',
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
