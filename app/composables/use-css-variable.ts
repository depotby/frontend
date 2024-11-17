import type { Color } from '~~/types/assets/colors';

export const useCssVariable = (value: MaybeRefOrGetter<Color | string>) =>
  computed(() => `var(--${toValue(value)})`);
