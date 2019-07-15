/* eslint-disable */

import React from 'react'
import '../../assets/styles/main.scss'

const MainMenu = () => {
  return (
    <nav className="menu-wrapper">
      <input type="checkbox" className="menu-ticker" id="btn"/>
      <label className="menu-button" htmlFor="btn">
        <div className="menu-button__image"></div>
      </label>
      <ul className="menu">
        <li className="menu-item">
          <a className="menu-item_link link" href="#">ГОЛОВНА</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link link" href="#">ТОП</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link link" href="#">ОГЛЯДИ</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link link" href="#">КОРИСНІ СТАТТІ</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link link" href="#">НОВИНИ</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link link" href="#">АВТОРСЬКА КОЛОНКА</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link link" href="#">ІНТЕРАКТИВ</a>
        </li>
        <li className="menu-item">
          <a className="menu-item_link link" href="#">ЛІТКЛУБ</a>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu;