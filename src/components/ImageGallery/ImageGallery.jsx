import { useState, useEffect } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import { Loader } from '../Loader/Loader';
import api from 'services/services';

import { Ul } from './ImageGallery.styled';
import Modal from 'components/Modal/Modal';

import PropTypes from 'prop-types';

const ImageGallery = ({ value, page, onLoadMore })=> {
// state = {
//   value: '',
//   images: [],
//   error: null,
//   isLoading: false,
//
//   page: 1,
//   totalPages: 0,
//
//   isShowModal: false,
//   modalData: { tags: '' },
// };
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  
//  static getDerivedStateFromProps(nextProps, prevState) {
//    if (prevState.value !== nextProps.value) {
//      return { page: 1, value: nextProps.value };
//    }
//    return null;
//  }
useEffect(() => {
    // якщо немає пошукового запиту - пошук не відбувається
    if (!value) {
      return;
    }
    // при новому запиті - запит відбувається з 1 сторінки та попередній масив зображень обнуляється
    if (page === 1) {
      setImages([]);
    }
  
  return null;
  
 //onentDidUpdate(prevProps, prevState) {
 //nst { page } = this.state;
 //nst prevValue = prevProps.value;
 //nst nextValue = this.props.value;
 
 // повторний запит, якщо вже таке слово було введене

  //  if (prevValue !== nextValue || prevState.page !== page) {
    //  this.setState({ isLoading: true });
      // чи є помилка, якщо є - записуємо null
    //  if (this.state.error) {
    //    this.setState({ error: null });
    //  }
  api
    .fetchAPI(nextValue, page)
    .then(images => {
      setImages(prevState => [...prevState.images, ...images.hits],

        setTotalPages(Math.floor(images.totalHits / 12))
        })
    .catch(error => setError(error);
        .finally(() => {
          setIsLoading({ isLoading: false });
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
ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};