import React, {useEffect, useState} from 'react'
import {collection, getDocs, query, orderBy, limit} from 'firebase/firestore'
import {db} from './firebase'
import {Navbar, Post} from './Components'

const HomePage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(
        collection(db, 'posts'),
        orderBy('timestamp', 'desc'),
        limit(20),
      )
      const querySnapshot = await getDocs(q)
      const postsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPosts(postsArray)
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <Navbar />
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
