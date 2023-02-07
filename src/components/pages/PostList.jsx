import React from 'react'

import { Link , useParams } from "react-router-dom";
import '../pages/pages.scss'
import bg from '../../img/fdsdfsdfsdf\ 1.png'
import Post from '../componentParts/Post/Post';

export default function PostList({posts , setPosts}) {
  return (
    <div className="postList postlist">
    
      <p className='title'>My<span> orders</span> </p>
      <p className='title2'>Please complete the order within the time indicated below, otherwise it will be cancelled.</p>
    {posts.map((post ) => {
      return (
        <Post
       
          
          
          key={post.id}
          posts={posts} 
          setPosts={setPosts} 
          post={post} 
        />
      )
    })}
  </div>
  )
}
