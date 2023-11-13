<template>
  <div class="introduce">
    <Title />
    <div class="intro-block">
      <ul class="filter">
        <li class="filter-item checked">喵的所有</li>
        <li class="filter-item">喵的介紹</li>
        <li class="filter-item">喵的親友團</li>
        <li class="filter-item">支持本喵</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/Introduce/Title.vue";
</script>

<style scoped>
.introduce {
  width: 100%;
  height: auto;
  & .intro-block {
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    & .filter {
      padding: 0.375rem 0.5rem;
      max-width: 500px;
      display: flex;
      justify-content: center;
      background-color: var(--filter-bg);
      border-radius: 4rem;
      gap: 0.25rem;
      @media screen and (width <= 560px) {
        max-width: 100%;
      }
      & .filter-item {
        padding: 0.5rem 1rem;
        background-color: transparent;
        color: var(--color-black);
        border-radius: 4rem;
        font-weight: bold;
        letter-spacing: 0;
        &.checked {
          background-color: var(--filter-item-bg);
        }
      }
      /* & .intro-content {
        padding: 2rem 1rem;
        border: 1px solid #000;
      } */
    }
  }
}
</style>
