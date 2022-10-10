import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Couverture from './Couverture'
import FilterBlog from './FilterBlog';
import '../style/blogDashb.css'
import { blogDelete } from '../redux/slices/blogSlice';

const DashboardBlog = ({ ping, setPing }) => {
    const blog = useSelector(state => state.blog?.blog);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    return (
        <div>
            <Couverture title='all/Blogs' />
            <div className='dashboard_blog'>
                <div className='dashboard_blog_card'>
                    {blog?.filter((el) => {
                        if (search === '') { return el }
                        else if (el.current_user.toLowerCase().includes(search.toLowerCase()) || el.title.toLowerCase().includes(search.toLowerCase())) { return el }
                    }).map((el, i) =>
                        <div key={i} className="blog_card">
                            <img src={el?.img_url} alt="blog_img" />
                            <h4>{el?.date.split('T').map(el=>el).slice(0,1)}</h4>
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
                            <button id='deleteBlog_btn'
                                onClick={() => {dispatch(blogDelete({ id: el?._id, blogDelete }));setPing(!ping)}}>
                                <span className="text">Delete</span>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg>
                                </span>
                            </button>
                        </div>
                    )}
                </div>
                <div className='dashboard_blog_filter'>
                    <FilterBlog blog={blog} setSearch={setSearch} />
                </div>
            </div>
        </div>
    )
}

export default DashboardBlog