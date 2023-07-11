import axios from 'axios';
import Notiflix from 'notiflix';


axios.defaults.headers.common['x-api-key'] =
  'live_5nVcm90UjcYCONd9Zs2kschF0jkgo3s2QaiMfSC29wag3Gq3MUs29a71K8YESRT7';

export const apithecatApi = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
});

 export const fetchBreeds = () => {
  return apithecatApi
    .get('/breeds')
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
    .get(`/images/search?breed_ids=${breedId}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }

      return response.data;
    })
    .catch(error => {
      Notiflix.Report.warning(
        'Sorry, try again!',
        {
          width: '320px',
          svgSize: '30px',
          messageFontSize: '16px',
          backgroundColor: 'purple',
          warning: {
            svgColor: '#f6c218',
            titleColor: '#f6c218',
            messageColor: '#f6c218',
            buttonBackground: '#08aa31c2',
            buttonColor: '#f6c218',
            backOverlayColor: 'rgba(238,191,49,0.9)',
          },
        }
      );
      console.log(error);
      throw error;
    });
}; 