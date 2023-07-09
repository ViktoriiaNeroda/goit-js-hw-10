import { refs } from './ref';
import { loadImage } from '../index';

export { handleLoadingActive, handleLoadingDisable };

function handleLoadingActive() {
  refs.breedsListreedsList.style.visibility = 'hidden';
  refs.loaderRef.classList.add('active');
  loadImage.classList.add('active');
}

function handleLoadingDisable() {
  refs.breedsListreedsList.style.visibility = 'visible';
  refs.loaderRef.classList.remove('active');
  loadImage.classList.remove('active');
}