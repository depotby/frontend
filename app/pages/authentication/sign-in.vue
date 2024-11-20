<script setup lang="ts">
definePageMeta({
  middleware: ['redirect-if-authorized'],
});

const router = useRouter();
const { t } = useI18n();
const localePath = useLocalePath();
const api = useApi();
const userStore = useUserStore();

const loading = ref(false);
const form = ref({
  email: '',
  password: '',
});
const error = ref<string>();

const handleFormSubmit = async () => {
  if (loading.value) return;

  loading.value = true;
  try {
    await userStore.signIn(form.value);
    await router.replace(localePath({ name: 'profile' }));
  } catch (e) {
    if (api.isFetchError(e) && e.response?.status === 401) error.value = e.response._data.message;
  }
  loading.value = false;
};

watch(
  () => form.value,
  () => {
    if (error.value) error.value = undefined;
  },
  { deep: true },
);

useSeoMeta({
  title: t('pages.authentication.sign_in.meta.title'),
  ogTitle: t('pages.authentication.sign_in.meta.title'),
});
</script>

<template>
  <div :class="[containers['xx-small'], $style['page-authentication-sign-in']]">
    <UiText variant="h1" align="center">
      {{ $t('labels.sign_in') }}
    </UiText>

    <form :class="$style['page-authentication-sign-in__form']" @submit.prevent="handleFormSubmit">
      <div :class="$style['page-authentication-sign-in__fields']">
        <UiFormInput
          v-model="form.email"
          :label="$t('labels.email')"
          :placeholder="$t('labels.email_example')"
          :disabled="loading"
          name="email"
          type="email"
          required
        />

        <UiFormInput
          v-model="form.password"
          :label="$t('labels.password')"
          :placeholder="$t('labels.password')"
          :disabled="loading"
          :error
          name="password"
          type="password"
          required
        />
      </div>

      <UiButton :loading size="large" type="submit">
        {{ $t('action.sign_in') }}
      </UiButton>
    </form>
  </div>
</template>

<style module="containers" src="~/assets/styles/modules/containers.scss" />

<style module lang="scss">
.page-authentication-sign-in {
  gap: 5px;

  &,
  &__form,
  &__fields {
    display: flex;
    flex-direction: column;
  }

  &__form {
    gap: 25px;
  }

  &__fields {
    gap: 15px;
  }
}
</style>
