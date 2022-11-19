import React, { Fragment } from 'react';
import { HiClipboardCheck } from 'react-icons/hi';

const EditPhotoModal = ({ children, open, close }) => {
  if(!open) return null;

  return (
    <Fragment>
      <div className='absolute inset-0 z-50 bg-black/50 backdrop-blur-sm'>
        <h1 className='text-white text-5xl'>This is The Module</h1>
      </div>
    </Fragment>
  );
};



export default EditPhotoModal