<template>
  <div>
    <Loading />
    <Html>
      <Body class="wrapper">
        <div class="layout">
          <Header />
          <slot />
          <Footer />
          <ButtonToTop />
        </div>
      </Body>
    </Html>
  </div>
</template>

<script setup>
import Loading from "~/components/Loading.vue";

onMounted(() => {
		useSmoothScroll()
	})
</script>

<style scoped></style>
