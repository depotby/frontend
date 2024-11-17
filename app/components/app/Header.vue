<script setup lang="ts">
import type { MainIcon } from '~~/types/assets/icons';

const actions: { icon: MainIcon; path: string }[] = [
  {
    path: 'profile',
    icon: 'account-circle',
  },
  {
    path: 'wishlist',
    icon: 'bookmark-heart',
  },
  {
    path: 'cart',
    icon: 'shopping-cart-outline-rounded',
  },
];
</script>

<template>
  <header :class="$style['app-header']">
    <div :class="[containers.large, $style['app-header__inner']]">
      <NuxtLinkLocale :to="{ name: 'index' }">
        <img src="~/assets/images/svg/logo.svg" alt="logo" :class="$style['app-header__logo']" />
      </NuxtLinkLocale>

      <div :class="$style['app-header__actions']">
        <NuxtLinkLocale v-for="action in actions" :key="action.path" :to="{ name: action.path }">
          <UiIcon :name="action.icon" color="color-white" size="25" />
        </NuxtLinkLocale>
      </div>
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
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    height: 30px;
  }

  &__actions {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  @include media-query-desktop {
  }
}
</style>
