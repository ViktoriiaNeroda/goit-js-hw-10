import { fetchBreeds, fetchCatImg } from './js/cat-api';
import './styles.css';
import SlimSelect from 'slim-select';

import { Report } from 'notiflix/build/notiflix-report-aio';

const ref = {
  selectBread: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  cssLoader: document.querySelector('.css-loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};


ref.loader.classList.remove('is-hidden');
ref.error.classList.add('is-hidden');
let isFirstSelection = false;

fetchBreeds()
  .then(data => {
      const optionsElement = data.map(element => ({
      text: element.name,
      value: element.id,
    }));

    new SlimSelect({
      select: ref.selectBread,
      data: optionsElement,
    });
  })

  .catch(error => {
     Notiflix.Report.warning(
      'Sorry, try again',
      {
        width: '320px',
        svgSize: '30px',
        messageFontSize: '16px',
        backgroundColor: 'purple',
        warning: {
          svgColor: 'gray',
          titleColor: 'black',
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

ref.selectBread.addEventListener('change', evt => {
  if (!isFirstSelection) {
    isFirstSelection = true;

        ref.loader.classList.add('is-hidden');
        Report.success(
      'Great!',
      ';) Okay',
      {
        width: '320px',
        svgSize: '50px',
        messageFontSize: '16px',
        backgroundColor: '#green',
        success: {
          svgColor: '#f6c218',
          titleColor: '#f6c218',
          messageColor: '#f6c218',
          buttonBackground: '#88aa31',
          buttonColor: '#f6c218',
          backOverlayColor: 'rgba(238,191,49,0.9)',
        },
      }
    );

    return;
  }
  ref.catInfo.innerHTML = '';
  ref.loader.classList.remove('is-hidden');
  const selectedBreedId = evt.currentTarget.value;

    fetchCatImg(selectedBreedId)
    .then(data => {
      const { breeds, url } = data[0];

      ref.catInfo.innerHTML = ` 
        <div class="cat-card">
          <div class="wrap-img">
            <img src="${url}" alt="${breeds[0].name}" width="300"/>
          </div>
          <div class="wrap-description">
            <h2>${breeds[0].name}</h2>
            <p class="description"><span class="wrap-key">Origin: </span>${breeds[0].origin}</p>
            <p class="description"><span class="wrap-key">Description: </span>${breeds[0].description}</p>
            <p class="description"><span class="wrap-key">Temperament: </span>${breeds[0].temperament}</p>
            
          </div>
        </div> 
        `;
      ref.loader.classList.add('is-hidden');
    })
    .catch(error => {
      Notiflix.Report.warning(
        'Sorry, try again',
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
});

// onFetchError();