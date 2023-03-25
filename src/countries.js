import { fetchCountries } from './fetchCountries';

const refs = {
  inputSearchBox: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const enterDataSearchCountry = event => {
  event.preventDefault();

  const seekedCountry = refs.inputSearchBox.ariaValueMax.trim();
  fetchCountries(seekedCountry);
};

refs.inputSearchBox.addEventListener('input', enterDataSearchCountry);
