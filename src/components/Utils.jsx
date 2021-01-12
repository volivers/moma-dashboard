import React from 'react';
// import './Utils.scss';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

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
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Dashboard
            </NavText>
        </NavItem>
        <NavItem eventKey="notifications">
            <NavIcon>
                <i className="fa fa-fw fa-bell" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Notifications
            </NavText>
        </NavItem>
        <NavItem eventKey="views">
            <NavIcon>
                <i className="fa fa-fw fa-search" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Views
            </NavText>
        </NavItem>
        <NavItem eventKey="settings">
            <NavIcon>
                <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }}></i>
            </NavIcon>
            <NavText>
                Profile
            </NavText>
            <NavItem eventKey="settings/editprofile">
                <NavText>
                    Edit profile
                </NavText>
            </NavItem>
            <NavItem eventKey="settings/settings">
                <NavText>
                    Settings
                </NavText>
            </NavItem>
            <NavItem eventKey="settings/signout">
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
