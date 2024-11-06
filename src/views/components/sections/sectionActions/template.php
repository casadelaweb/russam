<?php
/** @var string $title */
?>

<section class="sectionActions">
  <div class="sectionActionsContainer">
    <div class="sectionActionsApp">
      <picture class="sectionActionsAppPicture">
        <source media="(min-width: 768px)" srcset="/assets/img/sectionActions/app-desktop.jpg">
        <img src="/assets/img/sectionActions/app-mobile.jpg" alt="img" class="sectionActionsAppImg">
      </picture>
      <h2 class="sectionActionsAppTitle">
        Выбирайте украшения еще
        <br>
        удобнее с нашим
        <br>
        приложением
      </h2>
      <div class="sectionActionsAppDescription">
        Скачайте приложение в App Store или Google Play:
      </div>
      <a target="_blank"
         href="https://apps.apple.com/ru/app/rs1912-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D0%B0%D0%BC%D0%BE%D1%86%D0%B2%D0%B5%D1%82%D1%8B/id6470205661"
         class="sectionActionsAppApple">
        <img src="/assets/img/sectionActions/app-store.png" alt="img" loading="lazy">
      </a>
      <a target="_blank"
         href="https://play.google.com/store/apps/details?id=ru.russam.android&pli=1"
         class="sectionActionsAppGoogle">
        <img src="/assets/img/sectionActions/google-play.png" alt="img" loading="lazy">
      </a>
      <img src="/assets/img/sectionActions/qr.svg" alt="img" loading="lazy"
           class="sectionActionsAppQR">
    </div>
    <div class="sectionActionsFeedback">
      <picture class="sectionActionsFeedbackPicture">
        <source media="(min-width: 768px)" srcset="/assets/img/sectionActions/feedback-desktop.jpg">
        <img src="/assets/img/sectionActions/feedback-mobile.jpg" alt="img"
             class="sectionActionsFeedbackImg">
      </picture>
      <h2 class="sectionActionsFeedbackTitle">
        Будьте в курсе
        <br>
        последних новинок
        <br>
        и новостей
      </h2>
      <form class="sectionActionsFeedbackForm">
        <label for="section-feedback-input" class="sectionActionsFeedbackFormLabel">
          Подпишитесь на нашу рассылку
        </label>
        <input type="text" placeholder="Электронная почта" id="section-feedback-input"
               autocomplete="off" class="sectionActionsFeedbackFormInput" required>
        <button type="submit" class="sectionActionsFeedbackFormSubmit">
          Подписаться
        </button>
      </form>
    </div>
  </div>
</section>
