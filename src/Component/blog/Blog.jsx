import React, { useState } from 'react';
import post2 from '../../img/post2.webp'
import post3 from '../../img/post3.webp'
import './blog.css'

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
                <div className="row mt-3">
                    <div className="col-md">
                        <h4 className='fw-bold'>CAN 2024: Sénégal-Côte d’Ivoire, Nigeria-Cameroun, Mali-Burkina, voici le calendrier des huitièmes</h4>
                        <p>La phase de groupe de la CAN 2024 a pris fin ce mercredi 24 janvier et on connaît désormais les 16 pays qualifiés
                             pour les huitièmes de finale de la CAN 2024. Le miracle ivoirien a eu lieu et les Éléphants se 
                            sont qualifiés grâce à la défaite de la Zambie face au Maroc (0-1) Mais la Côte d’Ivoire, qui a limogé son 
                            sélectionneur ce mercredi, va devoir faire beaucoup mieux que lors du premier tour pour réussir l’exploit de 
                            sortir le Sénégal, champion d’Afrique en titre et intraitable depuis le début de la CAN avec trois victoires
                             en trois matches.

                            Le choc Nigeria-Cameroun vaudra également le détour entre deux équipes se sont croisées 
                            au même stade de la compétition à la CAN 2019 en 
                            Égypte. Les Super eagles étaient sortis vainqueurs du duel (3-2).

                            Épatante au premier tour, la Guinée équatoriale, avec le meilleur buteur de la
                             compétition, Emilio Nsue (5 buts), affrontera la Guinée et voudra rester sur sa 
                             lancée du premier tour....</p>
                        <img src={post3} alt="" className='img-fluid' />

                              <p>Publié le : 24/01/2024 - 23:03</p>

                    </div>
                    <div className="col-md-5">
                        <div className="shadow-sm mt-3 p-2">
                            <div className="text-center">
                            <h5>mettez vos posts</h5>
                            </div>
                        <form className='form mt-3' onSubmit={handleFormSubmit}>
                        <img src={post2} alt="" className='img-fluid' />
                            <div className="mb-3 mt-2">
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
                                <button type="submit" className='btn btn-post'>Poster</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default Blog;
