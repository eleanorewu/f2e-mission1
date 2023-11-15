<template>
  <div class="footer">
    <div class="footer-container">
      <ul class="footer-info">
        <li>競選總部：喵星路9487巷87號空紙箱</li>
        <li>服務電話：02-2222222</li>
        <li>
          E-mail信箱：<a
            href="mailto: meowmeow@catparty.com?subject=我有話跟喵喵說"
            >meowmeow@catparty.com</a
          >
        </li>
      </ul>
      <ul class="social-media">
        <li>
          <ClientOnly>
            <NuxtLink
              to="https://www.instagram.com/cat_memes_222/"
              title="另開新視窗 前往喵立翰的instagram"
              target="_blank"
              external
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></NuxtLink>
          </ClientOnly>
        </li>
        <li>
          <ClientOnly>
            <NuxtLink
              to="https://www.facebook.com/CatMemeJustTest?locale=zh_TW"
              title="另開新視窗 前往貓咪迷因facebook粉絲專頁"
              target="_blank"
              external
            >
              <font-awesome-icon :icon="['fab', 'facebook']"
            /></NuxtLink>
          </ClientOnly>
        </li>
        <li>
          <ClientOnly>
            <NuxtLink
              to="https://youtu.be/5LrG333wKy8?si=-3EnE2ClVnCZDEH2"
              title="另開新視窗 前往youtube觀看搞笑貓咪"
              target="_blank"
              external
              ><font-awesome-icon :icon="['fab', 'youtube']"
            /></NuxtLink>
          </ClientOnly>
        </li>
      </ul>
    </div>
    <div class="copyright">©2023 喵立翰｜2024不分區立委競選官方網站</div>
  </div>
</template>

<script setup></script>

<style scoped>
.footer {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--footer-bg);
  z-index: 2;
  line-height: 120%;
  letter-spacing: 1.6px;
  & .footer-container {
    width: 100%;
    max-width: 1440px;
    padding: 1.5rem 1rem;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    justify-content: space-around;
    color: var(--color-text);
    text-align: left;
    @media screen and (width <= 760px) {
      flex-direction: column;
      justify-content: flex-start;
    }
    & .footer-info {
      & li:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
    & .social-media {
      display: flex;
      gap: 0.5rem;
      justify-content: flex-start;
      & svg {
        font-size: 1.5rem;
      }
    }
  }
  & .copyright {
    width: 100%;
    display: block;
    padding: 0.625rem;
    background-color: var(--copyright-bg);
    color: var(--copyright-text);
  }
}
</style>
