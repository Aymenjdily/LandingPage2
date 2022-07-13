import React from 'react'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Image from '../../components/Image/Image'
import Pricing from '../../components/Pricing/Pricing'
import Social from '../../components/Social/Social'
import Subscribe from '../../components/Subscribe/Subscribe'
import Copyright from '../../components/Copyright/Copyright'

const Layout = () => {
  return (
    <div className='container layout py-5 my-md-5 col-12 col-md-12 col-xxl-5'>
        <Header
          titleOne='Earnings Call'
          span=' highlights'
          titleTwo=' delivered to your inbox.'
        />
        <About
          AboutTitle='how it works?'
          AboutPara='Our ai-powered tool reduces earnings call transcripts from companies you follow by 70-90%. It keeps all the important parts, divides them into chunks for easy consumption, and delivers to your inbox.'
        />
        <Image/>
        <Pricing
          PricingTitle='Pricing'
          PriceOne='Free for up to 40 earnings calls a year.'
          PriceTwo='$120/year for unlimited earnings calls.'
          PriceThree='$300/year for access to the historical data.'
        />
        <Subscribe
          SubscirbeTitle='join waitlist'
          SubscribeDesc='We’ll be rolling out invites soon.
          Be the first to know when we launch.'
          btn='join waitlist'
          SubscribeText='We use Mailchimp to collect emails. No spam. Unsubscribe anytime.
          '
        />
        <Social
          SocialTitle='reach out'
        />
        <Footer
          FooterTitle='disclaimer'
          FooterDesc='Earningscall.ai is not a registered investment adviser. Under no circumstances does any information on the Earningscall.ai constitute a recommendation to buy or sell a security, nor does it give investment advice. Including any publications or articles on Earningscall.ai. Earningscall.ai is a tool to be used by its subscribers in conjunction with the subscribers’ additional research and due diligence. We cannot guarantee the accuracy of any data on Earningscall.ai.'
          link1='Terms'
          link2='Privacy'
          link3='Disclaimer'
          link4='Contact us'
        />
        <Copyright
          copyright="&copy; all right reserved. aymen jdily 2022"
        />
    </div>
  )
}

export default Layout