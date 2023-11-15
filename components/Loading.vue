<template lang="html">
  <div class="loading-page" v-if="showLoading">
    <div class="loading-indicator">
      <img class="avatar" src="~/assets/images/avatar.png" alt="喵立翰" />
      <div class="msg-box">
        <span class="msg" :key="msgContent">{{ msgContent }}</span>
        <span>選一隻會做事的貓咪...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const msgContent = ref("不投我的都是狗");
const showLoading = ref(true);

setTimeout(() => {
  showLoading.value = false;
}, 2000);
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  background: var(--main-bg);
  justify-content: center;
  padding-top: 300px;
  z-index: 100;
}
.loading-indicator {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  animation: openin 1s ease-in-out;
  gap: 0.5rem;
  margin: 1rem auto;
  & img {
    width: 4.5rem;
    height: 4.5rem;
    object-fit: contain;
    border-radius: 4.5rem;
    overflow: hidden;
    border-color: 1px solid var(--color-black);
    @media screen and (width <= 480px) {
      width: 3rem;
      height: 3rem;
    }
  }
  & .msg-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & .msg {
      font-size: 1.75rem;
      padding: 0.75rem 1.5rem;
      color: var(--color-text);
      background-color: var(--loading-msg-bg);
      border: 1px solid var(--color-text);
      border-radius: 0.125rem 2rem 2rem;
      margin-bottom: 0.25rem;
      @media screen and (width <= 480px) {
        font-size: 1.25rem;
      }
    }
    & span {
      padding: 0 1rem;
      @media screen and (width <= 480px) {
        font-size: 0.875rem;
      }
    }
  }
}

@keyframes openin {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
