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
  <div class="catalogNavTabs">
    <?php $categories = [
      'С бриллиантами',
      'С хризолитом',
      'С кварцем',
      'С турмалином',
      'С морганитом',
      'С фианитом',
      'С аметистом',
      'С родолитом',
      'С цитрином',
      'Со шпинелью',
      'С аквамарином',
      'С бирюзой',
      'С агатом',
      'С кораллом',
      'С халцедоном',
      'С хризопразом',
      'С опалом',
      'С натуральными камнями',
      'По цвету',
      'По форме',
      'С танзанитом',
      'С сапфиром',
      'С гранатом',
      'С рубином',
      'С жемчугом',
      'С изумрудом',
      'С топазом',
      'С полудрагоценными камнями',
      'С альмандинами',
      'С цирконом',
      'С горным хрусталем',
    ];
    for ($i = 0; $i < 5; $i++):
      $category = $categories[$i]; ?>
      <button type="button" class="catalogNavTab">
        <?= $category; ?>
      </button>
    <?php endfor; ?>
    <div class="catalogNavTabsInner">
      <button class="catalogNavTab catalogNavTabMore" type="button">
        <span class="catalogNavTabMoreText">Ещё</span>
        <span class="catalogNavTabMoreIcon iconfont icon-arrow-up"></span>
      </button>
      <div class="catalogNavTabsHidden">
        <?php for ($i = 5; $i < (count($categories) - 5); $i++):
          $category = $categories[$i]; ?>
          <button type="button" class="catalogNavTab _hidden">
            <?= $category; ?>
          </button>
        <?php endfor; ?>
      </div>
    </div>
  </div>
</div>
