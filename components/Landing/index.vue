<template>
  <div class="landing">
    <p class="big-title">喵立翰</p>
    <img src="../../assets/images/meow.svg" alt="meowLiHan" class="meow" />
    <p class="sub-title">
      {{ $t("landing.title") }}
      <span class="number-one">1</span>
    </p>
    <div class="content">{{ $t("landing.content") }}</div>
  </div>
</template>

<script setup>
onMounted(() => {
  useLandingParallax();
});
</script>

<style scoped>
.landing {
  width: 100%;
  height: 84vh;
  background-color: var(--landing-bg);
  /* padding-top: 100px; */
  padding: 100px 23rem 0;
  text-align: center;
  position: relative;
  @media screen and (width >= 1440px) {
    padding: 80px 18rem 0;
  }
  @media screen and (width <= 1440px) {
    padding: 100px 16rem 0;
  }
  @media screen and (width <= 1200px) {
    padding: 100px 12rem 0;
  }
  @media screen and (width <= 960px) {
    height: 50vh;
    padding: 100px 6rem 0;
  }
  @media screen and (width <= 768px) {
    height: 35vh;
    padding: 0px 1rem 0;
  }
}
.big-title {
  font-size: 12rem;
  font-weight: bold;
  letter-spacing: 40px;
  position: relative;
  bottom: -200px;
  padding-bottom: 1rem;

  @media screen and (width >= 1640px) {
    font-size: 19rem;
  }
  @media screen and (width <= 1640px) {
    font-size: 14.75rem;
    padding-bottom: 4rem;
  }
  @media screen and (width <= 1440px) {
    font-size: 12rem;
    padding-bottom: 4rem;
  }
  @media screen and (width <= 960px) {
    /* bottom: -50px; */
    font-size: 10rem;
    padding-bottom: 1rem;
  }
  @media screen and (width <= 768px) {
    font-size: 8rem;
    letter-spacing: 5px;
    padding-bottom: 4.5rem;
  }
}
.sub-title {
  font-size: 4.75rem;
  font-weight: bolder;
  text-align: left;
  margin-left: 4.5rem;
  margin-bottom: 2.25rem;
  letter-spacing: 8px;
  & .number-one {
    font-size: 4.5rem;
    color: #da4134;
    border: 8px solid #da4134;
    padding: 1px 25px;
    border-radius: 50%;
  }
  @media screen and (width <= 1440px) {
    font-size: 3.75rem;
    margin-left: 4rem;
    margin-bottom: 1.5rem;
    & .number-one {
      font-size: 3rem;
      padding: 1px 18px;
    }
  }
  @media screen and (width <= 1200px) {
    font-size: 2.75rem;
    margin-left: 4rem;
    margin-bottom: 1.5rem;
  }
  @media screen and (width <= 960px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    & .number-one {
      font-size: 1.5rem;
      border: 3px solid #da4134;
      padding: 1px 8px;
    }
  }
  @media screen and (width <= 768px) {
    font-size: 1.5rem;
    margin-left: 2.5rem;
    letter-spacing: 5px;
    margin-bottom: 0;
    padding-bottom: 1.5rem;
    & .number-one {
      font-size: 1.5rem;
      border: 3px solid #da4134;
      padding: 1px 8px;
    }
  }
}
.content {
  text-align: left;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 2;
  margin-left: 4.75rem;
  font-size: 1.25rem;
  color: var(--text-gray);
  max-width: 500px;
  @media screen and (width <= 1640px) {
    margin-left: 4rem;
    font-size: 1rem;
    max-width: 400px;
  }
  @media screen and (width <= 768px) {
    max-width: 230px;
    font-size: 0.85rem;
    letter-spacing: 0;
    line-height: 1.75;
    margin-left: 2.5rem;
    /* display: none; */
  }
}
.meow {
  width: 34rem;
  position: absolute;
  bottom: -10rem;
  clip: rect(0 34rem 34rem 0px);
  @media screen and (width <= 1640px) {
    width: 28rem;
    right: 220px;
    bottom: -9.25rem;
    clip: rect(0 27rem 27rem 0px);
  }
  @media screen and (width <= 1200px) {
    width: 26rem;
    bottom: -7.75rem;
    right: 130px;
    clip: rect(0 26rem 26rem 0px);
  }
  @media screen and (width <= 960px) {
    width: 20rem;
    right: 40px;
    bottom: -5.85rem;
    clip: rect(0 20rem 20rem 0px);
  }
  @media screen and (width <= 768px) {
    width: 16rem;
    right: 0;
    bottom: -4.75rem;
    clip: rect(0 16rem 16rem 0px);
  }
}
</style>
