<script setup lang="ts">
const { t } = useI18n();

useHead(() => ({
  title: t('pages.index.meta.title')
}))
</script>

<template>
  <div>
    <NuxtLinkLocale :to="{ name: 'authentication-sign-in' }">
      {{ $t('labels.sign_in') }}
    </NuxtLinkLocale>

    <NuxtLinkLocale :to="{ name: 'authentication-sign-up' }">
      {{ $t('labels.sign_up') }}
    </NuxtLinkLocale>
  </div>
</template>
