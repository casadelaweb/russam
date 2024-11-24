<?php
/** @var string $filterTitle */
/** @var bool $isChecked */
/** @var string $inputName */
?>

<label class="catalogFilterBool">
  <span class="catalogFilterBoolTitle">
    <?= $filterTitle; ?>
  </span>
  <input type="checkbox"
         name="<?= $inputName; ?>"
         class="catalogFilterBoolInput"
    <?= $isChecked ? 'checked' : ''; ?>
  >
</label>
