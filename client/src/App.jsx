import React from 'react'
import InputPhoto from './components/InputPhoto'

const App = () => {
  return (
    <div className='container text-center mx-auto mt-5 p-6 bg-indigo-100'>
      <h1 className='text-5xl text-center text-gray-500 font-thin'>Photophile</h1>
      <InputPhoto />
    </div>
  )
}

export default App