
import Notiflix from 'notiflix';
import axios from "axios";

 axios.defaults.headers.common['x-api-key'] =
  'live_5nVcm90UjcYCONd9Zs2kschF0jkgo3s2QaiMfSC29wag3Gq3MUs29a71K8YESRT7';

export const apithecatApi = axios.create({
  baseURL: 'https://api.thecatapi.com',
});

export const fetchBreeds = () => {
  return apithecatApi
    .get('/v1/breeds')
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }

      return response.data;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const fetchCatImg = breedId => {
  return apithecatApi
    .get(`/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }

      return response.data;
    })
    .catch(error => {
     
      console.log(error);
      throw error;
    });
};
