import { Navigate } from 'react-router-dom';
import Error from '../components/error/Error';
import ProtectedLayout from '../layouts/ProtectedLayout';
import Applications from '../pages/Applications';
import Jobs from '../pages/Jobs';
import Offers from '../pages/Offers';
import PageNotFound from '../pages/PageNotFound';
import Profile from '../pages/profile/Profile';

export const appRoutes = [
  {
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Navigate to='jobs' />,
      },

      {
        path: '/jobs',
        element: <Jobs />,
        children: [
          {
            path: ':jobId',
            element: <Jobs />,
          },
        ],
      },

      {
        element: <ProtectedLayout />,
        children: [
          {
            path: '/applications',
            element: <Applications />,
            children: [{ path: ':jobId', element: <Applications /> }],
          },
          {
            path: '/offers',
            element: <Offers />,
            children: [
              {
                path: ':jobId',
                element: <Offers />,
              },
            ],
          },
          {
            path: '/profile',
            element: <Profile />,
          },
        ],
      },

      {
        path: 'login',
        element: <div>Login</div>,
      },

      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
];
