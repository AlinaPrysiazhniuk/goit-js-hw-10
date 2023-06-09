import Notiflix from 'notiflix';
import { renderMarkupCountries } from './index';
import { renderMarkupListCountries } from './index';
import { refs } from './index';

const BASE_URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = name =>
  fetch(`${BASE_URL}/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length >= 2 && data.length <= 10) {
        //якщо кількість країн від 2 до 10 то створити список із країн
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
        renderMarkupListCountries(data);
      } else {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';
        renderMarkupCountries(data);
        //якщо кількість країн === 1 - вивести картку з інформацією про країну
      }
    })
    .catch(error => {
      if (!error.ok) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        throw new Error(error.status);
      }
    });

//задача
