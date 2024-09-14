import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from './services/query';
import { appRoutes } from './routes/appRoutes';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

const App = () => {
  const router = createBrowserRouter([...appRoutes]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <SignUp />
    </QueryClientProvider>
  );
};

export default App;
