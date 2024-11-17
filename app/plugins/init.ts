export default defineNuxtPlugin(async () => {
  const userStore = useUserStore();

  await useAsyncData(async () => {
    await userStore.autologin();
    return true;
  });
});
