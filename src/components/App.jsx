import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);

 const handleSubmit = e => {
   setSearchText(e.target.value);
 };

  const handleLoadMore = () => {
  setPage(prevSate => prevSate + 1);
};
    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery
          value={searchText}
          page={page}
          onLoadMore={handleLoadMore}
        />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
