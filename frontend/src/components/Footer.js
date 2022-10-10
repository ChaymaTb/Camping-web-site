import '../style/footer.css'

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer_about'>
        <h3> About</h3>
        <p>Proin est lacus, sagittis lobortis iaculis eget, iaculis nec purus. Cras faucibus fringilla orci in sollicitudin.</p>
        <div className='footer_about_icons'>
          <img src="/assets/facebook.png" alt="facebook_icon" />
          <img src="/assets/instagram.png" alt="instagram_icon" />
          <img src="/assets/twitter.png" alt="twitter_icon" />
          <img src="/assets/pinterest.png" alt="pinterest_icon" />
        </div>
      </div>

      <div className='footer_logo'>
        <img src="/assets/camp-logo.png" alt="footer_logo" />
        <p>CAMPING</p>
      </div>

      <div className='footer_newsletter'>
        <h3>Newsletter</h3>
        <p>Subsrcibe for our upcoming latest articles and news resources</p>
        <input type="text" name="Email adress" placeholder='Email adress' />
        <button className='footer_send-btn'>
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </div>
    </div>
  )
}

export default Footer