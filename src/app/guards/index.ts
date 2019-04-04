import { IsAuthenticatedGuard } from './is-authenticated.guard';
import { IsAuthenticatedOnLoginGuard } from './is-authenticated-on-login.guard';

export const CoreGuards = [
  IsAuthenticatedGuard,
  IsAuthenticatedOnLoginGuard,
];

export {
  IsAuthenticatedGuard,
  IsAuthenticatedOnLoginGuard,
};
