import AuthenticatedRoutes from './authenticatedRoutes';
import UnAuthenticatedRoutes from './unauthenticatedRoutes';

export const Routes = () => {
  const isAuthenticated = window.localStorage.getItem('accessToken');

  if (isAuthenticated) {
    return <AuthenticatedRoutes />;
  }
  return <UnAuthenticatedRoutes />;
};
