import React, { Component } from 'react';
import { ToastContainer} from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchText: '',
  };

  handleSubmit = searchText => {
    this.setState({ searchText });
  };

  render() {
    const { searchText } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery value={searchText} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
