import { useEffect, useState } from "react"
import React from  'react'
import appwriteService from '../appwrite/config'
import {Container, PostCard} from '../components'


function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    }) 
   if(posts.length === 0){
    return (
         <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-amber-100 hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                        <div className="p-6 w-full flex justify-center">
                            <img 
                                src="https://steamforged.com/cdn/shop/files/DSBG-Key-BG-Wide.jpg?v=1633427791&width=3000" 
                                alt="Hero" 
                                style={{ maxWidth: "100%", maxHeight: "800px", objectFit: "cover", borderRadius: "12px" }}
                            />
                        </div>
                    </div>
                </Container>
        </div>
    )
   }
   return (
    <div className="w-full py-8">
        <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
        </Container>
    </div>
   )
}

export default Home
