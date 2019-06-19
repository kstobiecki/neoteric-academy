/**
 * Angular Router has problem with concatenated variables when building AOT bundle.
 * Working solution is to create variables with all the paths rather than importing from other modules and concatenating.
 * * */

export const AppRoutes = {
  DEFAULT: 'offers',
  NEW_OFFER: 'new_offer',
  UPDATE_OFFER: 'update_offer',
  BRANDS: 'brands',
  AUTH: 'auth',
  LOGIN: 'login',
  SIGNUP: 'signup'
};

export const AppRouterLinks = {
  DEFAULT: [AppRoutes.DEFAULT],
  NEW_OFFER: [AppRoutes.NEW_OFFER],
  UPDATE_OFFER: [AppRoutes.UPDATE_OFFER],
  BRANDS: [AppRoutes.BRANDS],
  LOGIN: [AppRoutes.AUTH, AppRoutes.LOGIN],
  SIGNUP: [AppRoutes.AUTH, AppRoutes.SIGNUP],
};

export const AppRouterUrls = {
  DEFAULT: `/${AppRoutes.DEFAULT}`,
  NEW_OFFER: `/${AppRoutes.NEW_OFFER}`,
  UPDATE_OFFER: `/${AppRoutes.UPDATE_OFFER}`,
  BRANDS: `/${AppRoutes.BRANDS}`,
  LOGIN: `/${AppRoutes.AUTH}/${AppRoutes.LOGIN}`,
  SIGNUP: `/${AppRoutes.AUTH}/${AppRoutes.SIGNUP}`,
};
