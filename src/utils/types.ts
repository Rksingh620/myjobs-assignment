export type TypeLoginResponse = {
  email: string;
  name: string;
  skills: string;
  userRole: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  token: string;
};
export type TypeJobResponse = {
  title: string;
  description: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};
export type TypeCandidate = {
  email: string;
  id: string;
  name: string;
  skills: string;
};
