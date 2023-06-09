import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({ item }) => {
  const { largeImageURL, tags, webformatURL } = item;
  
  const [showModal, setShowModal] = useState(false);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <li>
        <img
          onClick={toggleModal}
          src={webformatURL}
          alt={tags}
          loading="lazy"
        />
      </li>
      {showModal && (
        <Modal onModalClose={toggleModal}>
            <>
              <img src={largeImageURL} alt={tags} />
              <p>{tags}</p>
            </>
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
