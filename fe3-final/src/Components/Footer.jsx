import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='companyFooter'>
        <p>Powered by</p>
        <img src="../public/pepega.png" alt='companyName'/>
        </div>  
  <div className='socialsFooter'>
  <p>Socials</p>
        <img src="../public/images/ico-facebook.png" alt='fb' style={{ cursor: "pointer" }}/>
        <img src="../public/images/ico-instagram.png" alt='insta' style={{ cursor: "pointer" }}/>
        <img src="../public/images/ico-tiktok.png" alt='tikitoki' style={{ cursor: "pointer" }}/>
        <img src="../public/images/ico-whatsapp.png" alt='wsp' style={{ cursor: "pointer" }}/>
           </div>
    </footer>
  )
}
export default Footer