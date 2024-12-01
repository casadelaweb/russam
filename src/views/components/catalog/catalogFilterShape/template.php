<?php
/** @var string $filterTitle */
/** @var string $inputName */
/** @var string $inputType */
/** @var array $shapes */
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
  <div class="catalogFilterBody _shape">
    <?php foreach ($shapes as $shape): ?>
      <label class="catalogFilterLabel">
        <input class="catalogFilterInput _shape" type="<?= $inputType ?>" name="<?= $inputName ?>">
        <img class="catalogFilterIcon" src="<?= $shape; ?>" alt="img" loading="lazy">
      </label>
    <?php endforeach; ?>
  </div>
</fieldset>
