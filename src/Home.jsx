import { useState, useEffect } from 'react';
import './Home.css';
import ImagesList from './ImagesList';

const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/images')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setImages(data);
            })
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    return (
        <div className="side-content">
                <div>
                    <ImagesList images={images} image="Images" />
                </div>
        </div>
    );
};

export default Home;