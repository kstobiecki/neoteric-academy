/**
 * Angular Router has problem with concatenated variables when building AOT bundle.
 * Working solution is to create variables with all the paths rather than importing from other modules and concatenating.
 * */

export const AppRoutes = {
  DEFAULT: 'offers',
  AUTH: 'auth',
  LOGIN: 'login',
  SIGNUP: 'signup',
};

export const AppRouterLinks = {
  DEFAULT: [AppRoutes.DEFAULT],
  LOGIN: [AppRoutes.AUTH, AppRoutes.LOGIN],
  SIGNUP: [AppRoutes.AUTH, AppRoutes.SIGNUP],
};

export const AppRouterUrls = {
  DEFAULT: `/${AppRoutes.DEFAULT}`,
  LOGIN: `/${AppRoutes.AUTH}/${AppRoutes.LOGIN}`,
  SIGNUP: `/${AppRoutes.AUTH}/${AppRoutes.SIGNUP}`,
};
