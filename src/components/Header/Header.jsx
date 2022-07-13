import React from 'react'

const Header = (props) => {
  return (
    <div className='row col-12 header container '>
        <div className='header-container py-5 p-sm-5 container'>
          <h1>
            {props.titleOne}
            <span>
              {props.span}
            </span>
            {props.titleTwo}
          </h1>
        </div>
    </div>
  )
}

export default Header