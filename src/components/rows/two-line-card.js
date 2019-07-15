/* eslint-disable */

import React from 'react'

class TwoLineCard extends React.Component {
  render() {
    return (
      <div className="main-content-row row_third">
        <h4 className="main-content-row__header row_third__header">ПОРАДИ</h4>
        <div className="main-content-row__image row_third__image">
          <div className="main-content-row-text-block row_third-text-block">
            <div className="main-content-row-info-date images row_third__date">
              <div className="main-content-row-calendar__button images-calendar__button"></div>
              <p className="images-calendar__date">10/01/2017</p>
              <div className="main-content-row-calendar__date images-looks__button"></div>
              <p className="images-looks__count">2045</p>
            </div>
            <h2 className="main-content-row-text-block__head row_third__head red-third__line">
              Любий щоденнику: ваш <br/> настільний психоаналітик
            </h2>
            <div className="main-content-row-read images-read">
              <div className="images-read__button">Читати</div>
              <div className="row_third__note images-read__note"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TwoLineCard;
