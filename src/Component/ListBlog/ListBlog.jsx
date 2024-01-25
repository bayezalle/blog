import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListBlog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/doop')
            .then((response) => {
                setPosts(response.data.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération', error);
            });
    }, []); 

    return (
        <div>
                {posts.map(post => (
                     <div className="card">
                     <div key={post.id} className='card-body'>
                        <h3 className='card-title'>{post.title}</h3>
                        <p>{post.description}</p>
                        <p>{post.created_at}</p>
                    </div>
                   </div>
                ))}
            </div>
    );
};

export default ListBlog;
