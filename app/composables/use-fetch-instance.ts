import { FetchError } from 'ofetch';

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
        } catch (e) {
          if (e instanceof FetchError && e.response?.status === 401) {
          }
        }
      }
    },
  });
};
