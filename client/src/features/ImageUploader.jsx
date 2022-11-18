import React, { Fragment, useState, useEffect } from 'react'

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1 || images.length > 6) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (e) => {
    e.preventDefault();

    setImages([...e.target.files]);
  }

  return (
    <Fragment>
      <h1 className='text-2xl text-start text-gray-600 font-normal mb-1'>Upload Up To 6 Images</h1>
      <div className='w-full py-8 text-end bg-indigo-50 mb-6 border rounded shadow-md'>
        <input 
          type='file' 
          multiple accept='image/*' 
          className='flex px-6 text-center'
          onChange={onImageChange}
        />
        <div className='grid grid-cols-6 gap-4'>
          <div className='object-fit col-2 p-6'>
            { imageURLs.map(imageSrc => <img src={imageSrc} />) }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ImageUploader
