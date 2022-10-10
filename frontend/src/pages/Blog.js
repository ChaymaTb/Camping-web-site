import BlogCard from '../components/BlogCard'
import Couverture from '../components/Couverture'
import { useSelector } from 'react-redux';
import FilterBlog from '../components/FilterBlog';
import '../style/blog.css'
import { useState } from "react";

const Blog = () => {
  const blog = useSelector((state) => state.blog?.blog);
  const [search, setSearch] = useState("")

  return (
    <div>
      <Couverture title="Our Blogs" src={`/assets/whitelongshape.png`} />
      <div className='blog'>
        <div className='blog_cards_container'>
          {blog?.filter((el) => {
            if (search === '') { return el }
            else if (el.title.toLowerCase().includes(search.toLowerCase()) || el.current_user.toLowerCase().includes(search.toLowerCase())) { return el }
          }).map((el, i) => <BlogCard el={el} key={i}/>)}
        </div>
        <FilterBlog blog={blog} setSearch={setSearch} />
      </div>
    </div>
  )
}

export default Blog