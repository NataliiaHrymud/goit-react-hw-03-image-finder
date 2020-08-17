import React from 'react'
import PropTypes from 'prop-types'
import style from './imageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ gallery, onImageClick }) {
    return (
        <div>
            <ul className={style.ImageGallery}>
                {gallery.map((img)=>(
                    <ImageGalleryItem img={img} key={img.id} show={onImageClick} />
                ))}
            </ul>
        </div>
    )
}

ImageGallery.propTypes = {
    gallery: PropTypes.array.isRequired,
    onImageClick: PropTypes.func.isRequired,
}

export default ImageGallery;




// Список карточек изображений. Создает DOM-элемент следующей структуры.

// <ul className="ImageGallery">
//   <!-- Набор <li> с изображениями -->
// </ul>