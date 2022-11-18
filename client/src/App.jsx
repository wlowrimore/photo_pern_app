import React from 'react'
import { PhotosContextProvider } from './context/PhotosContext'
import HomePage from './pages/HomePage'
import ListPhotosPage from './pages/ListPhotosPage'

const App = () => {
  return (
    <PhotosContextProvider>
      <div className='container text-center mx-auto mt-5 p-6 bg-indigo-100'>
        <h1 className='text-6xl text-center text-gray-600 font-thin'>Photophile</h1>
        <HomePage />
        <ListPhotosPage />
      </div>
    </PhotosContextProvider>
  )
}

export default App