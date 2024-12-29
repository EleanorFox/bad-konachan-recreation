import './ImagesList.css'
const ImageList = ({ images, title }) => {
    return (
        <div>
            <h3>{title}</h3>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div key={index} className="image-list">
                        <div className="image">
                        <img className="img-margin" src={image.image} alt={image.title} width={150}/>
                        </div>
                    <div className="title" style={{ color: image.titleColor }}>
                        <center>{image.title}</center>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageList;