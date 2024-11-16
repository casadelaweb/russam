<?php use Middlewares\Render;?>
<header class="header">
  <div class="headerDesktop">
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
        <a href="/profile" class="headerProfile">
          <span class="iconfont icon-user"></span>
        </a>
        <a href="/fav" class="headerFav">
          <span class="iconfont icon-heart-outline"></span>
          <sup class="headerFavQuantity">2</sup>
        </a>
        <a href="/cart" class="headerCart">
          <span class="iconfont icon-cart"></span>
          <sup class="headerCartQuantity">5</sup>
        </a>
      </div>
    </div>
    <?php Render::component('sections/header/headerBottom'); ?>
  </div>
  <div class="headerMobile">
    <button class="headerMenu" type="button">
      <span class="iconfont icon-menu"></span>
    </button>
    <a href="/" class="headerLogo">
      <img src="/assets/img/header/logo-mobile.png" alt="img" class="headerLogoImg" loading="eager">
    </a>
    <a href="tel:8 (800) 777-19-12" class="headerTel">
      <span class="iconfont icon-tel"></span>
    </a>
  </div>
</header>
<div class="headerOverlay"></div>
