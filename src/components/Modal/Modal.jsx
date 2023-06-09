import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

 class Modal extends Component {
  static propTypes = {
    modalData: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
    onModalClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleBackdropeClick);
  }

  handleKeyDown = e => {
    if (e.code === `Escape`) {
      this.props.onModalClose();
    }
  };

  handleBackdropeClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.modalData;

    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropeClick}>
        <ModalContent>
          <img src={largeImageURL} alt={tags} />
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
export default Modal;