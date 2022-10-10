import { useState } from 'react'
import { Link } from 'react-router-dom'

const ActivitiesCard = ({el}) => {
    const [imageBg, setImageBg] = useState({
        bgImg: "/assets/round-shape.png",
        iconImg: '/assets/adventure.png',
    })
    return (
        <div className='card_container'>
            <div className='card_content'>
                <img src={el?.url} alt="adventure_img" />
                <div className='card_content_parag'>
                    <h3>{el?.title}</h3>
                    <p>{el?.description?.split('.').map(el => el).slice(0, 2).join('.')}</p>
                    <Link to={`/description/${el?._id}`} state={el} style={{ fontWeight: 'bold', color: 'black', fontFamily: `'Rubik', sans-serif` }}>Read more</Link>
                </div>
            </div>
            <div className='card-icon'
                onMouseEnter={() => setImageBg({ bgImg: "/assets/yelloshape.png", iconImg: '/assets/climb.png' })}
                onMouseLeave={() => setImageBg({
                    bgImg: "/assets/round-shape.png",
                    iconImg: '/assets/adventure.png',
                })}>
                <img className='activityIcon_bg'
                    src={`${imageBg.bgImg}`}
                    alt="ufhjd" />
                <img className='activityIcon'
                    src={el?.url_icon} alt="adventure_icon"
                    style={(imageBg?.bgImg === "/assets/yelloshape.png") ? { filter: 'invert(1)' } : null} />
            </div>
        </div>
    )
}

export default ActivitiesCard