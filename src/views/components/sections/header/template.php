<?php use Middlewares\Render;?>
<header class="header">
  <div class="headerCont">

    <div class="headerTop">
      <div class="headerContacts">
        <a href="tel:8 (800) 777-19-12" class="headerContactsTel">
          8 (800) 777-19-12
        </a>
        <span class="headerContactsLabel">
          Перезвоните мне
        </span>
      </div>
      <a href="/" class="headerLogo">
        <img src="/assets/img/header/logo.png" alt="img" class="headerLogoImg" loading="eager">
      </a>
      <div class="headerActions">
        <a href="/shops" class="headerShops">
          МАГАЗИНЫ
        </a>
        <button type="button"  class="headerSearch headerActionsItem">
          <span class="iconfont icon-search"></span>
        </button>
        <a href="/profile" class="headerProfile headerActionsItem">
        <span class="iconfont icon-user"></span>
        </a>
        <a href="/fav" class="headerFav headerActionsItem">
          <span class="iconfont icon-heart-outline"></span>
          <sup class="headerFavQuantity">2</sup>
        </a>
        <a href="/cart" class="headerCart headerActionsItem">
          <span class="iconfont icon-cart"></span>
          <sup class="headerCartQuantity">5</sup>
        </a>
      </div>
    </div>
    <?php Render::component('sections/header/headerMenu'); ?>
  </div>
  <div class="headerMobile">
    <button class="headerMenuOpen" type="button">
      <span class="iconfont icon-menu"></span>
    </button>
    <a href="/" class="headerMobileLogo">
      <img src="/assets/img/header/logo-mobile.png" alt="img" class="headerLogoImg" loading="eager">
    </a>
    <a href="tel:8 (800) 777-19-12" class="headerTel">
      <span class="iconfont icon-tel"></span>
    </a>
  </div>
  <div class="headerOverlay"></div>

</header>
