import React from 'react'
import {FaTwitter,FaFacebookF} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Social = (props) => {
  return (
    <div className='row col-12 container social py-5'>
        <div className='p-sm-5 container'>
            <h4>
                {props.SocialTitle}
            </h4>
            <div className='social-container mt-5'>
                <div>
                    <FaTwitter 
                    className='social-icon p-3 '/>
                </div>
                <div>
                    <FaFacebookF 
                    className='social-icon p-3 mx-4'/>
                </div>
                <div>
                    <MdEmail 
                    className='social-icon p-3 '/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Social