import React, { Fragment, useEffect, useContext } from 'react'
import { PhotosContext } from '../context/PhotosContext';
import Photophile from '../api/Photophile'
import EditPhotoPage from './EditPhotoPage';

const ListPhotosPage = (props) => {
  const {photos, setPhoto} = useContext(PhotosContext)
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await Photophile.get('/');
      setPhoto(response.data.data.photo);
   }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await Photophile.delete(`/${id}`);
      setPhoto(photos.filter(photo => photo.photo_id !== id))
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
    

  return (
    <Fragment>
      <div className="flex flex-col py-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded shadow-md">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      Description
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      Edit
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {photos && photos.map(photo => {
                    return (
                      <tr key={photo.photo_id} className='bg-white border-b'>
                        <td className="text-start text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {photo.title}
                        </td>
                        <td className="text-start text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {photo.description}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                          
                        
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button 
                            onClick={() => handleDelete(photo.photo_id)}
                            className='w-full bg-red-500 hover:bg-red-400 text-white hover:text-gray-900 font-bold py-2 px-4 rounded'>
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ListPhotosPage