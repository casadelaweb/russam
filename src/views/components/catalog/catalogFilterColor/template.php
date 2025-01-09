<?php
/** @var string $filterTitle */
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
    <?php foreach ($options as $option):
      $title = $option['title'];
      $color = $option['color'];
      $style = $color ? "background-color: $color;" : 'background-image: url(' . $option['url'] . ');';
      ?>
      <label class="catalogFilterLabel">
        <input class="catalogFilterInput" type="<?= $inputType ?>" name="<?= $inputName ?>">
        <span class="catalogFilterColor" style="<?= $style; ?>"></span>
        <span class="catalogFilterTitle"><?= $title ?></span>
      </label>
    <?php endforeach; ?>
  </div>
</fieldset>
