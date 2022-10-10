import '../style/galleri.css'

const Gallerie = () => {
    return (
        <div className='galleri'>
            <div className='galleri_posts'>
                <h2>OUR PHOTOSHOTS</h2>
                <h3>OUR GALLERI</h3>
            </div>
            <div className='galleri_imgs'>
                <div className='gall_imgs'>
                    <img src="/assets/gall4.jpg" alt="galleri_img" />
                    <img src="/assets/gall2.jpg" alt="galleri_img" />
                    <img src="/assets/gall5.png" alt="galleri_img" />
                    <img src="/assets/gall6.jpg" alt="galleri_img" />
                </div>
                <img id='gall_img3' src="/assets/gall3.jpg" alt="galleri_img" />
                <img id='gall_img4' src="/assets/gall1.jpg" alt="galleri_img" />
            </div>
        </div>
    )
}

export default Gallerie