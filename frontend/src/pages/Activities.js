// import { useEffect } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActivitiesCard from '../components/ActivitiesCard'
import Couverture from '../components/Couverture'
import { getActivity } from '../redux/slices/activitySlice'
import '../style/activities.css'

const Activities = () => {
  const activity = useSelector((state) => state?.activity?.activity)
  const dispatch = useDispatch()

  return (
    <div>
      <Couverture title="Activities" />
      <div className='activities'>
        <div className='activities_cards'>
          {activity?.map((el, i) => <ActivitiesCard el={el} key={i}/>)}
        </div>
      </div>
    </div>
  )
}

export default Activities