/* eslint-disable */

import React from 'react'
import Card from '../card/card'

class NewRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    }
  }
  render() {

    const {newArray} = this.props;
    const newElements = newArray.map((item) => {
      return(
        <Card
          src={item.src}
          header={item.header}
          date={item.date}
          looks={item.looks}
          head={item.head}
        />
      );
    })

    return (
      <div className='main-content-row main-content-card row_new' id='newRow'>
        {newElements.slice(0, 3)}
      </div>
    )
  }
}

export default NewRow;