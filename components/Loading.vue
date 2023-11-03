<template>
  <div class="loading-indicator">
    <img
      class="avatar"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlE7FjHztLrji72AKd5EvLnj21j8YdicZOFhzJQhadw&s"
      alt=""
    />
    <div class="msg-box">
      <span class="msg">{{ $t("title") }}</span>
      <span>{{ $t("sub-title") }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const msgContent = ref("不投我的都是狗");
</script>

<style scoped>
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
    object-fit: cover;
    border-radius: 4.5rem;
    overflow: hidden;
    border: 1px solid var(--border-color);
  }
  & .msg-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & .msg {
      font-size: 1.875rem;
      padding: 0.75rem 1.5rem;
      color: var(--color-text);
      background-color: var(--bg);
      border: 1px solid var(--border-color);
      border-radius: 0.125rem 2rem 2rem;
      margin-bottom: 0.25rem;
    }
    & span {
      padding: 0 1rem;
    }
  }
}

@keyframes openin {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
