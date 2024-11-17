import type { Api } from '~/types/composables/use-api';

export const useApi = (): Api => {
  const http = useFetchInstance();

  return {
    authentication: {
      create: (body) => http('/v1/authentications', { method: 'post', body, __signIn: true }),
      refresh: (body) => http('/v1/authentications', { method: 'put', body, __refresh: true }),
    },
    user: {
      info: () => http('/v1/user', { method: 'get' }),
    },
  };
};
