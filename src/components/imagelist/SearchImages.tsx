import React, { useState } from 'react'
import ImageList from './ImageList'
import axios from 'axios';
import SearchInput from './SearchInput'

const SearchImages = () => {
  const api = 'https://pixabay.com/api/';
  const [images, setImages] = useState<any[]>([]);
  const onSearchSubmit = (entry: string) => {
    axios.get(`${api}?q=${entry}&key=33277668-4bfa9423e489945ae4d74f1a7`)
      .then(response => {
        setImages(response.data.hits);
        console.log(response.data.hits);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <ImageList images={images} />
      <SearchInput onSearchSubmit={onSearchSubmit} />
      {images.length}
    </div>
  );
};

export default SearchImages;