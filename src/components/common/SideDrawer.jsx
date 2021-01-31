import React from 'react';
import Logo from './Logo';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useTheme } from '@material-ui/core/styles';
import useStyles from '../../styles/SideDrawerStyles';

const SideDrawer = ({ users }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <nav className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
      <Toolbar className="toolbar-drawer">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        {users.map(user => {
          return(
            <p key={user.id}>Hello, {user.userName}.</p>
          );
        })}
        <Logo />
      </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
          <ListItem button key='Dashboard'>
            <ListItemIcon className="list-icon"><DashboardIcon /></ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ListItem button key='Notifications'>
            <ListItemIcon className="list-icon"><NotificationsIcon/></ListItemIcon>
            <ListItemText primary='Notifications' />
          </ListItem>
          <ListItem button key='Settings'>
            <ListItemIcon className="list-icon"><SettingsIcon /></ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
          <ListItem button key='Profile'>
            <ListItemIcon className="list-icon"><AccountCircleIcon /></ListItemIcon>
            {users.map(user => {
              return(
                <ListItemText primary={user.userName} />
              );
            })}
          </ListItem>
        </List>
        <div className="detail-item">
          <img src="https://www.iloveny.com/includes/public/assets/images/svg/logo.svg" alt="NY logo" height="150" width="72" className="trademark"/>
        </div>
      </Drawer>
    </nav>
  );
};

export default SideDrawer;