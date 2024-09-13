import AppLayout from '../layouts/AppLayout';
import Applications from '../pages/application/Applications';
import Jobs from '../pages/jobs/Jobs';
import Offers from '../pages/offers/Offers';
import PageNotFound from '../pages/NotFound/PageNotFound';
import Profile from '../pages/profile/Profile';
import Error from '../components/error/Error';
import Login from '../components/auth/Login';
import { Navigate } from 'react-router-dom';
import SignUp from '../components/auth/SignUp';

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
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            element: <SignUp />,
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
