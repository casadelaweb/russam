<?php
/** @var string $filterTitle */
/** @var string $filterType */
/** @var bool $hasSearch */
/** @var string $inputName */
/** @var string $inputType */
/** @var array $options */
?>

<fieldset class="catalogFilter open" open>
  <div class="catalogFilterSummary">
    <div class="catalogFilterSummaryContent">
      <span class="catalogFilterTitle">
        <?= $filterTitle ?>
      </span>
      <button type="button" class="catalogFilterButton">
        <span class="iconfont icon-arrow-down"></span>
      </button>
    </div>
  </div>
  <div class="catalogFilterBody">
    <?php if ($hasSearch) : ?>
      <label class="catalogFilterSearch">
        <span class="catalogFilterSearchIcon iconfont icon-search"></span>
        <input type="text" class="catalogFilterSearchInput" placeholder="<?= $filterTitle ?>"
               autocomplete="off">
      </label>
    <?php endif; ?>

    <label class="catalogFilterLabel">
      <span class="catalogFilterTitle">
        Только выбранные
      </span>
      <input type="checkbox" class="catalogFilterBoolInput" name="only_selected">
    </label>

    <div class="catalogFilterNote">
      Позволяет найти изделие, только с выбранными камнями
    </div>
    <?php foreach ($options as $option):
      $title = $option; ?>
      <label class="catalogFilterLabel" data-search="label">
        <input class="catalogFilterInput" data-search="input" type="<?= $inputType ?>"
               name="<?= $inputName ?>">
        <span class="catalogFilterTitle" data-search="title"><?= $title ?></span>
      </label>
    <?php endforeach; ?>
  </div>
</fieldset>
