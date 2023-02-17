import React from 'react'
import {useNavigate} from 'react-router-dom'

const Blog = () => {
    const navigate = useNavigate()
  return (
    <div>
      This is my blog
      <button onClick={()=>navigate('/blog/1123231dss')}>Article 1</button>
      <button onClick={()=>navigate('/blog/yusdgcuyvsdcgvsd')}>Article 2</button>
      <button onClick={()=>navigate('/blog/eouihtgbecbxcjb')}>Article 3</button>
      <button onClick={()=>navigate('/blog/xcbgsdcuywegd67wd')}>Article 4</button>

    </div>
  )
}

export default Blog
