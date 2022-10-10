import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { blogDelete } from '../redux/slices/blogSlice';
import UpdateBlog from './UpdateBlog';

const UserBlogCard = ({ el, ping, setPing }) => {
    const [showUpdate, setShowUpdate] = useState(false)
    const dispatch = useDispatch();

    return (
        <div className='blog_card_container' >
            <div className="blog_card">
                <img src={el?.img_url} alt="blog_img" />
                <h4>{el?.date.split('T').map(el => el).slice(0, 1)}</h4>
                <div className='blog_card_content'>
                    <div className='blog_card_title'>
                        <div className='blog_card_user'>
                            <img src="/assets/user.png" alt="" />
                            <h3>by {el?.current_user}</h3>
                        </div>
                        <h2>{el?.title}</h2>
                    </div>
                    <p>{el?.description}...</p>
                </div>
            </div>
            <div className='user_blog_btn'>
                <button onClick={() => setShowUpdate(!showUpdate)}> Update</button>
                <button onClick={() => {
                    dispatch(blogDelete({ id: el?._id, blogDelete })); setPing(!ping)
                }}>x</button>
                
                {(showUpdate) && <UpdateBlog el={el} ping={ping} setPing={setPing}
                    showUpdate={showUpdate} setShowUpdate={setShowUpdate} />}
            </div>

        </div>
    )
}

export default UserBlogCard