import { useState, useEffect } from 'react';
import { JobApplication } from '../types';
import { useAuth } from '../contexts/AuthContext';

export const useJobApplications = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const { user } = useAuth();

  const storageKey = `jobApplications_${user?.id}`;

  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        setApplications(JSON.parse(stored));
      }
    }
  }, [user, storageKey]);

  const saveApplications = (apps: JobApplication[]) => {
    setApplications(apps);
    localStorage.setItem(storageKey, JSON.stringify(apps));
  };

  const addApplication = (application: Omit<JobApplication, 'id' | 'updatedAt'>) => {
    const newApplication: JobApplication = {
      ...application,
      id: Date.now().toString(),
      updatedAt: new Date().toISOString(),
    };
    const updated = [...applications, newApplication];
    saveApplications(updated);
  };

  const updateApplication = (id: string, updates: Partial<JobApplication>) => {
    const updated = applications.map(app =>
      app.id === id
        ? { ...app, ...updates, updatedAt: new Date().toISOString() }
        : app
    );
    saveApplications(updated);
  };

  const deleteApplication = (id: string) => {
    const updated = applications.filter(app => app.id !== id);
    saveApplications(updated);
  };

  const getApplication = (id: string) => {
    return applications.find(app => app.id === id);
  };

  return {
    applications,
    addApplication,
    updateApplication,
    deleteApplication,
    getApplication,
  };
};