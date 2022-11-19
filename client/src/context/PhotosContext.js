import { useState, createContext } from 'react';

export const PhotosContext = createContext();

export const PhotosContextProvider = (props) => {
  const [photos, setPhoto] = useState([]);

  const addNewPhoto = (photo) => {
    setPhoto([...photos, photo]);
  };

  return (
    <PhotosContext.Provider value={{ photos, setPhoto, addNewPhoto }}>
      {props.children}
    </PhotosContext.Provider>
  )
}