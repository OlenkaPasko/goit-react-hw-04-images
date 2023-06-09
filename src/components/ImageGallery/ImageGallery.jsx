import { useState, useEffect } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import { Loader } from '../Loader/Loader';
import api from 'services/services';

import { Ul } from './ImageGallery.styled';
//import Modal from 'components/Modal/Modal';

import PropTypes from 'prop-types';

const ImageGallery = ({ value, page, onLoadMore, spinner }) => {
  //   isShowModal: false,
  //   modalData: { tags: '' }

  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const [totalPages, setTotalPages] = useState(0);

  // const[showModal, setShowModal] = useState(false);

  useEffect(() => {
    //пошук не відбувається
    if (!value) {
      return;
    }
    // при новому запиті попередній масив зображень обнуляється
    if (page === 1) {
      setImages([]);
    }
    api
      .fetchAPI(value, page)
      .then(images => {
        const collection = images.hits;
        setImages(prevState => [...prevState, ...collection]);
        //setTotalPages(Math.floor(images.totalHits / 12));
      })
      .catch(error => setError(error));
    setIsLoading(false);
  }, [value, page, onLoadMore]);

  // const setModalData = modalData => {
  //   this.setState({ modalData, showModal: true });
  //};

  //  const handleModalClose = () => {
  //   this.setState({ showModal: false });
  // };
  //const { images, spinner, isLoading, error, isShowModal, modalData }

  return (
    <>
      {spinner && <Loader />}
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <p>Loading...</p>}
      {images.length > 0 && (
        <Ul>
          {images.map(image => (
            <ImageGalleryItem key={image.id} item={image} />
          ))}
        </Ul>
      )}
      <Button onClick={onLoadMore}>Load More</Button>
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
