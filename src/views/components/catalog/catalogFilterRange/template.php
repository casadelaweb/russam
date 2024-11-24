<?php
/** @var string $filterTitle */
/** @var number $min */
/** @var number $max */
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
    <div class="catalogFilterBodyInputs">
      <label>
        <span>от</span>
        <input data-catalog-filter="input-min" class="catalogFilterInput _range" name="price_min"
               type="text">
      </label>
      <label>
        <span>до</span>
        <input data-catalog-filter="input-max" class="catalogFilterInput _range" name="price_max"
               type="text">
      </label>
    </div>
    <div data-catalog-filter="range" data-max="<?= $max ?>" data-min="<?= $min ?>"></div>
  </div>
</fieldset>
