/* eslint-disable */
import React from 'react';
import NoteButton from './note-button'
import SearchButton from './search-button'
import '../../assets/styles/main.scss'

const ButtonsWrapper = () => {
  return(
    <div className='header-images'>
      <SearchButton/>
      <NoteButton/>
    </div>
  )
}

export default ButtonsWrapper;
