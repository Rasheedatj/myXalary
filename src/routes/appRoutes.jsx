import AppLayout from '../layouts/AppLayout';
import Applications from '../pages/application/Applications';
import Jobs from '../pages/jobs/Jobs';
import Offers from '../pages/offers/Offers';
import PageNotFound from '../pages/NotFound/PageNotFound';
import Profile from '../pages/profile/Profile';
import Error from '../ui/error/Error';

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
            path: 'job/:job',
            element: <Jobs />,
          },
          {
            path: 'applications',
            element: <Applications />,
          },
          {
            path: 'offers',
            element: <Offers />,
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
