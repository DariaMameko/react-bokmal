/* eslint-disable */

import React from 'react'
import '../../assets/styles/main.scss'

const MainMenu = () => {
  return (
    <nav className="menu-wrapper menu-wrapper_red" id='menu_main'>
      <input type="checkbox" className="menu-ticker" id="btn"/>
      <label className="menu-button menu-button_red" htmlFor="btn">
        <div className="menu-button__image" ></div>
      </label>
      <ul className="menu menu_red">
        <li className="menu-item menu-item__red">
          <a className="menu-item_link menu-item_link_red">ГОЛОВНА</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link menu-item_link_red">ТОП</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link menu-item_link_red">ОГЛЯДИ</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link menu-item_link_red">КОРИСНІ СТАТТІ</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link menu-item_link_red">НОВИНИ</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link menu-item_link_red">АВТОРСЬКА КОЛОНКА</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link menu-item_link_red">ІНТЕРАКТИВ</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link menu-item_link_red">ЛІТКЛУБ</a>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu;