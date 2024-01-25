import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

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

    // Fonction pour limiter le nombre de caractères dans le texte
    // const limitText = (text, maxLength) => {
    //     if (text.length > maxLength) {
    //         return text.substring(0, maxLength) + '...';
    //     }
    //     return text;
    // };
    const limitText = (text, maxLength) => text.length > maxLength ? text.substring(0, maxLength) + '...' : text;


    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    {posts.map(post => (
                        <div className="col-md-4 mb-3" key={post.id}>
                            <div className="mb-3">
                                <div className='card-body'>
                                    <h4 className='fw-bold'>{post.title}</h4>
                                    <p>{limitText(post.description, 80)}</p>
                                    <span>Publié le :{moment(post.created_at).format('DD-MM-YYYY  HH:mm:s')}</span>
                                    {/* <span>{moment(post.created_at).format('HH:mm:ss')}</span> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListBlog;
