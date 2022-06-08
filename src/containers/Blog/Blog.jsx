import React from 'react'
import "./Blog.scss"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js"
import {Article} from "../../components"

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="blog-container">
        <div className="blog-container__groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" title="AI-XP and Open  AI is the future. Let us exlore how it is?"/>
        </div>
          <div className="blog-container__groupB">
          <Article imgUrl={blog02} date="Sep 26, 2021" title="AI-XP and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog03} date="Sep 26, 2021" title="AI-XP and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog04} date="Sep 26, 2021" title="AI-XP and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog05} date="Sep 26, 2021" title="AI-XP and Open  AI is the future. Let us exlore how it is?" /> 
        </div>
      </div>
    </div>
  )
}

export default Blog