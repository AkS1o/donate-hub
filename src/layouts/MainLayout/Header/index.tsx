import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useMediaQuery, useTheme, styled, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const StyledLink = styled(RouterLink)(({ theme }) => ({
	textDecoration: 'none',
	color: 'inherit',
	marginRight: theme.spacing(2),
}));

const Header: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [openDrawer, setOpenDrawer] = React.useState(false);

	const toggleDrawer = () => {
		setOpenDrawer(!openDrawer);
	};

	const handleMenuLinkClick = () => {
		if (isMobile) {
			setOpenDrawer(false);
		}
	};

	const menuItems = [
		{ text: 'Home', link: '/home' },
		{ text: 'About', link: '/about' },
		{ text: 'FAQ', link: '/faq' },
	];

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					<StyledLink to="/">My Website</StyledLink>
				</Typography>
				{isMobile ? (
					<>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={toggleDrawer}
						>
							<MenuIcon />
						</IconButton>


						<Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
							<Box
								sx={{ width: 250 }}
								role="presentation"
							>
								<List>
									{menuItems.map((item, index) => (
										<ListItemButton
											key={index}
											component={RouterLink}
											to={item.link}
											onClick={handleMenuLinkClick}
										>
											<ListItemText primary={item.text} />
										</ListItemButton>
									))}
								</List>
							</Box>
						</Drawer>
					</>
				) : (
					<List>
						{menuItems.map((item, index) => (
							<StyledLink
								key={index}
								to={item.link}
							>
								{item.text}
							</StyledLink>
						))}
					</List>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
