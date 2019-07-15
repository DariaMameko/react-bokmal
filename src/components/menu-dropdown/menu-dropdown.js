/* eslint-disable */

import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../assets/styles/main.scss'


class MenuDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = { isChecked: false }
  }

  getChecked () {
    let element = document.getElementById('hmt');
    if (element.checked == true) {
      let chilEl = document.getElementById('dropdown-button');
      chilEl.innerHTML = 'Для всіх &#9650;';
    } else {
      let chilEl = document.getElementById('dropdown-button');
      chilEl.innerHTML = 'Для всіх &#9660;'
    }
  }

  render() {
    return (
      <div>
        <input type="checkbox" id="hmt" className="header-ticker" onChange={this.getChecked} />
        <label className="header-button" htmlFor="hmt">
          <ul className="header-menu menu_theme_all menu_theme_baby">
            <li className="header-menu-item  menu_theme_all-item">
              <a id="dropdown-button" className="header-menu-item__link header-menu-dropdown-item__link 
              menu_theme_all-item__link link" href="#">
                Для всіх &#9660;
              </a>
            </li>
          </ul>
        </label>
        <ul className="header-menu_dropdown header-menu">
          <li className="header-menu_dropdown-item">
            <NavLink className="header-menu_dropdown__link header-menu_dropdown__link_yellow" exact to='/'>
              ДЛЯ УСІХ
            </NavLink>
          </li>
          <li className="header-menu_dropdown-item">
            <NavLink className="header-menu_dropdown__link" to='/child'>
              BABY SIDE
            </NavLink>
          </li>
          <li className="header-menu_dropdown-item">
            <NavLink className="header-menu_dropdown__link" to='/teen'>
              TEEN SIDE
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuDropdown;