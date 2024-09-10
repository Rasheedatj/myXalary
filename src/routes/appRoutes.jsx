import AppLayout from '../layouts/AppLayout';
import Applications from '../pages/Applications';
import Jobs from '../pages/Jobs';
import Offers from '../pages/offers';
import PageNotFound from '../pages/PageNotFound';
import Profile from '../pages/Profile';
import Error from '../ui/Error';

export const appRoutes = [
  {
    errorElement: <Error />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: '/',
            element: <Jobs />,
          },
          {
            path: 'jobs',
            element: <Jobs />,
          },
          {
            path: 'myapplications',
            element: <Applications />,
          },
          {
            path: 'offers',
            element: <Offers />,
          },
        ],
      },

      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
];
