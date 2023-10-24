<template>
  <div class="header">
    <p>Header</p>
    <input
      type="checkbox"
      id="colormode-switch"
      @click="swtichMode(colorMode.preference)"
    />
    <label for="colormode-switch" class="color-mode-switch">
      <SvgIconDark class="icon-dark"></SvgIconDark>
      <SvgIconLight class="icon-light"></SvgIconLight>
    </label>
  </div>
</template>

<script setup>
import SvgIconDark from "@/components/SvgIcon/Dark.vue";
import SvgIconLight from "@/components/SvgIcon/Light.vue";
const colorMode = useColorMode();
console.log(colorMode);
const swtichMode = (mode) => {
  if (mode === "dark") {
    colorMode.preference = "light";
  } else {
    colorMode.preference = "dark";
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg);
  color: var(--color-text);
  border-bottom: 1px solid var(--border-color);
  & p {
    padding: 1rem;
  }
}
input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}
label {
  cursor: pointer;
  width: 70px;
  height: 35px;
  background: #adadad;
  display: block;
  border-radius: 6.25rem;
  position: relative;
}
label:after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 5.75rem;
  transition: 0.3s;
}
.color-mode-switch::before,
.color-mode-switch::after {
  display: block;
  color: #fff;
  box-sizing: border-box;
}

.color-mode-switch {
  position: relative;
}
.icon-dark {
  position: absolute;
  left: 10px;
  top: 6px;
  z-index: 10;
}
.icon-light {
  position: absolute;
  right: 10px;
  top: 7px;
  z-index: 10;
}

input:checked + label {
  background: #000;
}
input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}
</style>
