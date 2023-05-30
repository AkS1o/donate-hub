import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import DrawerHeader from '../DrawerHeader';
import Nav from './Nav';

import { generalList, profileList } from './config';

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

interface DrawerProps extends MuiDrawerProps {
    open?: boolean;
    drawerWidth: number;
}

const DrawerStyled = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})<DrawerProps>(({ theme, open, drawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme, drawerWidth),
        '& .MuiDrawer-paper': openedMixin(theme, drawerWidth),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}),
);

interface Props {
    open: boolean
    drawerWidth: number;
}

const Drawer = (props: Props) => {
    const { open, drawerWidth } = props;

    return (
        <DrawerStyled variant="permanent" open={open} drawerWidth={drawerWidth}>
            <DrawerHeader />
            <Divider />

            <Nav lists={[generalList, profileList]} open={open}/>
        </DrawerStyled>
    )
}

export default Drawer;
