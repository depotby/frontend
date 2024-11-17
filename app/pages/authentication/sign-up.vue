<script setup lang="ts">
definePageMeta({
  middleware: ['redirect-if-authorized']
})

const { t } = useI18n();

useHead(() => ({
  title: t('pages.authentication.sign_up.meta.title'),
}))
</script>

<template>
  <div></div>
</template>

<style module lang="scss"></style>
