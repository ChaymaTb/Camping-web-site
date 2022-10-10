import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivity } from '../redux/slices/activitySlice'
import '../style/ourActivities.css'
import ActivitiesCard from './ActivitiesCard'


const OurActivities = () => {
    const activity = useSelector((state) => state?.activity?.activity)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getActivity())
    }, [dispatch])

    return (
        <div className='ourActivities'>
            <div className='ourActivities_title'>
                <h2>WHAT WE'RE OFFERING</h2>
                <h3>Our Activities</h3>
            </div>
            <div className='ourActivities_card'>
                {activity?.slice(0,3).map((el, i)=>
                <ActivitiesCard el={el} key={i} />
                )}
            </div>
            <div className='ourActivities_contact'>
                <div>
                    <span>GET READY FOR THE</span>
                    <h3>Adventure of a Lifetime</h3>
                </div>
                <p>You must go on adventures <br />to find out where you truly belong.</p>
                <div>
                    <span>CALL ANYTIME</span>
                    <h3>+216 61 849 XXX</h3>
                </div>
            </div>
        </div>
    )
}

export default OurActivities