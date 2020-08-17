import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({fetchGallery}) => (
        <>
        <button type="button" className={style.Button} onClick={fetchGallery}>
            Load more
        </button>
            
        </>
    );

Button.propTypes = {
    onClick: PropTypes.func.isRequired,  
};

export default Button;
