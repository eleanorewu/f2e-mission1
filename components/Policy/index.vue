<template>
  <div class="block">
    <Title />
    <div class="container container--policy">
      <div class="flip flip1">
        <div class="front">
          <img
            class="card-img"
            src="~/assets/images/pic1.svg"
            alt="政策一插圖"
          />
          <div class="card-front-info">
            <h4>{{ $t("policy.first.front.title") }}</h4>
            <b>{{ $t("policy.first.front.subtitle1") }}</b>
            <b>{{ $t("policy.first.front.subtitle2") }}</b>
          </div>
        </div>
        <div class="back">
          <div class="card-back-info">
            <h4>{{ $t("policy.first.back.title1") }}</h4>
            <p>{{ $t("policy.first.back.content1") }}</p>
            <h4>{{ $t("policy.first.back.title2") }}</h4>
            <p>{{ $t("policy.first.back.content2") }}</p>
            <h4>{{ $t("policy.first.back.title3") }}</h4>
            <p>{{ $t("policy.first.back.content3") }}</p>
          </div>
        </div>
      </div>
      <div class="flip flip2">
        <div class="front">
          <img
            class="card-img"
            src="~/assets/images/pic2.svg"
            alt="政策一插圖"
          />
          <div class="card-front-info">
            <h4>{{ $t("policy.second.front.title") }}</h4>
            <b>{{ $t("policy.second.front.subtitle1") }}</b>
            <b>{{ $t("policy.second.front.subtitle2") }}</b>
          </div>
        </div>
        <div class="back">
          <div class="card-back-info">
            <h4>{{ $t("policy.second.back.title1") }}</h4>
            <p>{{ $t("policy.second.back.content1") }}</p>
            <h4>{{ $t("policy.second.back.title2") }}</h4>
            <p>{{ $t("policy.second.back.content2") }}</p>
            <h4>{{ $t("policy.second.back.title3") }}</h4>
            <p>{{ $t("policy.second.back.content3") }}</p>
          </div>
        </div>
      </div>
      <div class="flip flip3">
        <div class="front">
          <img
            class="card-img"
            src="~/assets/images/pic3.svg"
            alt="政策一插圖"
          />
          <div class="card-front-info">
            <h4>{{ $t("policy.third.front.title") }}</h4>
            <b>{{ $t("policy.third.front.subtitle1") }}</b>
            <b>{{ $t("policy.third.front.subtitle2") }}</b>
          </div>
        </div>
        <div class="back">
          <div class="card-back-info">
            <h4>{{ $t("policy.third.back.title1") }}</h4>
            <p>{{ $t("policy.third.back.content1") }}</p>
            <h4>{{ $t("policy.third.back.title2") }}</h4>
            <p>{{ $t("policy.third.back.content2") }}</p>
            <h4>{{ $t("policy.third.back.title3") }}</h4>
            <p>{{ $t("policy.third.back.content3") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/Policy/Title.vue";
</script>

<style scoped>
.container--policy {
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  @media screen and (width <= 560px) {
    flex-direction: column;
  }
}
/* base */
.flip {
  position: relative;
  > .front,
  > .back {
    display: block;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 0.5s;
    transition-property: transform, opacity;
  }
  > .front {
    transform: rotateY(0deg);
  }
  > .back {
    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    transform: rotateY(-180deg);
  }
  &:hover {
    > .front {
      transform: rotateY(180deg);
    }
    > .back {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
}
/* custom */
.flip {
  width: 30%;
  height: 28rem;
  min-width: 20rem;
  position: relative;
  display: inline-block;
  margin-right: 2px;
  margin-bottom: 1em;
  @media screen and (width <= 560px) {
    width: 85%;
    min-width: 16rem;
  }
  > .front,
  > .back {
    width: 100%;
    height: 100%;
    display: block;
    color: var(--color-text);
    padding: 1em 2em;
    background-color: var(--policy-card-bg);
    border-radius: 1rem;
    border: 3px solid var(--color-white);
    p {
      font-size: 0.9125rem;
      line-height: 160%;
      color: var(--color-text);
    }
  }
}
.card-img {
  margin: 3rem;
  width: 50%;
}
.card-front-info {
  max-width: 10rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translatex(-50%);
  font-size: 1.25rem;
  & h4 {
    background-color: var(--color-white);
    color: var(--color-primary-dark);
    font-size: 1.5rem;
  }
}
.card-back-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 1rem;
  & h4 {
    font-size: 1.25rem;
  }
  :is(p) {
    font-size: 1rem;
    color: var(--card-content);
    margin-bottom: 1rem;
  }
}
</style>
