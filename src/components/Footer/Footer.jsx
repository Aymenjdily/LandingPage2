import React from 'react'

const Footer = (props) => {
  return (
    <div className='row col-12 container py-5 footer'>
        <div className='container p-sm-5'>
            <h4>
              {props.FooterTitle}
            </h4>
            <h6 className='my-5'>
              {props.FooterDesc}
            </h6>
            <div className='footer-links'>
                <a 
                href="#" 
                className='me-3'>
                  {props.link1}
                </a>
                <a 
                href="#" 
                className='mx-md-3'>
                  {props.link2}
                </a>
                <a 
                href="#" 
                className='mx-md-3'>
                  {props.link3}
                </a>
                <a 
                href="#" 
                className='mx-md-3'>
                  {props.link4}
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer