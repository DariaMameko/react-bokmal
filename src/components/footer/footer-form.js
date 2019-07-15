/* eslint-disable */

import React from 'react'

class FooterForm extends React.Component {
  render() {
    return(
      <div className="footer-form">
        <p className="footer__header">Підписуйтесь на новини від Букмоль</p>
        <form className="footer-form-wrapper">
          <input type="text" placeholder="E-Mail" className="footer-form__input"/>
          <button className="footer-form__button"></button>
        </form>
      </div>
    )
  }
}

export default FooterForm;