import React from 'react'

const Subscribe = (props) => {
  return (
    <div className='row col-12 container subscribe py-5'>
        <div className='container p-sm-5'>
            <h4>
              {props.SubscirbeTitle}
            </h4>
            <p className='w-75 mt-5'>
              {props.SubscribeDesc}
            </p>
            <form className='my-5'>
                <input 
                className='p-4' 
                placeholder='email addres'/>
                <button className='mt-4 p-4'>
                  {props.btn}
                </button>
            </form>
            <h6>
              {props.SubscribeText}
            </h6>
        </div>
    </div>
  )
}

export default Subscribe