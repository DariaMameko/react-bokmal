/* eslint-disable */

import React from 'react'

class Card extends React.Component {
  render() {
    const {src, head, header, date, looks} = this.props;
    return (
      <div className="card">
        <h4 className="main-content-row__header card__header">{header}</h4>
        <img className="card__image" src={src}/>
        <div className="card-buttons images">
          <div className="main-content-row-calendar__button images-calendar__button"></div>
          <p className="images-calendar__date">{date}</p>
          <div className="main-content-row-calendar__date images-looks__button"></div>
          <p className="images-looks__count">{looks}</p>
        </div>
        <h3 className="card__text">{head}</h3>
        <div className="main-content-row-read__note images-read__note"></div>
      </div>
    )
  }
}

export default Card;