import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const Navbar = () => {

  return (
    <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="dashboard">
            <NavIcon>
                <HomeIcon />
            </NavIcon>
            <NavText>
                Dashboard
            </NavText>
        </NavItem>
        <NavItem eventKey="notifications">
            <NavIcon>
                <NotificationsIcon />
            </NavIcon>
            <NavText>
                Notifications
            </NavText>
        </NavItem>
        <NavItem eventKey="views">
            <NavIcon>
              <SearchIcon />
            </NavIcon>
            <NavText>
                Views
            </NavText>
        </NavItem>
        <NavItem eventKey="profile">
            <NavIcon>
                <AccountCircleIcon />
            </NavIcon>
            <NavText>
                Profile
            </NavText>
            <NavItem eventKey="profile/editprofile">
                <NavText>
                    Edit profile
                </NavText>
            </NavItem>
            <NavItem eventKey="profile/settings">
                <NavText>
                    Settings
                </NavText>
            </NavItem>
            <NavItem eventKey="profile/signout">
                <NavText>
                    Sign out
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
  );
};

export const Logo = () => {
  return (
    <div className="logo m-4">
      <a href="https://www.moma.org/" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Museum_of_Modern_Art_logo.svg" alt="MoMA logo" height="50" />
      </a>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/volivers/" target="_blank"><i className="fa fa-fw fa-linkedin" style={{ fontSize: '1.75em' }}></i></a>
        <a href="https://github.com/volivers" target="_blank"><i className="fa fa-fw fa-github" style={{ fontSize: '1.75em' }}></i></a>
        <a href="https://dribbble.com/volivers" target="_blank"><i className="fa fa-fw fa-dribbble" style={{ fontSize: '1.75em' }}></i></a>
      </div>

      <div className="footer-copyright">
        <p>Vasco Oliveira © {new Date().getFullYear()}</p>
      </div>
    </div>

  );
};
