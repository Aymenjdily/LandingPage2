import React from 'react'

const Copyright = (props) => {
  return (
    <div className='row col-12 container copyright'>
        <div className='p-5 container'>
            <p>
              {props.copyright}
            </p>
        </div>
    </div>
  )
}

export default Copyright