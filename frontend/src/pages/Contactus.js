import Couverture from '../components/Couverture'
import '../style/contactUs.css'
import emailjs from 'emailjs-com'


const Contactus = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_h0kf6e8",
      "template_c0bp5o9",
      e.target,
      "W4J8JtGVuZRvqQN_A"
    ).then(res => { console.log(res); }).catch(err=>console.log(err));
  }
  return (
    <div>
      <Couverture title="Contact Us" />
      <div className='contactus' >

        <div className='contactus_intro'>
          <div className='intro_title'>
            <h2>CONTACT WITH US</h2>
            <h3>Drop a Message</h3>
            <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation.</p>
          </div>

          <div className='content_info'>
            <div className='contactus_email'>
              <img src="/assets/open.png" alt="" />
              <div className='info'>
                <h6>Send Email</h6>
                <p>info@example.com</p>
              </div>
            </div>
            <div className='line'></div>
            <div className='contactus_email'>
              <img src="/assets/phone.png" alt="" />
              <div className='info'>
                <h6>Call Anytime</h6>
                <p>+216 61 849 XXX</p>
              </div>
            </div>
          </div>
        </div>

        <form className='contact_inputs' onSubmit={sendEmail}>
          <input type="text" placeholder='Fullname' name='fullname' />
          <input type="text" placeholder='Email adress' name='email'/>
          <input type="text" placeholder='Phone number' name='phone'/>
          <input type="text" placeholder='Subject' name='subject' />
          <textarea name="content" cols="61" rows="10" placeholder='Write message'></textarea>
          <button className='submit_button'>SUBMIT MESSAGE</button>
        </form>

      </div>
    </div>
  )
}

export default Contactus