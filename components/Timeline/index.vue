<template>
  <div class="block">
    <Title />
    <iframe
      :key="lang"
      class="container container--timeline"
      :src="`https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=${srcID}&font=Default&lang=zh-tw&start_at_end=true&initial_zoom=0&timenav_position=top&height=650`"
      width="1440"
      height="650"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup>
import Title from "@/components/Timeline/Title.vue";
import { watch } from "vue";
const props = defineProps(["colorMode", "lang"]);
const srcID = ref("");

const getSrcID = (lang) => {
  if (props.lang === "zhTW")
    return "1dR9TQG2tWyi2qUItkKAettg8ZL0_S2uOHEJFs7ShDWI";
  else if (props.lang == "meow")
    return "1yJXBeQioa_mpX7RT10jgjr0WY-_tF-kQveeYdyaxjWg";
};
srcID.value = getSrcID(props.lang);
watch(
  () => props.lang,
  (val) => {
    srcID.value = getSrcID(val);
  }
);
</script>

<style scoped>
#timeline_wrapper {
  position: absolute;
  top: 210px;
  left: 0;
  right: 0;
  bottom: 0;
}

#panel {
  background: #ededed;
  height: 156px;
  padding: 6px 4px;
  border-top: 1px solid black;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}
#panel button {
  width: 100px;
}
#panel label {
  margin-right: 4px;
}
</style>
