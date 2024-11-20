<script setup lang="ts">
import logo from '@/assets/images/svg/logo.svg';

const { t } = useI18n();
const head = useLocaleHead();

useHead(() => ({
  htmlAttrs: head.value.htmlAttrs,
  titleTemplate: t('meta.title_template'),
  meta: head.value.meta,
  link: [
    ...(head.value.link ?? []),
    { rel: 'icon', type: 'image/svg+xml', href: logo },
    { rel: 'mask-icon', href: logo, color: 'transparent' },
  ],
}));

useSeoMeta({
  ogImage: logo,
});
</script>

<template>
  <div :class="$style['layout-default']">
    <NuxtLoadingIndicator />

    <AppHeader :class="$style['layout-default__header']" />

    <div :class="$style['layout-default__main']">
      <slot />
    </div>
  </div>
</template>

<style module lang="scss">
.layout-default {
  padding-block-start: $app-header-height;

  &,
  &__main {
    min-height: 100dvh;
  }

  &__header {
    position: fixed;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
  }

  &__main {
    padding-block-start: 10px;
  }
}
</style>
