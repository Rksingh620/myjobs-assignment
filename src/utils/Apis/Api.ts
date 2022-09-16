import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  return axios.post(`auth/login`, {
    email,
    password,
  });
};
export const getJobList = async (page?: number) => {
  let url = `recruiters/jobs`;
  if (page) {
    url += `?page=${page}`;
  }
  return axios.get(url);
};
export const getJobById = async (id: string) => {
  return axios.get(`recruiters/jobs/${id}/candidates`);
};
