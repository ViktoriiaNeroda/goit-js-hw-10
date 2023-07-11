import axios from 'axios';
import Notiflix from 'notiflix';


 axios.defaults.headers.common['x-api-key'] =
  'live_5nVcm90UjcYCONd9Zs2kschF0jkgo3s2QaiMfSC29wag3Gq3MUs29a71K8YESRT7';

export const apithecatApi = axios.create({baseURL: 'https://api.thecatapi.com/v1'});

 export const fetchBreeds = () => {
   return apithecatApi.get(`/breeds/`)
     .then(response => {
      
      return response.data;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const fetchCatImg = breedId => {
  return apithecatApi
    .get(`/images/search?breed_ids=${breedId}`)
    .then(response => {
     
    })
     .catch(error => {
      console.log(error);
      throw error;
    });
};