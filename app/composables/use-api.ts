import type { Api } from '~~/types/composables/use-api';
import { FetchError } from 'ofetch';

export const useApi = (): Api => {
  const http = useFetchInstance();

  return {
    authentication: {
      create: (body) => http('/v1/authentications', { method: 'post', body, __signIn: true }),
      refresh: (body) => http('/v1/authentications', { method: 'put', body, __refresh: true }),
      signOut: () => http('/v1/authentications', { method: 'delete' }),
    },
    user: {
      info: () => http('/v1/user', { method: 'get' }),
    },
    isFetchError: (e): e is FetchError => e instanceof FetchError,
  };
};
