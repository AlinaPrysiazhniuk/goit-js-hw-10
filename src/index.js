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

  const seekedCountry = refs.inputSearchBox.value.trim();
  console.log(seekedCountry);
  fetchCountries(seekedCountry);
};

refs.inputSearchBox.addEventListener(
  'input',
  debounce(enterDataSearchCountry, 300)
);

function createCountryInfo({ name, capital, population, flags, languages }) {
  const countryEl = `<div>
  <img src='${flags.svg}' alt='${name}' width='40' height='40'>
  <p>${name.official}</p>
  <p>Capital:${capital}</p><p>Population:${population}</p><p>${languages}</p></div>`;
  refs.countryInfo.insertAdjacentHTML('beforeend', countryEl);
}

function createCountryList({ name, flags }) {
  const countryElItem = `<ul>
  <img src='${flags.svg}' alt='${name}' width='40' height='40'>
  <p>${name.official}</p></ul>`;
  refs.countryList.insertAdjacentHTML('beforeend', countryElItem);
}

export const renderMarkupListCountries = array => {
  array.forEach(item => createCountryList(item));
};

export const renderMarkupCountries = array => {
  array.forEach(el => createCountryInfo(el));
};
