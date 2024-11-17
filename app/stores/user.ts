import type { User } from '~~/types/models/user';
import type { AuthenticationCreationRequest } from '~~/types/models/authentication';

export const useUserStore = defineStore('user', () => {
  const api = useApi();

  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  const access_token = useCookie('access_token', { expires });
  const refresh_token = useCookie('refresh_token', { expires });

  const user = ref<User>();

  const isAuthorized = computed(() => !!refresh_token.value);

  const loadUserInfo = async () => {
    user.value = await api.user.info();
  };

  const autologin = async () => {
    if (!refresh_token.value) return;

    await loadUserInfo();
  };

  const signIn = async (userForm: AuthenticationCreationRequest['user']) => {
    const {
      tokens: { access, refresh },
    } = await api.authentication.create({ user: userForm });

    access_token.value = access;
    refresh_token.value = refresh;

    await loadUserInfo();
  };

  const refresh = async () => {
    if (!refresh_token.value) return;

    const {
      tokens: { access, refresh },
    } = await api.authentication.refresh({ token: refresh_token.value });

    access_token.value = access;
    refresh_token.value = refresh;
  };

  const signOut = async (skipRequest = false) => {
    if (!skipRequest) await api;
  };

  return {
    access_token,
    refresh_token,
    user,
    isAuthorized,
    loadUserInfo,
    autologin,
    signIn,
    refresh,
    signOut,
  };
});
