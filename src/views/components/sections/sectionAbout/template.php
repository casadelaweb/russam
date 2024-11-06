<?php
/** @var string $title */
?>

<section class="sectionAbout">
  <div class="sectionAboutContainer">
    <div class="sectionAboutHead">
      <div class="sectionAboutHeadSlider swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide sectionAboutHeadTab _first">
            <picture>
              <source srcset="/assets/img/sectionAbout/history-left-desktop.jpg"
                      media="(min-width: 1180px)">
              <img class="sectionAboutHeadImg _left"
                   src="/assets/img/sectionAbout/history-right-mobile.jpg"
                   alt="img" loading="lazy">
            </picture>
            <picture>
              <source srcset="/assets/img/sectionAbout/history-right-desktop.jpg"
                      media="(min-width: 1180px)">
              <img class="sectionAboutHeadImg _right"
                   src="/assets/img/sectionAbout/history-left-mobile.jpg"
                   alt="img" loading="lazy">
            </picture>
          </div>
          <div class="swiper-slide sectionAboutHeadTab _second">
            <picture>
              <source srcset="/assets/img/sectionAbout/values-left-desktop.jpg"
                      media="(min-width: 1180px)">
              <img class="sectionAboutHeadImg _left"
                   src="/assets/img/sectionAbout/values-left-mobile.jpg"
                   alt="img" loading="lazy">
            </picture>
            <picture>
              <source srcset="/assets/img/sectionAbout/values-right-desktop.jpg"
                      media="(min-width: 1180px)">
              <img class="sectionAboutHeadImg _right"
                   src="/assets/img/sectionAbout/values-right-mobile.jpg"
                   alt="img" loading="lazy">
            </picture>
          </div>
          <div class="swiper-slide sectionAboutHeadTab _third">
            <picture>
              <source srcset="/assets/img/sectionAbout/mission-left-desktop.jpg"
                      media="(min-width: 1180px)">
              <img class="sectionAboutHeadImg _left"
                   src="/assets/img/sectionAbout/mission-left-mobile.jpg"
                   alt="img" loading="lazy">
            </picture>
            <picture>
              <source srcset="/assets/img/sectionAbout/mission-right-desktop.jpg"
                      media="(min-width: 1180px)">
              <img class="sectionAboutHeadImg _right"
                   src="/assets/img/sectionAbout/mission-right-mobile.jpg"
                   alt="img" loading="lazy">
            </picture>
          </div>
        </div>
      </div>
    </div>
    <div class="sectionAboutHeading">
      <img src="/assets/img/sectionAbout/bg.png" alt="img" loading="lazy"
           class="sectionAboutHeadingImg">
      RS 1912
    </div>
    <h2 class="sectionAboutTitle">
      <?= $title; ?>
    </h2>
    <nav class="sectionAboutNav">
      <button type="button" data-index="1" class="sectionAboutNavItem _active">
        История
      </button>
      <button type="button" data-index="2" class="sectionAboutNavItem">
        ценности
      </button>
      <button type="button" data-index="3" class="sectionAboutNavItem">
        миссия
      </button>
    </nav>
    <div class="sectionAboutTabs swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide sectionAboutTab _first">
          <picture>
            <source media="(min-width: 768px)"
                    srcset="/assets/img/sectionAbout/history-main-desktop.jpg">
            <img src="/assets/img/sectionAbout/history-main-mobile.jpg" alt="img" loading="lazy">
          </picture>

          <div class="sectionAboutTabText">
            <h2>ИСТОРИЯ</h2>
            <h3>«РУССКИЕ САМОЦВЕТЫ» — петербургский ювелирный бренд с вековой историей.</h3>
            <p>Свое начало Императорский Ювелирный Дом «РУССКИЕ САМОЦВЕТЫ» берет еще в эпоху Николая
              Второго — тогда, в 1921 году, последний Император России подписал устав Общества
              поддержки
              и
              развития кустарного гранильного шлифовального промысла. Одним из соучредителей стал
              русский
              живописец и камнерез А. К. Денисов-Уральский, который стал связующим звеном между
              творчеством великого Карла Фаберже и предприятием «РУССКИЕ САМОЦВЕТЫ»</p>
            <p>На протяжении более чем столетней истории Императорский Ювелирный Дом, как и Россия,
              пережил
              многое: революцию, войну, перестройку, однако, вопреки трудностям, «РУССКИЕ САМОЦВЕТЫ»
              сохраняют свои уникальные технологии и продолжают развиваться.</p>
            <a href="/about">Подробнее</a>
          </div>
        </div>
        <div class="swiper-slide sectionAboutTab _second">
          <picture>
            <source media="(min-width: 768px)"
                    srcset="/assets/img/sectionAbout/values-main-desktop.jpg">
            <img src="/assets/img/sectionAbout/values-main-mobile.jpg" alt="img" loading="lazy">
          </picture>

          <div class="sectionAboutTabText">
            <h2>Наши ценности</h2>

            <span class="line"></span>
            <h3>Высокое качество изделий</h3>
            <p>Позволяет сохранять лидерство на протяжении века и задавать уровень стандартов</p>

            <span class="line"></span>
            <h3>Уникальность украшений</h3>
            <p>Благодаря искусности мастеров, создаются изделия в единственном экземпляре по
              индивидуальным
              заказам.</p>

            <span class="line"></span>
            <h3>Объединение традиций и трендов</h3>
            <p>Ювелирные украшения находят отклик у преданной аудитории бренда, приверженцев
              традиционных
              ценностей.</p>
          </div>

        </div>
        <div class="swiper-slide sectionAboutTab _third">
          <picture>
            <source media="(min-width: 768px)"
                    srcset="/assets/img/sectionAbout/mission-main-desktop.jpg">
            <img src="/assets/img/sectionAbout/mission-main-mobile.jpg" alt="img" loading="lazy">
          </picture>

          <div class="sectionAboutTabText">
            <span class="line"></span>
            <h2>RS 1912 - украшения с историей, вдохновленные современностью</h2>
            <p>Более 112 лет создаем украшения неизменно высокого качества. Сохраняя традиций
              ювелирного
              искусства и богатого наследия классических мастеров, таких как Густав и Карл
              Фаберже.</p>
            <p>Развивая при этом современные направления, подчеркивая актуальность инноваций в мире
              украшений.</p>
            <a href="#">Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
