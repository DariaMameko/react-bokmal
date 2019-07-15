/* eslint-disable */

import React from 'react'

class MenuInline extends React.Component {
  render() {
    return(
      <div className='header-menu-wrapper'>
        <ul className="header-menu menu_row">
          <li className="header-menu-item menu_row__item">
            <a className="header-menu-item__link menu_row__item_link link" href="#">Про Букмоль</a>
          </li>
          <li className="header-menu-item menu_row__item">
            <a className="header-menu-item__link menu_row__item_link link" href="#">Співпраця</a>
          </li>
          <li className="header-menu-item menu_row__item">
            <a className="header-menu-item__link menu_row__item_link link" href="#">Підтримка</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuInline;