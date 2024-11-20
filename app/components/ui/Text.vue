<script setup lang="ts">
import type { Color } from '~~/types/assets/colors';

const style = useCssModule();

type NumericWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type Weight = NumericWeight | `${NumericWeight}`;

interface Props {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'regular' | 'lead' | 'underline';
  tag?: string;
  color?: Color;
  weight?: Weight;
  align?: 'start' | 'center' | 'end';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'regular',
  color: 'color-black',
  align: 'start',
});

const computedComponent = computed(
  () => props.tag ?? (/^h[1-6]$/.test(props.variant) ? props.variant : 'div'),
);

const computedClasses = computed(() => ({
  [style['ui-text']]: true,
  [style[`ui-text--variant-${props.variant}`]]: props.variant,
  [style[`ui-text--align-${props.align}`]]: props.align,
  [style[`ui-text--weight-${props.weight}`]]: props.weight,
}));

const textColor = computed(() => useCssVariable(props.color).value);
</script>

<template>
  <component :is="computedComponent" :class="computedClasses">
    <slot />
  </component>
</template>

<style module lang="scss">
.ui-text {
  color: v-bind(textColor);

  &--variant {
    &-h1,
    &-h2,
    &-h3,
    &-h4,
    &-h5,
    &-h6 {
      &,
      > * {
        font-weight: 500;
      }
    }

    &-h1 {
      font-size: calc(1.375rem + 1.5vw);
    }

    &-h2 {
      font-size: calc(1.325rem + 0.9vw);
    }

    &-h3 {
      font-size: calc(1.3rem + 0.6vw);
    }

    &-h4 {
      font-size: calc(1.275rem + 0.3vw);
    }

    &-h5 {
      font-size: 1.25rem;
    }

    &-h6 {
      font-size: 1rem;
    }

    &-lead {
      &,
      > * {
        font-size: 1.25rem;
        font-weight: 300;
      }
    }

    &-underline {
      &,
      & > * {
        font-size: 0.875em;
        font-weight: 400;
      }
    }

    &-regular {
      &,
      > * {
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

  &--align {
    &-start {
      text-align: start;
    }

    &-center {
      text-align: center;
    }

    &-end {
      text-align: end;
    }
  }

  &--weight {
    $weights: (100, 200, 300, 400, 500, 600, 700, 800, 900);

    @each $weight in $weights {
      &-#{$weight} {
        &,
        > * {
          font-weight: $weight;
        }
      }
    }
  }
}
</style>
