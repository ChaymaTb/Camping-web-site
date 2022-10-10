import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getActivity } from '../redux/slices/activitySlice';
import Couverture from '../components/Couverture'
import '../style/description.css'

const Description = () => {
    const location = useLocation()
    const [selectedOne, setSelectedOne] = useState(location.state);
    // console.log(selectedOne);
    const activity = useSelector((state) => state?.activity?.activity);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getActivity())
    }, [dispatch])

    return (
        <div>
            <Couverture title={selectedOne.title} />
            <div className='description'>
                <div className='description_activities'>
                    <div className='activities_links'>
                        {activity?.map((el, i) =>
                            <div key={i} className='activities_links_p'
                                onClick={() => setSelectedOne(el)}
                                style={el._id === selectedOne._id ? 
                                { backgroundColor: "#5f736f", color: '#f6f3f2' } 
                                : { backgroundColor: "#f6f3f2", color: '#5f736f' }}>
                                <p >{el?.title}</p>
                            </div>
                        )}
                    </div>
                    <img src="/assets/contact_des.png" alt="description_contact" />
                </div>
                <div className='description_cards'>
                    <div className='description_cards_title'>
                        <img src={selectedOne.url} alt="zrez" />
                        <div className='description_title_parag' >
                            <h1>{selectedOne.title}</h1>
                            <p>{selectedOne.description}</p>
                        </div>
                    </div>
                    <div className='description_cards_services'>
                        <img src="/assets/descr-benefits.jpg" alt="description_services" />
                        <div className='cards_services_title'>
                            <h4>Services Benefits</h4>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</span>
                            <div className='cards_services_p'>
                                <div className='services_benefit'>
                                    <img src="/assets/check.png" alt="" />
                                    <p>{selectedOne.benefits[0]}</p>
                                </div>
                                <div className='services_benefit'>
                                    <img src="/assets/check.png" alt="" />
                                    <p>{selectedOne.benefits[1]}</p>
                                </div>
                                <div className='services_benefit'>
                                    <img src="/assets/check.png" alt="" />
                                    <p>{selectedOne.benefits[2]}</p>
                                </div>
                                <div className='services_benefit'>
                                    <img src="/assets/check.png" alt="" />
                                    <p>{selectedOne.benefits[3]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description