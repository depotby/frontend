<script setup lang="ts"></script>

<template>
  <header :class="$style['app-header']"></header>
</template>

<style module lang="scss">
.app-header {
  height: $app-header-height;
  background: $color-black;
}
</style>
