import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog } from '../redux/slices/blogSlice'
import '../style/userBlogs.css'
import '../style/blogCard.css'
import UserBlogCard from './UserBlogCard'

const UserBlogs = ({ ping, setPing }) => {

    const user = useSelector((state) => state.user?.user);
    const blog = useSelector((state) => state.blog?.blog);
    const [newPost, setNewPost] = useState({ img_url: "/assets/camp-default.png" })
    const handleUpdate = (e) =>
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value,
        });
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    
    return (
        <div className='user_blogs'>
            <div className='create_blog'>
                <button id='create_blog_btn' onClick={() => setShow(!show)}>Share your adventure with us</button>
                {(show) && (
                    < div className='create_blog_inputs'>
                        <input type="text" placeholder='Choose image'
                            defaultValue="/assets/camp-default.png"
                            name="img_url" onChange={(e) => handleUpdate(e)} />

                        <input type="text" placeholder="Blog's title"
                            name="title" onChange={(e) => handleUpdate(e)} />

                        <textarea type="text" name="description"
                            rows={10} cols={49}
                            placeholder='Share your adventure with us'
                            onChange={(e) => handleUpdate(e)} />
                        <button id='addBlog_btn' onClick={() => {
                            dispatch(addBlog({
                                ...newPost, date: new Date(),
                                current_user: `${user?.first_name} ${user?.last_name}`,
                                user_id: user?._id
                            }
                            ));
                            setShow(!show);
                        }}>Submit</button>
                    </div>
                )}
            </div>
            <div className='user_blogs_cards'>
                {blog?.map((el, i) => user?._id === el?.user_id && 
                <UserBlogCard el={el} key={i} ping={ping} setPing={setPing} />)} 
            </div>
        </div >
    )
}

export default UserBlogs