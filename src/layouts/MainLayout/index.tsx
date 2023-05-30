import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';

import Header from './Header';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Box
                component="main"
                sx={{
                    paddingTop: '24px',
                    paddingBottom: '24px',
                }}
            >
                <Outlet />
            </Box>
        </>
    );
}

export default MainLayout;
