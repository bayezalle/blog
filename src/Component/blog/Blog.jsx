import React, { useState } from 'react';
import post2 from '../../img/post2.webp'

const Blog = () => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Post created successfully:', data);
        } catch (error) {
            console.error('Error creating post:', error.message);
        }
    };

    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        {/* <img src={post2} alt="" className='img-fluid' /> */}
                    </div>
                        <div className="col-md-10 mt-3 p-3">
                        <div className="d-flex gap-4 shadow">
                        <img src={post2} alt="" className='img-fluid' />
                        <form className='form' onSubmit={handleFormSubmit}>
                            <h2>mettez votre post</h2>
                            <div className="mb-3">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className='form-control'
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className='btn btn-info'>Poster</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default Blog;
