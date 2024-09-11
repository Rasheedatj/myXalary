import AppLayout from '../layouts/AppLayout';
import Applications from '../pages/application/Applications';
import Jobs from '../pages/jobs/Jobs';
import Offers from '../pages/offers/Offers';
import PageNotFound from '../pages/NotFound/PageNotFound';
import Profile from '../pages/profile/Profile';
import Error from '../ui/error/Error';
import { Navigate } from 'react-router-dom';

export const appRoutes = [
  {
    errorElement: <Error />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: '/',
            element: <Navigate to='jobs' />,
          },

          {
            path: 'jobs',
            element: <Jobs />,
            children: [
              {
                path: ':jobId',
                element: <Jobs />,
              },
            ],
          },

          {
            path: 'applications',
            element: <Applications />,
            children: [{ path: ':jobId', element: <Applications /> }],
          },
          {
            path: 'offers',
            element: <Offers />,
            children: [
              {
                path: ':jobId',
                element: <Offers />,
              },
            ],
          },
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },

      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
];
