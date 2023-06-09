import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item, onImageClick }) => {
  const { largeImageURL, tags, webformatURL } = item;

  return (
    <li
      onClick={e => {
        e.preventDefault();
        onImageClick({ largeImageURL, tags });
      }}
    >
      <div>
        <img src={webformatURL} alt={tags} loading="lazy" />
      </div>
    </li>
  );
};


ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
