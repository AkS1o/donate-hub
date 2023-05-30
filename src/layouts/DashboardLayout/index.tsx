import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';

import Header from './Header';
import Drawer from './Drawer';
import DrawerHeader from './DrawerHeader';

const drawerWidth = 240;
const DashboardLayout = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Header handleClick={handleDrawerClick} open={open} drawerWidth={drawerWidth} />
            <Drawer open={open} drawerWidth={drawerWidth} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Outlet/>
            </Box>
        </Box>
    );
}

export default DashboardLayout;
