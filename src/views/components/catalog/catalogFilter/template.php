<?php
/** @var string $filterTitle */
/** @var string $filterType */
/** @var bool $hasSearch */
/** @var string $inputName */
/** @var string $inputType */
/** @var array $options */
?>

<fieldset class="catalogFilter">
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
  <div class="catalogFilterBody <?= $filterType === 'grid' ? '_grid' : ''; ?>">
    <?php if ($hasSearch) : ?>
      <label class="catalogFilterSearch">
        <span class="catalogFilterSearchIcon iconfont icon-search"></span>
        <input type="text" class="catalogFilterSearchInput" placeholder="<?= $filterTitle ?>"
               autocomplete="off">
      </label>
    <?php endif; ?>

    <?php foreach ($options as $option):
      $title = $option; ?>
      <label class="catalogFilterLabel">
        <input class="catalogFilterInput" type="<?= $inputType ?>" name="<?= $inputName ?>">
        <span class="catalogFilterTitle"><?= $title ?></span>
      </label>
    <?php endforeach; ?>
  </div>
</fieldset>
