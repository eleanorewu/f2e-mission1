<template>
  <div class="block">
    <Title />
    <div class="container container--intro">
      <ul class="filter">
        <li
          class="filter-item"
          :class="{ checked: tab === '' }"
          @click="changeTab()"
        >
          {{ $t("introduce-tab[0]") }}
        </li>
        <li
          class="filter-item"
          :class="{ checked: tab === 'introduce' }"
          @click="changeTab('introduce')"
        >
          {{ $t("introduce-tab[1]") }}
        </li>
        <li
          class="filter-item"
          :class="{ checked: tab === 'friends' }"
          @click="changeTab('friends')"
        >
          {{ $t("introduce-tab[2]") }}
        </li>
        <li
          class="filter-item"
          :class="{ checked: tab === 'support' }"
          @click="changeTab('support')"
        >
          {{ $t("introduce-tab[3]") }}
        </li>
      </ul>
      <Masonry />
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/Introduce/Title.vue";
import Masonry from "@/components/Introduce/Masonry.vue";
const tab = ref("");
const changeTab = (label) => {
  const container = document.getElementById("masonry");
  if (!label) {
    container.classList = ["masonry"];
    tab.value = "";
  }
  container.classList.toggle(label);
  if (container.classList[container.classList.length - 1] === label) {
    container.classList = ["masonry"];
    container.classList.add(label);
    tab.value = label;
  }
};
</script>

<style scoped>
.container--intro {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .filter {
    margin-bottom: 2rem;
    padding: 0.375rem 0.5rem;
    display: flex;
    justify-content: center;
    background-color: var(--filter-bg);
    border-radius: 4rem;
    gap: 0.25rem;
    & .filter-item {
      padding: 0.5rem 1rem;
      background-color: transparent;
      border-radius: 4rem;
      font-weight: bold;
      color: var(--color-black);
      letter-spacing: 0;
      cursor: pointer;
      transition: all 0.5s;
      word-break: break-all;
      &.checked {
        background-color: var(--filter-item-bg);
      }
    }
  }
}
</style>
