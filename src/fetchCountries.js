import Notiflix from 'notiflix';
import { renderMarkupCountries } from './index';
import { renderMarkupListCountries } from './index';

const BASE_URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = name =>
  fetch(`${BASE_URL}/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if (!response.ok) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length >= 2 && data.length <= 10) {
        //якщо кількість країн від 2 до 10 то створити список із країн
        renderMarkupListCountries(data);
      } else {
        renderMarkupCountries(data);
        //якщо кількість країн === 1 - вивести картку з інформацією про країну
      }
    })
    .catch(error => {
      console.warn(error);
    });
