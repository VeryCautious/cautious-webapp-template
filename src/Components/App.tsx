import { RouterProvider } from 'react-router-dom';
import { useIsAuthenticated } from '@azure/msal-react';
import { Login } from './Login';
import { router } from './Router';
import type { FC } from 'react';

export const App: FC = () => {
  const authenticated = useIsAuthenticated();

  if (!authenticated) {
    return <Login />;
  }

  return (
    <div className='w-100 h-100 m-0 p-0'>
      <RouterProvider router={router} />
    </div>
  );
};
