/* eslint-disable */
import React from 'react'
import DateButton from '../content-buttons/date-button'
import LookButton from '../content-buttons/look-button';
import ReadButton from '../content-buttons/read-button';
import OneLineCard from '../rows/one-line-card';
import Card from '../card/card';
import TwoLineCard from '../rows/two-line-card';
import ThreeLineCard from '../rows/three-line-card';
import NewCard from '../rows/seven-line-card';
import '../../assets/styles/main.scss';


class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isDate: false,
      isLooks: false,
      isActiveDate: false,
      isActiveLooks: false
    }
  }

  render(){
    const {arrayLooks, arrayDate} = this.props;

    const elements2 = arrayLooks.map((item) => {
      return(
        <Card
          src={item.src}
          header={item.header}
          date={item.date}
          looks={item.looks}
          head={item.head}
        />
      )
    });

    const elements1 = arrayDate.map((item) => {
      return(
        <Card
          src={item.src}
          header={item.header}
          date={item.date}
          looks={item.looks}
          head={item.head}
        />
      )
    });

    const setDate = () => {
      this.setState({isDate: true});
      this.setState({isLooks: false});
      if(this.state.isLooks === true) {
        document.getElementById('looksLink').style.color = '#837f89';
        document.getElementById('dateLink').style.color = 'black';
      }
    }

    const setLooks = () => {
      this.setState({isLooks: true});
      this.setState({isDate: false});

      if(this.state.isLooks === false) {
        document.getElementById('looksLink').style.color = 'black';
        document.getElementById('dateLink').style.color = '#837f89';
      }
    }

    return (
      <div className='content'>
        <div className="main-image">
          <div className="main-image-content">
            <h4 className="main-image__text_yellow">КОРИСНІ СТАТТІ</h4>
            <h1 className="main-image__text">Тварини Патріка Джорджа:<br/>врятуй їх усіх</h1>
            <div className="main-image-buttons images">
              <DateButton/>
              <p className="main-image__date images-calendar__date">1 Жовтня, 2017</p>
              <LookButton/>
              <p className="main-image__count images-looks__count">980</p>
            </div>
            <ReadButton/>
          </div>
        </div>
        <ul className="main-content-sort">Сортувати за:
          <li className="main-content-sort-item" id="looksLink" onClick={setLooks}>
            <a className="main-content-sort-item__link link" href="#">Популярністю</a>
          </li>
          <li className="main-content-sort-item" id="dateLink" onClick={setDate}>
            <a className="main-content-sort-item__link link" href="#">Новизною</a>
          </li>
        </ul>
        <OneLineCard/>
        <div className="main-content-row main-content-card row_second">
          {this.state.isDate ? elements1.slice(0, 3) : elements2.slice(0, 3)}
        </div>
        <TwoLineCard/>
        <div className="main-content-row main-content-fourth-card row_fourth">
          <h4 className="card__header_main">TEEN REVIEW</h4>
          <div className="row_fourth_wrapper_content">
            {this.state.isDate ? elements1.slice(3, 6) : elements2.slice(3, 6)}
          </div>
        </div>
        <ThreeLineCard/>
        <div className="main-content-row main-content-card row_sixth">
          {this.state.isDate ? elements1.slice(6, 9) : elements2.slice(6, 9)}
        </div>
        <NewCard/>
      </div>
    )
  }
}
export default Content;

