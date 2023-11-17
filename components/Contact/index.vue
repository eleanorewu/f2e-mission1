<template>
  <div class="block">
    <Title />
    <div class="container container--contact">
      <div class="bg-vector"></div>
      <div class="contact-form">
        <div class="input-container">
          <label for="user_name">{{ $t("contact.name") }}</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            v-model="templateParams.user_name"
            placeholder="請輸入姓名"
          />
        </div>
        <div class="input-container">
          <label for="user_mail">{{ $t("contact.email") }}</label>
          <input
            type="text"
            name="user_mail"
            id="user_mail"
            v-model="templateParams.user_mail"
            placeholder="請輸入E-mail"
          />
        </div>
        <div class="input-container">
          <label for="user_message">{{ $t("contact.content") }}</label>
          <textarea
            name="user_message"
            id="user_message"
            v-model="templateParams.user_message"
            rows="5"
            placeholder="請輸入內容"
          ></textarea>
        </div>
        <button @click="sendEmail()">{{ $t("contact.submit") }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/Contact/Title.vue";
import emailjs from "@emailjs/browser";
import { ref } from "vue";
const templateParams = ref({
  from_name: "喵立翰",
  user_name: "",
  user_mail: "",
  user_message: "",
});
const sendEmail = () => {
  console.log(templateParams.value);
  emailjs
    .send(
      "service_miao",
      "template_lzsob5s",
      templateParams.value,
      "RNpRVqqWxNOaAiODy"
    )
    .then((res) => {
      alert("Successfully!", res);
    }),
    (err) => {
      alert("Failed QQ", err);
    };
};
</script>

<style scoped>
.container--contact {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (width <= 760px) {
    flex-direction: column;
  }
  & .bg-vector {
    width: 50%;
    height: 20rem;
    background-size: contain;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url(~/assets/images/bg-vector.svg);
    @media screen and (width <= 760px) {
      width: 100%;
      height: 10rem;
    }
  }
  & .contact-form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media screen and (width <= 760px) {
      width: 100%;
    }
    & .input-container {
      width: 100%;
      padding: 0.75rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      & label {
        width: 100%;
        text-align: left;
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      & input {
        width: 100%;
        height: 3rem;
        text-align: left;
        padding: 0.5rem 1rem;
        border-radius: 0.75rem;
        background-color: var(--color-white);
      }
      & textarea {
        width: 100%;
        text-align: left;
        padding: 0.5rem 1rem;
        border-radius: 0.75rem;
        background-color: var(--color-white);
      }
    }
  }
}
</style>
