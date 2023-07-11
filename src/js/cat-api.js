import axios from 'axios';
import Notiflix from 'notiflix';


 axios.defaults.headers.common['x-api-key'] =
  'live_5nVcm90UjcYCONd9Zs2kschF0jkgo3s2QaiMfSC29wag3Gq3MUs29a71K8YESRT7';

const BASE_URL = 'https://api.thecatapi.com/v1';

export const fetchBreeds = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds?`);
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

//2
export const fetchCatImg = async breedId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/images/search?&breed_ids=${breedId}`
    );
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};