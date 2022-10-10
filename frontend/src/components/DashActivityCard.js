import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteActivity, updateActivity } from '../redux/slices/activitySlice';
import '../style/dashActCard.css';

const DashActivityCard = ({ el,i, ping, setPing }) => {

    const [imageBg, setImageBg] = useState({
        bgImg: "/assets/round-shape.png",
        iconImg: '/assets/adventure.png',
    });
    const [show, setShow] = useState(false);
    const [updatedAct, setUpdatedAct] = useState({});
    const handleActUpdate = (e) =>
        setUpdatedAct({
            ...updatedAct,
            [e.target.name]: e.target.value,
        });
    const dispatch = useDispatch();
    return (
        <div className='card_container'>
            <div className='card_content'>
                <img src={el?.url} alt="adventure_img" />
                <div className='card_content_parag'>
                    <h3>{el?.title}</h3>
                    <p>{el?.description?.split('.').map(el => el).slice(0, 2).join('.')}</p>
                    {/* <Link to={`/description/${el?._id}`} state={el} style={{ fontWeight: 'bold', color: 'black', fontFamily: `'Rubik', sans-serif` }}>Read more</Link> */}
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
            <div className='card_btns'>
                <button id='editCard_btn'
                    onClick={() => setShow(!show)}>
                    <svg strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="#FFFFFF" height="22" width="22" viewBox="0 0 24 21">
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                </button>
                <button id='deleteCard_btn'
                    onClick={() => { dispatch(deleteActivity({ id: el?._id, deleteActivity })); setPing(!ping) }}
                >x</button>
            </div>
            <div className='edit_activity_content'>
                {(show) &&
                    <div className='edit_activity'>
                        <input type="text" name='url' defaultValue={el.url}
                            onChange={(e) => handleActUpdate(e)} />
                        <input type="text" name='url_icon' defaultValue={el.url_icon}
                            onChange={(e) => handleActUpdate(e)} />
                        <input type="text" name='title' defaultValue={el.title}
                            onChange={(e) => handleActUpdate(e)} />
                        <textarea name="description" cols="30" rows="10"
                            defaultValue={el.description}
                            onChange={(e) => handleActUpdate(e)} />
                        <div className='editBtn'>
                            <button id='done_btn' onClick={() => 
                            { dispatch
                                (updateActivity({ id: el._id, activity: updatedAct }));
                            setPing(!ping);
                            setShow(!show) }}
                            >Done</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default DashActivityCard