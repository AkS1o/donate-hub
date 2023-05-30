import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';

interface Item {
    title: string;
    url: string;
    icon: React.ReactNode;
}

interface IList {
    title: string;
    children: Item[];
}

interface Props {
    lists: IList[];
    open: boolean;
}

const Nav = (props: Props) => {
    const { lists, open } = props;
    return (
        <>
            {lists.map((item, index) => (
                <List key={index}>

                    {open ? (
                        <ListSubheader> {item.title}</ListSubheader>
                    ) : (
                        index !== 0 ? <Divider sx={{ margin: '0 15px' }} /> : <></>
                    )}

                    {item.children.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                component={"a"}
                                href={item.url}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List >
            ))}
        </>
    )
}

export default Nav;
