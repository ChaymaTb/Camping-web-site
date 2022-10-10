import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Couverture from '../components/Couverture'
import DashActivityCard from '../components/DashActivityCard';
import { addActivity } from '../redux/slices/activitySlice';
import '../style/activityDashb.css'

const ActivitiesDashb = ({ ping, setPing }) => {
    const activity = useSelector((state) => state?.activity?.activity);
    const [newActivity, setNewActivity] = useState({
        url:"/assets/act.jpg",
        url_icon:'/assets/surfing.png'
    });
    const handleActivity = (e) =>
        setNewActivity({
            ...newActivity,
            [e.target.name]: e.target.value,
        });
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    return (
        <div>
            <Couverture title='all/Activities' />
            <div className='activities_dashb'>
                <div className='create_newAct'>
                    <div className='btn'>
                        <button className='create_newAct_btn' onClick={() => setShow(!show)}>Add New Activity</button>
                    </div>
                    {(show) &&
                        <div className='add_activity'>
                            <input type="text" name="url" placeholder='url image'
                            defaultValue='/assets/act.jpg'
                                onChange={(e) => handleActivity(e)} />
                            <input type="text" name="title" placeholder='Title'
                                onChange={(e) => handleActivity(e)} />
                            <input type="text" name="url_icon" placeholder='Icon'
                            defaultValue='/assets/surfing.png'
                                onChange={(e) => handleActivity(e)} />
                            <textarea name="description" placeholder='Description' cols="30" rows="10"
                                onChange={(e) => handleActivity(e)} />
                            <button className='add_btn' onClick={() => { dispatch(addActivity({ ...newActivity })); setPing(!ping); setShow(!show) }}
                            >Add</button>
                        </div>}
                </div>

                <div className='activities_dashb_cards'>
                    {activity?.map((el, i) =>
                        <DashActivityCard key={i} el={el} ping={ping} setPing={setPing}  />
                    )}
                </div>

            </div>
        </div>
    )
}

export default ActivitiesDashb