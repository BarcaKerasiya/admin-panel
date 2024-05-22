import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableThree from '../../components/Tables/TableThree';
import DefaultLayout from '../../layout/DefaultLayout';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInstance';

const Inquiry = () => {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);
  console.log('authors', authors);
  // const onClick = () => { navigate(‘/path) }
  useEffect(() => {
    getAllAutors();
  }, []);

  const getAllAutors = async () => {
    const response = await axiosInstance.get('/contacts');
    if (response.status === 200) {
      setAuthors(response.data);
    }
    console.log('res', response);
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Inquiry" />

      <div className="flex flex-col gap-6">
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        <div className="flex justify-end">
          {/* <button
            onClick={() => navigate('/author/create')}
            className='inline-flex  items-end justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 "'
          >
            + Create Tag
          </button> */}
        </div>
        <TableThree authors={authors} />
      </div>
    </DefaultLayout>
  );
};

export default Inquiry;
