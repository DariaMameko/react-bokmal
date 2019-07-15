/* eslint-disable */
import React from 'react';
import '../../assets/styles/main.scss'
import MenuDropdownRed from '../menu-dropdown/menu-dropdown-red';
import MenuInline from '../menu-inline/menu-inline';
import ButtonsWrapper from '../header-buttons/buttons-wrapper';

const initialState = {
  isMenuOpened: false,
};

class HeaderRed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  render() {
    return (
      <div className='header'>
        <div className="header-line_direction_right" >
          <div className="header-logo">
            <a className="header-logo__link" href="#"></a>
          </div>
        </div>
        <MenuDropdownRed/>
        <MenuInline/>
        <ButtonsWrapper/>
      </div>
    );
  }
}

export default HeaderRed;
