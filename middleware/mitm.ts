export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`Routing: ${from.path} -> ${to.path}`);
  return navigateTo(to);
});
