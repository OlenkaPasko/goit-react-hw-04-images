import { useState, useEffect } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import { Loader } from '../Loader/Loader';
import api from 'services/services';

import { Ul } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ value, page, onLoadMore, spinner }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      })
      .catch(error => setError(error));
    setIsLoading(false);
  }, [value, page, onLoadMore]);
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
