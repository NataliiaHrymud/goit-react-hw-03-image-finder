import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

class Modal extends Component {
    static propTypes = {
        onCloseModal: PropTypes.func.isRequired,
      };
    
      componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress);
      }
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPress);
      }
    
      handleKeyPress = e => {
        if (e.code !== 'Escape') return;
        this.props.onCloseModal();
      };

      render() {
        const { children } = this.props;
        return (
          <div className={style.Overlay}>
            <div className={style.Modal}>{children}</div>
          </div>
        );
      }
}

export default Modal;
