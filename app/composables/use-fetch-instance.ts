import { FetchError } from 'ofetch';

let refresh: Promise<any> | null = null;

export const useFetchInstance = () => {
  const runtimeConfig = useRuntimeConfig();
  const userStore = useUserStore();

  return $fetch.create({
    baseURL: runtimeConfig.public.baseApiUrl,
    onRequest(context) {
      if (userStore.access_token)
        context.options.headers.set('Authorization', userStore.access_token);
    },
    async onResponseError(error) {
      // @ts-expect-error custom options for refresh control
      if (error.response.status === 401 && !error.options.__signIn && !error.options.__refresh) {
        try {
          await userStore.refresh();
          return await $fetch(error.request);
        } catch (e) {
          if (e instanceof FetchError && e.response?.status === 401) {
            if (!refresh) refresh = userStore.signOut(true);
            await refresh;
            refresh = null;
          }
        }
      }
    },
  });
};
