import axios from "axios";
export const getProfesorById = (id) => {
  return axios
    .get('/admin/profesores')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};