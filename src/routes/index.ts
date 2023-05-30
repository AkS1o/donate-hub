import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import DashboardRoutes from './DashboardRoutes';

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, DashboardRoutes]);
}
