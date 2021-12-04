import React from 'react'
import logo from '../../logo.svg';
import './AppHeader.css'
import HeaderMenuItem from './HeaderMenuItem';

const AppHeader = () => {
  const menuItems = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Create Team",
      route: "/create"
    },
    {
      name: "My Teams",
      route: "/teams"
    }
  ]
  return (
    <header>
      <nav>
        <img src={logo} alt='company-logo' className="App-logo" />
        <ul>
          {menuItems.map( (item, index) => (<HeaderMenuItem key={index} text={item.name} route ={item.route} />) )}
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader
