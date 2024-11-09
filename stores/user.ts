import type { User } from '~/types/models/user';

export const useUserStore = defineStore('user', () => {
  const user = ref<User>();

  return {
    user,
  };
});
