/* eslint-disable */

import React from 'react'

class ThreeLineCard extends React.Component {
  render() {
    return (
      <div className="main-content-row row_fifth">
        <div className="row_fifth_content_wrapper">
          <h4 className="main-content-row__header row_fifth__header">АВТОРСЬКА КОЛОНКА</h4>
          <div className="main-content-row-text-block row_fifth-text-block">
            <div className="main-content-row-info-date images">
              <div className="main-content-row-calendar__button images-calendar__button"></div>
              <p className="images-calendar__date">09/24/2017</p>
              <div className="main-content-row-calendar__date images-looks__button"></div>
              <p className="images-looks__count">980</p>
            </div>
            <h2 className="main-content-row-text-block__head row_fifth__head red-fifth__line">
              Бути собою разом із Туве Янсон: 5 диваків Долини мумі-тролів
            </h2>
            <div className="main-content-row-read images-read">
              <div className="images-read__button">Читати</div>
              <div className="row_fifth__note images-read__note"></div>
            </div>
          </div>
        </div>
        <div className="main-content-row__image row_fifth__image"></div>
      </div>
    )
  }
}

export default ThreeLineCard;