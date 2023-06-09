import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { notifyOptions } from 'notify/notify';


import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);

 const handleSubmit = value => {
    if (value === searchText) {
     toast(
        `We already found images for ${value}.
         Please, enter another phrase`,
        notifyOptions
      );
return;
    }
    setSearchText(value);
    setPage(1);
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
