import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { notifyOptions } from 'notify/notify';

import { Header, SearchForm, SearchInput, SearchBtn } from './Searchbar.styled';
import { FaSistrix } from 'react-icons/fa';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onChangeInput = ({ target: { value } }) => {
    setValue(value.toLowerCase());
  };
  const onFormSubmit = evt => {
    evt.preventDefault();
    if (value.trim() === '') {
      return toast.error('Please enter key words for search', notifyOptions);
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <Header>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchBtn>
          <FaSistrix size="24" />
        </SearchBtn>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChangeInput}
          value={value}
        />
      </SearchForm>
    </Header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
