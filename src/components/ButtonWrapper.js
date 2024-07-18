import React from 'react'

function ButtonWrapper() {
  return (
    <div>
      <a title='search'
      className={'button search '}
      onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}>

      </a>
    </div>
  )
}

export default ButtonWrapper
