import { Navigate } from 'react-router-dom';

import AppLayout from '../layouts/appLayout/AppLayout';
import JobLayout from '../layouts/jobLayout/JobLayout';
import Applications from '../pages/Applications';
import Jobs from '../pages/Jobs';
import Offers from '../pages/Offers';
import PageNotFound from '../pages/PageNotFound';
import Profile from '../pages/profile/Profile';
import Error from '../components/error/Error';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';

export const appRoutes = [
  {
    errorElement: <Error />,
    children: [
      {
        // layout that contains header and footer
        element: <AppLayout />,
        children: [
          // layout that contains sidebar, search bar and jod description
          {
            element: <JobLayout />,
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
