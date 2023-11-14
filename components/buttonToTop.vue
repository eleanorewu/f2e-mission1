<template>
  <button class="button-to-top" v-if="isShowTop" @click="scrollToTop">
    TOP
  </button>
</template>

<script lang="ts">
import scrollToTop from "@/stores/scrollTop";

export default defineComponent({
  setup() {
    const isShowTop = ref(false);
    const onScroll = () => {
      const st = window.scrollY;
      isShowTop.value = st > 100;
    };

    onMounted(() => {
      document.addEventListener("scroll", onScroll);
    });

    onUnmounted(() => {
      document.removeEventListener("scroll", onScroll);
    });

    return {
      scrollToTop,
      isShowTop,
    };
  },
});
</script>

<style scoped>
.button-to-top {
  padding: 0;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background-color: var(--color-primary-dark);
  color: var(--color-black);
  border: 1px solid var(--color-primary);
  box-shadow: 0 0.25rem 0.5rem rgba(130, 130, 130, 0.15);
  border-radius: 3.5rem;
  font-size: 0.975rem;
  letter-spacing: 1px;
  line-height: 100%;
  font-weight: bold;
  position: fixed;
  right: 2.5rem;
  bottom: 2.5rem;
  z-index: 99;
  @media screen and (width <= 768px) {
    right: 1.5rem;
    bottom: 1.5rem;
  }
}
</style>
