<section class="sectionHero">
  <div class="sectionHeroContainer">
    <div class="sectionHeroSlider swiper">
      <div class="swiper-wrapper">
        <?php for ($i = 0; $i < 4; $i++): ?>
          <div class="swiper-slide sectionHeroSlide">
            <div class="sectionHeroSlideBody">
              <button type="button" class="sectionHeroSlidePrev">
                <span class="iconfont icon-arrow-left"></span>
              </button>
              <button type="button" class="sectionHeroSlideNext">
                <span class="iconfont icon-arrow-right"></span>
              </button>
              <div class="sectionHeroSlideContent">
                <h2 class="sectionHeroSlideTitle">
                  ЮВЕЛИРНЫЕ УКРАШЕНИЯ
                </h2>
                <div class="sectionHeroSlideBrand">
                  CANDY
                </div>
                <div class="sectionHeroSlideDescription">
                  Солнце, летние дни и тропические фрукты превосходно сочетаются в новой
                  коллекции
                  CANDY. Возможность бесконечного сочетания ярких комбинаций для вашего образа.
                </div>
                <a class="sectionHeroSlideButton" href="/catalog">
                  Смотреть
                </a>
              </div>
            </div>
            <span class="swiper-lazy-preloader"></span>
            <picture class="sectionHeroSlidePicture">
              <source media="(min-width: 540px)"
                      srcset="/assets/img/sectionHero/slide-img-desktop.jpg">
              <img alt="img" class="sectionHeroSlideImg" loading="lazy"
                   src="/assets/img/sectionHero/slide-img-mobile.jpg">
            </picture>
          </div>
        <?php endfor; ?>
      </div>
      <button class="swiper-button-prev" type="button">
        <span class="iconfont icon-arrow-left"></span>
      </button>
      <button class="swiper-button-next" type="button">
        <span class="iconfont icon-arrow-right"></span>
      </button>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</section>
