import '../style/intro.css'
// import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <div className="intro">
            {/* <img src="../assets/shape-2.png" alt="shape2" /> */}
            <div className="intro_shape2">
                <div className="intro_content">
                    <h3>JOIN OUR ADVENTURE</h3>
                    <p>Camping with<br />friends gives joy</p>
                    <button id='more_btn'>DISCOVER MORE</button>
                </div>
            </div>

            <div className="intro_shape1" >
                <img src="../assets/shape-1.png" alt="shape1" style={{ width: '100%' }} />
            </div>
        </div>
    )
}

export default Intro    