import "./ImagesList.css";
const ImageList = ({ images, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-list">
            <div className="image">
              <div className="img-size">
                <img
                  className="img-margin"
                  src={image.preview_url}
                  alt={image.title}
                  width={150}
                />
              </div>
            </div>
            <div className="title-bg">
              <div className="title" style={{ color: image.titleColor }}>
                <center>
                  {image.jpeg_width} x {image.jpeg_height}
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
