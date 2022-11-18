import React, { Fragment, useEffect, useContext } from 'react'
import Photophile from '../api/Photophile'
import { PhotosContext } from '../context/PhotosContext';

const ListPhotosPage = (props) => {
  const {photo, setPhoto} = useContext(PhotosContext)
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await Photophile.get('/');
      setPhoto(response.data.data.photo);
   }
    fetchData();
  }, []);
    

  return (
    <Fragment>
      <div className="flex flex-col">
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
                  {/* <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Mark
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Otto
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Jacob
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Thornton
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @fat
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                    <td colspan="2" className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                      Larry the Bird
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @twitter
                    </td>
                  </tr> */}
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