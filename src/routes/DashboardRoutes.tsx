import DashboardLayout from '../layouts/DashboardLayout';

import HomePage from '../pages/Main/Home';

const MainRoutes = {
    path: '/dashboard/',
    element: <DashboardLayout />,
    children: [
        {
            path: '/dashboard/',
            element: <HomePage />
        },
        {
            path: '/dashboard/donates',
            element: <HomePage />
        },
        {
            path: '/dashboard/settings',
            element: <HomePage />
        },
        {
            path: '/dashboard/page',
            element: <HomePage />
        },
    ]
};

export default MainRoutes;
