export default defineNuxtRouteMiddleware(() => {
  const localePath = useLocalePath();
  const userStore = useUserStore();

  if (userStore.isAuthorized) return localePath({ name: 'index' });
});
