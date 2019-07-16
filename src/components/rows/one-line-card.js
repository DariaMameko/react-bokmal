/* eslint-disable */

import React from 'react'

class OneLineCard extends React.Component {
  render() {
    return (
      <div className="content-row row_first">
        <div className="content-row__image row_first__image"></div>
        <div className="row_first__content">
          <h4 className="content-row__header row_first__header">ОГЛЯДИ</h4>
          <div className="content-row-text-block row_first-text-block">
            <div className="content-row-info-date images">
              <div className="content-row-calendar__button images-calendar__button"></div>
              <p className="images-calendar__date">Сьогодні</p>
              <div className="content-row-calendar__date images-looks__button"></div>
              <p className="images-looks__count">8129</p>
            </div>
            <h2 className="content-row-text-block__head main-image__text content_red_line">
              Шість пригодницьких історій для літнього читання
            </h2>
            <div className="content-row-read images-read">
              <div className="images-read__button">Читати</div>
              <div className="row_first__note images-read__note"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OneLineCard;