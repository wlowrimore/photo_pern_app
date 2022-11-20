import React, { Fragment } from 'react';
import { HiClipboardCheck } from 'react-icons/hi';

const EditPhotoModal = ({ children, open, close }) => {
  if(!open) return null;

  return (
    <Fragment>
      <div className='absolute inset-0 z-50 bg-black/50 backdrop-blur-sm'>
        <div className='relative w-1/4 right-[-40%] bottom-[-40%] border rounded shadow-md'>
          <div className='flex flex-col p-6 w-full bg-white'>
            <div className='inline-flex justify-between'>
              <h1 className='text-start mb-4 text-3xl font-thin'>Edit Entry</h1>
              <h3 onClick={close} className='text-xl border border-black h-full px-2 rounded-full hover:cursor-pointer hover:bg-gray-100'>X</h3>
            </div>
            <div className='text-start w-full mb-3'>
              <h2 className='text-md tracking-wider font-normal'>Title</h2>
              <input type='text' className='form-input rounded shadow-md w-full' />
            </div>
            <div className='text-start w-full'>
              <h2 className='text-md tracking-wider font-normal'>Description</h2>
              <textarea type='text' className='form-textarea rounded shadow-md w-full' />
            </div>
            <div className='flex justify-end gap-x-2 '>
              <button type='button' className='text-lg text-white rounded shadow-sm px-2 mt-3 bg-green-600 hover:bg-green-500'>Update</button>
              <button type='button' className='text-lg text-gray-900 border border-gray-500 rounded shadow-sm px-2 mt-3' onClick={close}>Cancel</button>  
            </div>        
          </div>
        </div>
          
        
      </div>
    </Fragment>
  );
};



export default EditPhotoModal