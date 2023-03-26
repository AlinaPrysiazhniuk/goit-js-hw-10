import Notiflix from 'notiflix';

const BASE_URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = name =>
  fetch(`${BASE_URL}/${name}?fields=name,capital,population,flags,languages`)
    .then(response => response.json())
    .then(data => {
      console.log({ data });
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      console.warn(error);
    });
