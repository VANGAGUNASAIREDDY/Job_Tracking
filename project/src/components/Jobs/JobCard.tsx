import React from 'react';
import { JobApplication } from '../../types';
import { Calendar, MapPin, DollarSign, Edit, Trash2 } from 'lucide-react';

interface JobCardProps {
  job: JobApplication;
  onEdit: (job: JobApplication) => void;
  onDelete: (id: string) => void;
}

const statusColors = {
  Applied: 'bg-blue-100 text-blue-800 border-blue-200',
  Interviewing: 'bg-amber-100 text-amber-800 border-amber-200',
  Rejected: 'bg-red-100 text-red-800 border-red-200',
  Offer: 'bg-green-100 text-green-800 border-green-200',
};

const JobCard: React.FC<JobCardProps> = ({ job, onEdit, onDelete }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.position}</h3>
            <p className="text-gray-600 font-medium">{job.company}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[job.status]}`}>
            {job.status}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            Applied on {formatDate(job.appliedDate)}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            {job.location}
          </div>
          {job.salary && (
            <div className="flex items-center text-sm text-gray-500">
              <DollarSign className="h-4 w-4 mr-2" />
              {job.salary}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
              {job.jobType}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onEdit(job)}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
            >
              <Edit className="h-4 w-4" />
            </button>
            <button
              onClick={() => onDelete(job.id)}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;