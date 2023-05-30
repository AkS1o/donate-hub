import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
    drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
    width: `calc(100% - ${theme.spacing(7)} + 1px)`,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

interface Props {
    open: boolean
    handleClick: () => void;
    drawerWidth: number;
}

const Header = (props: Props) => {
    const { handleClick, open, drawerWidth } = props;

    return (
        <AppBar position="fixed" open={open} drawerWidth={drawerWidth} >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleClick}
                    edge="start"
                    sx={{
                        marginRight: 5,
                    }}
                >
                    {open === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Donate Hub
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
