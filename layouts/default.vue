<template>
  <div>
    <Loading />
    <html>
      <body class="wrapper">
        <div class="layout">
          <Header />
          <slot />
          <Footer />
          <ButtonToTop />
        </div>
      </body>
    </html>
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
