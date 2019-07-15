/* eslint-disable */


import React from 'react'

class FooterIcons extends React.Component {
  render() {
    return (
      <div className="footer-icons">
        <p className="footer__header">Ми є у соціальних мережах</p>
        <ul className="footer-menu">
          <li className="footer-menu-item">
            <a className="footer-menu-item-link">
              <img className="footer-menu-item__icon" src="../../assets/images/Facebook-color.svg"/>
            </a>
          </li>
          <li className="footer-menu-item">
            <a className="footer-menu-item-link">
              <img className="footer-menu-item__icon" src="../../assets/images/Twitter-color.svg"/>
            </a>
          </li>
          <li className="footer-menu-item">
            <a className="footer-menu-item-link">
              <img className="footer-menu-item__icon" src="../../assets/images/Instagram-color.svg"/>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default FooterIcons;