<template>
  <div class="masonry" id="masonry">
    <div class="item item1">
      <div>
        <img class="item-img" src="~/assets/images/avatar.png" alt="喵立翰" />
      </div>
      <div>
        <h4>{{ $t("introduces.in[0]") }}</h4>
        <p class="item-content">
          {{ $t("introduces.in[1]") }}<br />
          {{ $t("introduces.in[2]") }}<br />
          {{ $t("introduces.in[3]") }}<br />
          {{ $t("introduces.in[4]") }}<br />
          {{ $t("introduces.in[5]") }}
        </p>
        <p class="item-content">{{ $t("introduces.in[6]") }}</p>
      </div>
    </div>
    <div class="item item2">
      <h4>{{ $t("introduces.ex[0]") }}</h4>
      <p class="item-content">
        {{ $t("introduces.ex[1]") }}<br />
        {{ $t("introduces.ex[2]") }}<br />
        {{ $t("introduces.ex[3]") }}<br />
        {{ $t("introduces.ex[4]") }}<br />
        {{ $t("introduces.ex[5]") }}<br />
        {{ $t("introduces.ex[6]") }}
      </p>
    </div>
    <div class="item item3">
      <h4>{{ $t("introduces.me[0]") }}</h4>
      <p class="item-content">
        <b>
          <a href="https://www.youtube.com/channel/UCypzlOdJyyOR2NhKv0o3zig">{{
            $t("introduces.me[1].title")
          }}</a></b
        ><br />
        {{ $t("introduces.me[1].content") }}
      </p>
      <p class="item-content">
        <b
          ><a href="https://www.youtube.com/@fumeancats">{{
            $t("introduces.me[2].title")
          }}</a></b
        >
        <br />
        {{ $t("introduces.me[2].content") }}
      </p>
      <p class="item-content">
        <b
          ><a href="https://www.youtube.com/@LadyFlavor">{{
            $t("introduces.me[3].title")
          }}</a></b
        ><br />
        {{ $t("introduces.me[3].content") }}
      </p>
    </div>
    <div class="item item4">
      <h4>{{ $t("introduces.ad[0]") }}</h4>
      <p class="item-content">{{ $t("introduces.ad[1]") }}</p>
      <img class="item-img" src="~/assets/images/box.png" alt="空紙箱" />
    </div>
    <div class="item item5">
      <h4>{{ $t("introduces.mu[0]") }}</h4>
      <p class="item-content">
        {{ $t("introduces.mu[1]") }}<br />
        {{ $t("introduces.mu[2]") }}<br />
        {{ $t("introduces.mu[3]") }}<br />
        {{ $t("introduces.mu[4]") }}<br />
        {{ $t("introduces.mu[5]") }}<br />
      </p>
      <b>
        <a
          href="https://www.youtube.com/playlist?list=PLtClt7-lTL9-S_IQu9-x4aUX0pCByqY2j"
          >{{ $t("introduces.mu[6]") }}</a
        ></b
      >
    </div>
    <div class="item item6">
      <h4>{{ $t("introduces.br[0]") }}</h4>
      <p class="item-content">
        <b
          ><a href="https://piman.cc/">{{ $t("introduces.br[1].title") }}</a></b
        ><br />
        {{ $t("introduces.br[1].content") }}
      </p>
      <p class="item-content">
        <b
          ><a href="https://www.instagram.com/piman_a11y/">{{
            $t("introduces.br[2].title")
          }}</a></b
        ><br />
        {{ $t("introduces.br[2].content") }}
      </p>
      <p class="item-content">
        <b
          ><a href="https://kusdom.com/piman/zh_tw">{{
            $t("introduces.br[3].title")
          }}</a></b
        ><br />
        {{ $t("introduces.br[3].content") }}
      </p>
    </div>
    <div class="item item7">
      <h4>{{ $t("introduces.fr[0]") }}</h4>
      <p class="item-content">
        <b
          ><a href="https://ithelp.ithome.com.tw/users/20152260/ironman/5614">{{
            $t("introduces.fr[1]")
          }}</a></b
        ><br />
        {{ $t("introduces.fr[2]") }}
      </p>
    </div>
    <div class="item item8">
      <h4>{{ $t("introduces.te[0]") }}</h4>
      <p class="item-content">
        {{ $t("introduces.te[1]") }}<br />
        {{ $t("introduces.te[2]") }}
      </p>
      <b
        ><a
          href="https://neillin.bobaboba.me/?source=post_page-----c7466b1faf76--------------------------------"
          >{{ $t("introduces.te[3]") }}</a
        ></b
      >
    </div>
    <div class="item item9">
      <h4>{{ $t("introduces.al[0]") }}</h4>
      <p class="item-content">
        <b
          ><a href="https://www.facebook.com/CatPartyTaiwan/">{{
            $t("introduces.al[1]")
          }}</a></b
        ><br />
        {{ $t("introduces.al[2]") }}
      </p>
    </div>
    <div class="item item10">
      <h4>{{ $t("introduces.st[0]") }}</h4>
      <p class="item-content">{{ $t("introduces.st[1]") }}<br /></p>
      <b
        ><a href="https://store.line.me/stickershop/product/24123123/zh-Hant">{{
          $t("introduces.st[2]")
        }}</a></b
      >
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.masonry {
  width: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  grid-template-areas:
    "in in ex me"
    "ad mu br me"
    "fr fr br te"
    "al al st st";
  @media screen and (width <= 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "in in"
      "ex ad"
      "mu te"
      "fr fr"
      "br me"
      "br me"
      "al al"
      "st st";
  }
  & .item {
    min-height: 180px;
    background-color: var(--masonry-card-bg);
    border: 1px solid var(--color-white);
    color: var(--color-text);
    padding: 2rem;
    border-radius: 1.5rem;
    text-align: left;
    transition: all 250ms ease 0s;
    will-change: transform;
    @media screen and (width <= 960px) {
      min-height: 160px;
      padding: 1rem;
    }
  }
}
.introduce {
  grid-template-areas:
    "in in ex ad"
    "mu te br me"
    "fr fr br me"
    "al al st st";
  @media screen and (width <= 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "in in"
      "mu ex"
      "ad te"
      "fr fr"
      "br me"
      "br me"
      "al al"
      "st st";
  }
  & .item3,
  .item6,
  .item7,
  .item8,
  .item9,
  .item10 {
    background-color: var(--masonry-card-bg);
    opacity: 0.5;
    cursor: not-allowed;
    & a {
      pointer-events: none;
    }
  }
}

.friends {
  grid-template-areas:
    "fr fr br me"
    "al al br me"
    "in in ex ad"
    "mu te st st";
  @media screen and (width <= 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "fr fr"
      "al al"
      "br me"
      "br me"
      "in in"
      "mu ex"
      "ad te"
      "st st";
  }
  & .item1,
  .item2,
  .item4,
  .item5,
  .item8,
  .item10 {
    background-color: var(--masonry-card-bg);
    opacity: 0.5;
    cursor: not-allowed;
    & a {
      pointer-events: none;
    }
  }
}
.support {
  grid-template-areas:
    "te st st ad"
    "br me in in"
    "br me fr fr"
    "al al ex mu";
  @media screen and (width <= 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "st st"
      "te ad"
      "br me"
      "br me"
      "in in"
      "fr fr"
      "al al"
      "mu ex";
  }
  & .item1,
  .item2,
  .item3,
  .item4,
  .item5,
  .item6,
  .item7,
  .item9 {
    background-color: var(--masonry-card-bg);
    opacity: 0.5;
    cursor: not-allowed;
    & a {
      pointer-events: none;
    }
  }
}
.item-content {
  margin-bottom: 0.5rem;
  color: var(--card-content);
  line-height: 150%;
}
.item-img {
  width: 100%;
  max-width: 10rem;
  height: fit-content;
}
.item1 {
  grid-row: span 1;
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  grid-area: in !important;
}
.item2 {
  grid-row: span 1;
  grid-column: span 1;
  grid-area: ex !important;
}
.item3 {
  grid-row: span 2;
  grid-column: span 1;
  grid-area: me !important;
}
.item4 {
  grid-row: span 1;
  grid-column: span 1;
  grid-area: ad !important;
}
.item5 {
  grid-row: span 1;
  grid-column: span 1;
  grid-area: mu !important;
}
.item6 {
  grid-row: span 2;
  grid-column: span 1;
  grid-area: br !important;
}
.item7 {
  grid-row: span 1;
  grid-column: span 2;
  grid-area: fr !important;
}

.item8 {
  grid-row: span 1;
  grid-column: span 1;
  grid-area: te !important;
}
.item9 {
  grid-row: span 1;
  grid-column: span 2;
  grid-area: al !important;
}
.item10 {
  grid-row: span 1;
  grid-column: span 2;
  grid-area: st !important;
}
</style>
