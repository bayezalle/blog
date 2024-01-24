import React, { useState, useEffect } from 'react';

const ListBlog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/doop');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
            } catch (error) {
                console.error('Error fetching posts:', error.message);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Liste des Publications</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p>{post.created_at}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListBlog;
