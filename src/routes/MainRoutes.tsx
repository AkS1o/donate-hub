import MainLayout from '../layouts/MainLayout';

import HomePage from '../pages/Main/Home';
import AboutPage from '../pages/Main/About';
import FAQPage from '../pages/Main/FUQ';

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/home',
            element: <HomePage />
        },
        {
            path: '/about',
            element: <AboutPage />
        },
        {
            path: '/faq',
            element: <FAQPage />
        },
    ]
};

export default MainRoutes;
