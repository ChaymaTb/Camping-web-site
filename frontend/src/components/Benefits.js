import '../style/benefits.css'

const Benefits = () => {
  return (
    <div className='benefits'>

      <div className='our_benefits'>
        <div className='our_benefits-img'>
          <img src="/assets/ben_chooseus-1.jpg" alt="img_benefits1" />
          <img src="/assets/ben_chooseus-2.jpg" alt="img_benefits2" />
        </div>
        <div className='our_benefits-content'>
          <div className='our_benefits-content-parag'>
            <h3>OUR BENEFITS</h3>
            <h4>Why Choose Us</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          </div>
          <div className='our_benefits-content-points'>
            <div className='points_content'>
              <img src="/assets/check.png" alt="" />
              <p>Private Cottages</p>
            </div >
            <div className='points_content'>
              <img src="/assets/check.png" alt="" />
              <p>Compact Trailers</p>
            </div>
            <div className='points_content'>
              <img src="/assets/check.png" alt="" />
              <p>Tents on Rent</p>
            </div>
          </div>
        </div>
      </div>

      <div className='benefits_register'>
        <div>
          <h3>SPEND A HAPPY WEEKEND</h3>
          <p>Aliq is notm hendr erit a augue insu image pellen tes. Aliquam erat volutpat.</p>
          <button id='dicover_btn'>DISCOVER MORE</button>
        </div>
        <div>
          <img src="/assets/ben_chooseus-3.jpg" alt="img_benefits3" />
        </div>
      </div>

    </div>
  )
}

export default Benefits