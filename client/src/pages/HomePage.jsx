import React, { Fragment, useState } from 'react'
import ImageUploader from '../features/ImageUploader'

const HomePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = [{ title, description }];
      const response = await fetch('http://localhost:4000/photos', {
        method: "POST",
        headers: { 'Content-Type': 'applicaction/json'},
        body: JSON.stringify(body)
      } )
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Fragment>
      <div className='py-8'>
        <h1 className='text-2xl text-start text-gray-600 font-normal mb-1'>Entry Title</h1>
        <form>
          <input type='text' 
                 className='form-input bg-indigo-50 w-full rounded shadow-md mb-4' 
                 defaultValue={title}
                 onChange={e => setTitle(e.target.value)} 
          />            
        </form>
        <h1 className='text-2xl text-start text-gray-600 font-normal mb-1'>Entry Description</h1>
        <form>
          <textarea type='text' 
                    className='form-textarea bg-indigo-50 w-full rounded shadow-md mb-4' 
                    defaultValue={description}
                    onChange={e => setDescription(e.target.value)}
          />
        </form>
          <ImageUploader />
          <button 
            className='w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded'
            onClick={onSubmitForm}>
            Add
          </button>
      </div>
    </Fragment>
  )
}

export default HomePage