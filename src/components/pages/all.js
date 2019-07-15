/* eslint-disable */

import React from 'react';
import MainBlock from '../main/main';
import Header from '../header/header';
import Footer from '../footer/footer';
import '../../assets/styles/main.scss';

class AllPage extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <MainBlock/>
        <Footer/>
      </div>
    )
  }
}

export default AllPage;