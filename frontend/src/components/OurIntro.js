import '../style/ourIntro.css'

const OurIntro = () => {
    return (
        <div className='our_intro'>
            <div className='our_intro-about'>
                <img src="../assets/about-1.jpg" alt="about_img" />
            </div>
            <div className='our_intro-container'>
                <h2>OUR INTRODUCTION</h2>
                <h3>Welcome to Camp of Summers</h3>
                <div className='our_intro-content display'>
                    <img src="../assets/camping.png" alt="camping" />
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='our_intro-content-points'>
                    <div className='content_phrase display'>
                        <img src="../assets/check.png" alt="check" />
                        <p>Refreshing to get such a personal touch.</p>
                    </div>
                    <div className='content_phrase display'>
                        <img src="../assets/check.png" alt="check" />
                        <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                    </div>
                    <div className='content_phrase display'>
                        <img src="../assets/check.png" alt="check" />
                        <p>Refreshing to get such a personal touch.</p>
                    </div>
                </div>
                <button id='about_btn'>DISCOVER MORE</button>
            </div>
        </div>
    )
}

export default OurIntro