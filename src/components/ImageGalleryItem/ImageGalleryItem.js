import React from 'react';
import style from './iImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({img, id, show}) => {
    return (
        <div>
            <li 
            className={style.ImageGalleryItem}
            key={id}
            onClick={()=> show(img.largeImageURL)}
            >
                <img 
                className={style.ImageGalleryItemImage} 
                src={img.webformatURL}
                alt={img.tags}
                width="320"
                height="180"
                />
            </li>
        </div>
    )
}

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  show: PropTypes.func.isRequired,  
};

export default ImageGalleryItem;