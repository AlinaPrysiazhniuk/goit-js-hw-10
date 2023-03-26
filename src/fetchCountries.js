const BASE_URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = name =>
  fetch(`${BASE_URL}/${name}?fields=name,capital,population,flags,languages`)
    .then(response => response.json())
    .then(data => console.log({ data }))
    .catch(error => {
      console.warn(error);
    });
