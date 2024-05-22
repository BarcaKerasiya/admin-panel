import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { toast } from 'react-toastify';
import { axiosInstance } from '../../api/axiosInstance';

const CreateAuthor: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [status, setStatus] = useState('');

  const handleSave = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (name.length === 0) {
      toast.error('Name is Required!');
      return;
    }

    if (jobTitle.length === 0) {
      toast.error('Job Title is Required!');
      return;
    }

    if (status.length === 0) {
      toast.error('Status is Required!');
      return;
    }

    const formData = { name, jobTitle, status };
    const reponse = await axiosInstance.post('/authors', formData);
    if (reponse.status === 201) {
      navigate('/author');
    }
  };

  
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Create Author" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <form>
          <div className="flex flex-wrap">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Status
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your Status"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Job Title
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your job title"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>
                </div>

                {/* <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                    onClick={(e) => handleSingIn(e)}
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex justify-end p-4">
            <button
              onClick={(e) => handleSave(e)}
              className='inline-flex  items-end justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 "'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default CreateAuthor;
