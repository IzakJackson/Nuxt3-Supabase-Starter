import { useUserSessionStore } from "@/stores/userSession";

export default defineNuxtRouteMiddleware((to) => {
  const userSession = useUserSessionStore();
  userSession.getUser();
  const authPages = ['signin', 'signup', 'forgot-password', 'password-reset'];
  const isAtAuthPage = authPages.includes(to.name as string);

  if (!userSession.user && !isAtAuthPage) {
    return navigateTo('/signin');
  } else if (userSession.user && isAtAuthPage) {
    return navigateTo('/')
  } else if (userSession.user && isAtAuthPage) {
    return navigateTo('/password-reset')
  }
});
