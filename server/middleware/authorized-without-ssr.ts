export default defineEventHandler((event) => {
  const hasRefreshCookie = !!getCookie(event, 'refresh_token');

  if (hasRefreshCookie) {
    event.context.nuxt = event.context.nuxt || {};
    event.context.nuxt.noSSR = true;
  }
});
