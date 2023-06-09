import React, { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import { Loader } from '../Loader/Loader';
import api from 'services/services';

import { Ul } from './ImageGallery.styled';
import Modal from 'components/Modal/Modal';

import PropTypes from 'prop-types';

class ImageGallery extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  state = {
    value: '',
    images: [],
    error: null,
    isLoading: false,

    page: 1,
    totalPages: 0,

    isShowModal: false,
    modalData: { tags: '' },
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return { page: 1, value: nextProps.value };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevValue = prevProps.value;
    const nextValue = this.props.value;

    // повторний запит, якщо вже таке слово було введене

    if (prevValue !== nextValue || prevState.page !== page) {
      this.setState({ isLoading: true });
      // чи є помилка, якщо є - записуємо null
      if (this.state.error) {
        this.setState({ error: null });
      }
      api
        .fetchAPI(nextValue, page)
        .then(images => {
          this.setState(prevState => ({
            images:
              page === 1 ? images.hits : [...prevState.images, ...images.hits],

            totalPages: Math.floor(images.totalHits / 12),
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  setModalData = modalData => {
    this.setState({ modalData, isShowModal: true });
  };

  handleModalClose = () => {
    this.setState({ isShowModal: false });
  };
  render() {
    const { images, spinner, isLoading, error, isShowModal, modalData } =
      this.state;
    return (
      <>
        {spinner && <Loader />}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {images.length > 0 && (
          <Ul>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                item={image}
                onImageClick={this.setModalData}
              />
            ))}
          </Ul>
          
        )}
        <Button onClick={this.handleLoadMore}>Load More</Button>
        {isShowModal && (
          <Modal modalData={modalData} onModalClose={this.handleModalClose} />
        )}
      </>
    );
  }
}
export default ImageGallery;
