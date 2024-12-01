<div class="catalogNav">
  <div class="catalogNavTop">
    <button type="button" data-modal-open="catalog-aside" class="catalogNavFilters">
      <span class="iconfont icon-filters catalogNavFiltersIcon"></span>
      <span class="catalogNavFiltersTitle">Фильтры</span>
      <span class="catalogNavFiltersQuantity">
        12
      </span>
    </button>
    <?php $items = [
      'Популярности',
      'Новизне',
      'Вес по возрастанию',
      'Вес по убыванию',
      'Цена по возрастанию',
      'Цена по убыванию',
    ]; ?>
    <fieldset form="form-catalog-filters" class="catalogSort">
      <div class="catalogSortSummary">
        <div class="catalogSortTitle">Сортировать по:</div>
        <div class="catalogSortCurrent">
          <?= $items[0]; ?>
        </div>
        <button class="catalogSortButton" type="button">
          <span class="iconfont icon-arrow-down"></span>
        </button>
      </div>
      <div class="catalogSortList">
        <?php $i = 0;
        foreach ($items as $item): ?>
          <label class="catalogSortItem">
            <span><?= $item; ?></span>
            <input class="catalogSortInput" type="radio"
                   name="sort" <?= $i === 0 ? 'checked' : ''; ?>>
          </label>
          <?php $i++;
        endforeach; ?>
      </div>
    </fieldset>
    <div class="catalogSortOverlay"></div>
  </div>
  <div class="catalogNavChoices">
    <!-- Выбранные фильтры -->
    <button type="button" class="catalogNavChoice">
      <span>Белое золото 585 пробы</span>
      <span class="iconfont icon-close"></span>
    </button>
    <button type="button" class="catalogNavChoice">
      <span>Белое золото 750 пробы</span>
      <span class="iconfont icon-close"></span>
    </button>
    <button type="button" class="catalogNavChoice">
      <span>Белый</span>
      <span class="iconfont icon-close"></span>
    </button>
    <button type="button" class="catalogNavChoice">
      <span>Mix</span>
      <span class="iconfont icon-close"></span>
    </button>
    <button type="button" class="catalogNavChoice">
      <span>Бесцветный</span>
      <span class="iconfont icon-close"></span>
    </button>
    <button type="button" class="catalogNavChoice">
      <span>Голубой</span>
      <span class="iconfont icon-close"></span>
    </button>
    <button type="button" class="catalogNavChoice">
      <span>Круг</span>
      <span class="iconfont icon-close"></span>
    </button>
    <button type="button" class="catalogNavChoice">
      <span>Круг-57</span>
      <span class="iconfont icon-close"></span>
    </button>
  </div>
</div>
