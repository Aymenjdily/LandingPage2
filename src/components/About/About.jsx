import React from 'react'

const About = (props) => {
  return (
    <div className='row col-12 about container py-5'>
        <div className='p-sm-5 container'>
            <h4>
              {props.AboutTitle}
            </h4>
            <p className='mt-4'>
              {props.AboutPara}
            </p>
        </div>
    </div>
  )
}

export default About