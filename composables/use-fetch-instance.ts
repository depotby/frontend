export const useFetchInstance = () => {
  const runtimeConfig = useRuntimeConfig();

  return $fetch.create({
    baseURL: runtimeConfig.public.baseApiUrl,
  });
};
