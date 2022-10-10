import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateBlog } from '../redux/slices/blogSlice';
import '../style/update.css'

const UpdateBlog = ({ el, ping, setPing, showUpdate, setShowUpdate }) => {
    const [newblog, setNewblog] = useState({ img_url: "/assets/camp-default.png" });
    const handleBlogUpdate = (e) =>
        setNewblog({
            ...newblog,
            [e.target.name]: e.target.value,
        });
    const dispatch = useDispatch()
    return (
        <div className='update_blog'>
            <div className='update_blog_inputs'>
                <input type="text" name='img_url'
                    defaultValue="/assets/camp-default.png"
                    placeholder='New imag'
                    onChange={(e) => handleBlogUpdate(e)} />
                <input type="text" name='title'
                    defaultValue={el.title}
                    placeholder='New title'
                    onChange={(e) => handleBlogUpdate(e)} />
                <textarea type="text" name='description' rows='10'
                    defaultValue={el.description}
                    placeholder='New description'
                    onChange={(e) => handleBlogUpdate(e)} />
                <button id='done_btn'
                    onClick={() => {
                        dispatch(updateBlog({ id: el._id, blog: newblog }));
                        setPing(!ping);
                        setShowUpdate(!showUpdate)
                    }}
                >Done
                    <span></span>
                </button>
            </div>
        </div>
    )
}

export default UpdateBlog