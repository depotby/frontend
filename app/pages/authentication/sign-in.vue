<script setup lang="ts">
definePageMeta({
  middleware: ['redirect-if-authorized'],
});

const { t } = useI18n();
const userStore = useUserStore();

const form = ref({
  email: '',
  password: '',
});

const handleFormSubmit = async () => {
  const answer = await userStore.signIn(form.value);
  console.log(answer);
};

useSeoMeta({
  title: t('pages.authentication.sign_in.meta.title'),
  ogTitle: t('pages.authentication.sign_in.meta.title'),
});
</script>

<template>
  <form @submit.prevent="handleFormSubmit">
    <input v-model="form.email" type="email" />
    <input v-model="form.password" type="password" />
    <button type="submit">Login</button>
  </form>
</template>

<style module lang="scss"></style>
