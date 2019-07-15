/* eslint-disable */

import React from 'react';
import MainBlockRed from '../main/main-red';
import HeaderRed from '../header/header-red';
import Footer from '../footer/footer';
import '../../assets/styles/main.scss';

class ChildrenPage extends React.Component {
  render() {
    return(
      <div>
        <HeaderRed/>
        <MainBlockRed/>
        <Footer/>
      </div>
    )
  }
}

export default ChildrenPage;