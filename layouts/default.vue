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

<script>
import Loading from "~/components/Loading.vue";

export default {
  components: {
    Loading,
  },
};
</script>

<style scoped></style>
