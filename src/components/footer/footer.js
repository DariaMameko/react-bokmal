/* eslint-disable */

import React from 'react'
import FooterForm from './footer-form';
import FooterIcons from './footer-icons';
import FooterText from './footer-text';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <FooterForm/>
        <FooterIcons/>
        <FooterText/>
      </footer>
    )
  }
}

export default Footer;