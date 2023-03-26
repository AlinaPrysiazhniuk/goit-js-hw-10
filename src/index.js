import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputSearchBox: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const enterDataSearchCountry = event => {
  event.preventDefault();

  const seekedCountry = refs.inputSearchBox.value;
  console.log(seekedCountry);
  fetchCountries(seekedCountry);
};

refs.inputSearchBox.addEventListener(
  'input',
  debounce(enterDataSearchCountry, 300)
);
