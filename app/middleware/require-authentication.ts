export default defineNuxtRouteMiddleware((to) => {
  const localePath = useLocalePath();
  const userStore = useUserStore();

  if (!userStore.isAuthorized) return localePath({ name: 'authentication-sign-in' });
});
