const apiKey = 'live_5nVcm90UjcYCONd9Zs2kschF0jkgo3s2QaiMfSC29wag3Gq3MUs29a71K8YESRT7';

export const fetchBreeds = () => {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const fetchCatImg = breedId => {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};
