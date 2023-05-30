import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import SettingsIcon from '@mui/icons-material/Settings';
import TvIcon from '@mui/icons-material/Tv';

export interface Item {
    title: string;
    url: string;
    icon: React.ReactNode;
}

export interface List {
    title: string;
    children: Item[];
}

export const generalList: List = {
    title: 'General',
    children: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: <DashboardIcon />
        },
        {
            title: 'Donates',
            url: '/dashboard/donates',
            icon: <AttachMoneyIcon />
        },
    ]
}

export const profileList: List = {
    title: 'Profile',
    children: [
        {
            title: 'Settings',
            url: '/dashboard/settings',
            icon: <SettingsIcon />
        },
        {
            title: 'Page',
            url: '/dashboard/page',
            icon: <TvIcon />
        },
    ]
}