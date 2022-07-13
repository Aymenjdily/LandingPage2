import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Pricing = (props) => {
  return (
    <div className='row col-12 pricing container py-5'>
        <div className='container p-sm-5'>
            <h4>
                {props.PricingTitle}
            </h4>
            <div className='pricing-container mt-5'>
                <div className='pricing-list d-flex'>
                    <div >
                        <MdKeyboardArrowRight 
                        className='pricing-icon p-1'/>
                    </div>
                    <div className='ms-3'>
                        <p>
                            {props.PriceOne}
                        </p>
                    </div>
                </div>
                <div className='pricing-list d-flex my-3'>
                    <div >
                        <MdKeyboardArrowRight 
                        className='pricing-icon p-1'/>
                    </div>
                    <div className='ms-3'>
                        <p>
                            {props.PriceTwo}
                        </p>
                    </div>
                </div>
                <div className='pricing-list d-flex'>
                    <div >
                        <MdKeyboardArrowRight 
                        className='pricing-icon p-1'/>
                    </div>
                    <div className='ms-3'>
                        <p>
                            {props.PriceThree}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing