import '../style/couverture.css'

const Couverture = ({title}) => {
    return (
        <div className='couverture'>
            <h2>{title}</h2>
            <img className='couverture_img1' src="../assets/couverture.jpg" alt="couverture_img" />
            <img className='couverture_img2' src="../assets/whitelongshape.png" alt="shape1_img" />
        </div>
    )
}

export default Couverture