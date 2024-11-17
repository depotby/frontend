<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <header :class="$style['app-header']">
    <div :class="[containers.large, $style['app-header__inner']]">
      <img src="~/assets/images/svg/logo.svg" alt="logo" :class="$style['app-header__logo']" />
    </div>
  </header>
</template>

<style module="containers" src="~/assets/styles/modules/containers.scss" />

<style module lang="scss">
.app-header {
  height: $app-header-height;
  background: $color-black;

  &__inner {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__logo {
    width: 30px;
    height: 30px;
  }

  @include media-query-desktop {
  }
}
</style>
