import { useState, createContext } from 'react';

export const PhotosContext = createContext();

export const PhotosContextProvider = (props) => {
  const [photo, setPhoto] = useState([]);

  return (
    <PhotosContext.Provider value={{ photo, setPhoto }}>
      {props.children}
    </PhotosContext.Provider>
  )
}