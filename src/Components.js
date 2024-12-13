import React from 'react'

export const Navbar = () => <nav>Navbar</nav>

export const Post = ({post}) => (
  <div>
    <h3>{post.username}</h3>
    <p>{post.content}</p>
    {post.images &&
      post.images.map((url, index) => <img key={index} src={url} alt="post" />)}
  </div>
)
