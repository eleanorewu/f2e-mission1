<template>
  <div class="block sponsor">
    <Title />
    <div class="container container--sponsor">
      <div class="static-block">
        <img src="../../assets/images/big-head.svg" alt="">
        <p class="title">小額捐款</p>
        <p class="content">您的贊助，是支持人類未來的最大動力！</p>
      </div>
      <div>
        <img class="coin1" src="../../assets/images/coin.svg" alt="">
        <img class="coin2" src="../../assets/images/coin.svg" alt="">
        <img class="coin3" src="../../assets/images/coin.svg" alt="">
        <img class="coin4" src="../../assets/images/coin.svg" alt="">
      </div>
      <button type="button" @click="toPage()">{{ $t("sponsor.cta") }}</button>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/Sponsor/Title.vue";
const toPage = () => { 
  window.open('https://neillin.bobaboba.me/?source=post_page-----c7466b1faf76--------------------------------')
}
onMounted(() => {
  useSponsorParallax();
})
</script>

<style scoped>
.container--sponsor {
  height: auto;
  padding: 5rem 10rem 5rem;
  position: relative;
  @media screen and (width <= 768px) {
    padding: 5rem 3rem 5rem;
  }
}
.static-block {
  & img {
    padding-bottom: 2rem;
  }
  & .title {
    font-size: 2.25rem;
    font-weight: bold;
    padding-bottom: 3rem;
    @media screen and (width <= 768px) {
      padding-bottom: 5rem;
    }
  }
  & .content {
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 1px;
    padding-bottom: 0.75rem;
  }
}
.coin1 {
  width: 150px;
  position: absolute;
  top: 130px;
  left: 200px;
  @media screen and (width <= 768px) {
    width: 110px;
    position: absolute;
    top: 140px;
    left: 35px;
  }
}
.coin2 {
  width: 130px;
  position: absolute;
  top: 175px;
  right: 200px;
  transform:scaleX(-1);
  @media screen and (width <= 768px) {
    width: 100px;
    position: absolute;
    top: 220px;
    right: 30px;
  }
}
.coin3 {
  width: 80px;
  position: absolute;
  bottom: 145px;
  left: 300px;
  transform:scaleX(-1);
  @media screen and (width <= 768px) {
    width: 60px;
    position: absolute;
    bottom: 245px;
    left: 80px;
  }
}
.coin4 {
  width: 80px;
  position: absolute;
  bottom: 105px;
  right: 180px;
  @media screen and (width <= 768px) {
    width: 60px;
    position: absolute;
    bottom: 205px;
    right: 80px;
  }
}
</style>
