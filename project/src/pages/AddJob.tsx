import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useJobApplications } from '../hooks/useJobApplications';
import JobForm from '../components/Jobs/JobForm';
import { JobApplication } from '../types';
import { ArrowLeft } from 'lucide-react';

const AddJob: React.FC = () => {
  const navigate = useNavigate();
  const { addApplication } = useJobApplications();

  const handleSubmit = (jobData: Omit<JobApplication, 'id' | 'updatedAt'>) => {
    addApplication(jobData);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Dashboard
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Add New Application</h1>
        <p className="text-gray-600">Fill in the details for your job application</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <JobForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default AddJob;