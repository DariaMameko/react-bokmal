/* eslint-disable */

import React from 'react'
import MainMenuRed from '../main-menu/main-menu-red'
import Content from './content'
import '../../assets/styles/main.scss'

const MainBlockRed = () => {
  const cards = [
    {
      src: '../../assets/images/card1.jpg', 
      date: '10/01/2017', 
      looks: 980, 
      head: 'Найкращі дитячі ілюстратори незалежної України',
      header: 'Корисні статті'
    },
    {
      src: '../../assets/images/card2.jpg', 
      date: '09/28/2017', 
      looks: 145, 
      head: 'Вихідні з дітьми: 9-10 вересня',
      header: 'Афіша'
    },
    {
      src: '../../assets/images/card3.jpg', 
      date: '11/22/2017', 
      looks: 2045, 
      head: 'Літклуб Букмоль: розклад на квітень',
      header: 'Літклуб'
    },
    {
      src: '../../assets/images/card4.jpg', 
      date: '06/13/2017', 
      looks: 2045, 
      head: 'Поміж сірих сутінків Ріти Шупітс: на противагу зброї',
      header: 'Огляди'
    },
    {
      src: '../../assets/images/card5.jpg', 
      date: '03/19/2017', 
      looks: 3045, 
      head: 'У столиці запустили соціальний проект Київ читає',
      header: 'Новини'
    },
    {
      src: '../../assets/images/card6.jpg', 
      date: '10/01/2017', 
      looks: 6345, 
      head: '12 фільмів для дітей, знятих за мотивами книжок',
      header: 'Фільми'
    },
    {
      src: '../../assets/images/card7.jpg', 
      date: '09/22/2017', 
      looks: 980, 
      head: 'Найкращі дитячі ілюстратори незалежної України',
      header: 'Корисні статті'
    },
    {
      src: '../../assets/images/card8.jpg', 
      date: '09/28/2017', 
      looks: 145, 
      head: 'Вихідні з дітьми: 9-10 вересня',
      header: 'Афіша'
    },
    {
      src: '../../assets/images/card9.jpg', 
      date: '11/08/2017', 
      looks: 2045, 
      head: 'Літклуб Букмоль: розклад на квітень',
      header: 'Літклуб'
    }
  ];

  let newLooks = cards.slice();

  let newDate = cards.slice();

  const cardsLooks = newLooks.sort(function(a, b){
    return b.looks - a.looks
  });

  const cardsDate = newDate.sort(function(a, b){
    a = new Date(a.date);
    b = new Date(b.date)
    return b - a
  });

  return (
    <div className='main'>
      <MainMenuRed/>
      <Content arrayLooks={cardsLooks} arrayDate={cardsDate}/>
    </div>
  )
}

export default MainBlockRed;