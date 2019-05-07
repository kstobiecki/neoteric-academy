/**
 * Angular Router has problem with concatenated variables when building AOT bundle.
 * Working solution is to create variables with all the paths rather than importing from other modules and concatenating.
 * */

export const AppRoutes = {
  DEFAULT: '',
  OFFERS: 'offers',
  PLACE: ':place',
  TECHNOLOGY: ':technology',
  AUTH: 'auth',
  LOGIN: 'login',
  SIGNUP: 'signup',
  SINGLE_OFFER: ':single-offer',
};

export const AppRouterLinks = {
  DEFAULT: [AppRoutes.DEFAULT],
  LOGIN: [AppRoutes.AUTH, AppRoutes.LOGIN],
  SIGNUP: [AppRoutes.AUTH, AppRoutes.SIGNUP],
  PLACE: [AppRoutes.DEFAULT, AppRoutes.PLACE],
  TECHNOLOGY: [AppRoutes.DEFAULT, AppRoutes.PLACE, AppRoutes.TECHNOLOGY],  
  OFFERS: [AppRoutes.OFFERS],
  SINGLE_OFFER: [AppRoutes.OFFERS, AppRoutes.SINGLE_OFFER],
};

export const AppRouterUrls = {
  DEFAULT: `/${AppRoutes.DEFAULT}`,
  LOGIN: `/${AppRoutes.AUTH}/${AppRoutes.LOGIN}`,
  SIGNUP: `/${AppRoutes.AUTH}/${AppRoutes.SIGNUP}`,
  PLACE: `/${AppRoutes.DEFAULT}/${AppRoutes.PLACE}`,
  TECHNOLOGY: `/${AppRoutes.DEFAULT}/${AppRoutes.PLACE}/${AppRoutes.TECHNOLOGY}`,
  OFFERS: `/${AppRoutes.OFFERS}`,
  SINGLE_OFFER: `/${AppRoutes.DEFAULT}/${AppRoutes.SINGLE_OFFER}`,
};
