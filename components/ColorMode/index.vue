<template>
  <div class="color-mode">
    <input type="checkbox" id="colormode-switch" @click="swtichMode" />
    <label for="colormode-switch" class="color-mode-switch">
      <LightIcon class="icon-light" />
      <DarkIcon class="icon-dark" />
    </label>
  </div>
</template>

<script setup>
import LightIcon from "@/components/ColorMode/LightIcon.vue";
import DarkIcon from "@/components/ColorMode/DarkIcon.vue";
const colorMode = useColorMode();
const darkMode = () => {
  colorMode.preference = "dark";
  document.getElementById("colormode-switch").checked = true;
};
const lightMode = () => {
  colorMode.preference = "light";
  document.getElementById("colormode-switch").checked = false;
};

const dateCompare = (time) => {
  let timestamp = 20;
  if (time <= 1 || time <= 8 || time >= timestamp) {
    return darkMode();
  }
  lightMode();
};

const swtichMode = () => {
  let preference = colorMode.preference;
  let value = colorMode.value;
  if (preference === "dark" && value === "dark") {
    lightMode();
  } else {
    darkMode();
  }
};
onMounted(() => {
  let localTime = new Date().getHours();
  dateCompare(localTime);
});
</script>

<style scoped>
.color-mode {
  display: flex;
  justify-content: center;
}
input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}
label {
  cursor: pointer;
  width: 72px;
  height: 32px;
  background: var(--color-primary-dark);
  display: block;
  border-radius: 6.25rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 3.5px;
    left: 4.5px;
    width: 25px;
    height: 25px;
    background-color: var(--color-white);
    border-radius: 5.75rem;
    transition: 0.3s;
  }
}

.color-mode-switch::before,
.color-mode-switch::after {
  display: block;
  color: var(--color-white);
  box-sizing: border-box;
}

.color-mode-switch {
  position: relative;
}
.icon-dark {
  position: absolute;
  left: 6px;
  top: 4px;
  z-index: 10;
}
.icon-light {
  position: absolute;
  right: 10px;
  top: 6px;
  z-index: 10;
}

input:checked + label {
  background: var(--color-gray-600);
}
input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}
</style>
