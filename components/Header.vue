<template>
  <div class="header">
    <div class="navagationbar">
      <img
        class="logo"
        src="https://d2h0caecvn34a3.cloudfront.net/prod/2021/06/HeroMAMA-logo_工作區域-1.png"
        alt="這是logo"
      />
      <ul class="main-menu">
        <li>{{ $t("nav[0]") }}</li>
        <li>{{ $t("nav[1]") }}</li>
        <li>{{ $t("nav[2]") }}</li>
        <li>{{ $t("nav[3]") }}</li>
        <li>{{ $t("nav[4]") }}</li>
      </ul>
      <ul class="action-menu">
        <li>
          <select class="no-border" v-model="$i18n.locale">
            <option value="zhTW">中文</option>
            <option value="meow">喵語</option>
          </select>
        </li>
        <li><ColorMode /></li>
      </ul>
    </div>
    <ul class="mobile-menu">
      <li>{{ $t("nav[0]") }}</li>
      <li>{{ $t("nav[1]") }}</li>
      <li>{{ $t("nav[2]") }}</li>
      <li>{{ $t("nav[3]") }}</li>
      <li>{{ $t("nav[4]") }}</li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  padding: 0.25rem 1rem;
  background-color: var(--bg);
  color: var(--color-text);
  border-bottom: 1px solid var(--border-color);
  z-index: 2;
}

.navagationbar {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  & .logo {
    width: 120px;
    height: 52px;
    object-fit: contain;
  }
  & .main-menu {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.125rem;
    transform: translateX(-50%) translateY(-50%);
    @media screen and (width <= 1080px) {
      display: none;
    }
    & li {
      padding: 0.25rem;
      display: inline;
      cursor: pointer;
      white-space: nowrap;
    }
  }
  & .action-menu {
    display: flex;
    align-items: center;
    & li {
      padding: 0;
      margin-left: 0.5rem;
      & .no-border {
        border: none;
      }
    }
  }
}
.mobile-menu {
  width: 100%;
  padding: 0.25rem 0;
  display: none;
  font-size: 1.125rem;
  @media screen and (width <= 1080px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (width <= 480px) {
    justify-content: start;
  }
  & li {
    white-space: nowrap;
    padding: 0.25rem;
    cursor: pointer;
  }
}
</style>
