const BASE_URL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = name =>
  fetch(
    `${BASE_URL}?name.official=${name}&capital=${capitalCoutry}?&population=${populationCountry}&flags.svg=${flag}&languages=${languages}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response;
  });
