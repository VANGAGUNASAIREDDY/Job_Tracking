export interface JobApplication {
  id: string;
  company: string;
  position: string;
  status: 'Applied' | 'Interviewing' | 'Rejected' | 'Offer';
  appliedDate: string;
  location: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  salary?: string;
  description?: string;
  notes?: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}