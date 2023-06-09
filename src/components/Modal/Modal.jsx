import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

 const Modal = ({ onModalClose, children }) => {
 
 useEffect(() => {
   const handleKeyDown = e => {
     if (e.code === `Escape`) {
       onModalClose();
     }
   };
   window.addEventListener('keydown', handleKeyDown);

   return () => window.removeEventListener('keydown', handleKeyDown);
 }, [onModalClose]);

 const handleBackdropeClick = e => {
   if (e.target === e.currentTarget) {
     onModalClose();
   }
 };
 // componentDidMount() {
 //   window.addEventListener('keydown', this.handleKeyDown);
 // }

 // componentWillUnmount() {
 //   window.removeEventListener('keydown', this.handleBackdropeClick);
 // }

  //handleKeyDown = e => {
  //  if (e.code === `Escape`) {
  //    this.props.onModalClose();
  //  }
 // };

 // handleBackdropeClick = e => {
  //  if (e.target === e.currentTarget) {
  //    this.props.onModalClose();
  //  }
 // };

 //   const { largeImageURL, tags } = this.props.modalData;

    return createPortal(
      <ModalBackdrop onClick={handleBackdropeClick}>
        <ModalContent>{children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  onModalClose: PropTypes.func,
};