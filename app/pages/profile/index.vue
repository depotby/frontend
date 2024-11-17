<script setup lang="ts">
definePageMeta({
  middleware: ['require-authentication']
});

const { t } = useI18n();
const userStore = useUserStore();

userStore.loadUserInfo();

useHead(() => ({
  title: t('pages.profile.meta.title'),
}))
</script>

<template>
  <div>
    <div :class="containers.medium">
      <pre>{{ userStore.user }}</pre>
    </div>
  </div>
</template>

<style module="containers" src="~/assets/styles/modules/containers.scss" />

<style module lang="scss">
.page-profile {
}
</style>
