import { useState, useEffect } from 'react';
import './Home.css';
import ImagesList from './ImagesList';

const Home = () => {
    const [images, setImages] = useState([]);
 
    const fetchImage = async (id) => {
        try {   
            const response = await fetch(`http://localhost:8000/${id}`);
            const data = await response.json();
            return data;
        } catch(err) {
            console.error('Error fetching image:', err);
            return null;
        }
    }

    const fetchAllImages = async () => {
        const fetchImagePromises = [];

        for (let i = 0; i <= 20; i++) {
            fetchImagePromises.push(fetchImage(i));
        }

        const images = await Promise.all(fetchImagePromises);
        const validImages = images.filter(image => image !== null);
        setImages(validImages);
    }

    useEffect(() => {
        fetchAllImages();
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