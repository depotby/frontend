import type { Api } from '~/types/composables/use-api';

export const useApi = (): Api => {
  const http = useFetchInstance();

  return {
    authentication: {
      create: (body) => http('/v1/authentications', { method: 'post', body }),
    },
  };
};
