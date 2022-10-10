import { useSelector } from 'react-redux';
import '../style/blogCard.css'


const BlogCard = ({ el }) => {
    const user = useSelector((state) => state?.user?.user);


    return (
        <div className="blog_card">
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
        </div>
    )
}

export default BlogCard