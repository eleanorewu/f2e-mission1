<template>
  <div class="contact">
    <Title />
    <div class="form-container">
      <div class="input-container">
        <label for="user_name">Name</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          v-model="templateParams.user_name"
        />
      </div>
      <div class="input-container">
        <label for="user_mail">Email</label>
        <input
          type="text"
          name="user_mail"
          id="user_mail"
          v-model="templateParams.user_mail"
        />
      </div>
      <div class="input-container">
        <label for="user_message">Message</label>
        <textarea
          name="user_message"
          id="user_message"
          v-model="templateParams.user_message"
          rows="5"
          cols="30"
        ></textarea>
      </div>
      <button @click="sendEmail()">送出</button>
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
.contact {
  width: 100%;
  height: auto;
}
.form-container {
  margin: 4rem 18rem 10rem;
  /* text-align: center; */
}
.input-container {
  padding: 0.75rem;
  & label {
    padding-right: 0.5rem;
  }
  & input {
    min-width: 15rem;
  }
}
input,
textarea {
  border: 1px solid #8d8d8d;
  border-radius: 0.25rem;
}
</style>
