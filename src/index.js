import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

fetch('https://restcountries.com/#api-endpoints-v3-name')
  .then(response => {
    //тут отримуємо відповідь на запит
    //console.log(response); //обʼєкт зі службовою інформацією із сервера

    if (!response.ok) {
      //якщо запит відбувся не успішно, то видати помилку
      //fetch не розуміє 400 помилки (це помилкаи сервера), тому перевірку запиту на помилку потрібно прописувати самостійно
      throw new Error(response.status);
    }

    return response; //повертаємо дані із серверу у форматі json
  })
  .then(data => {
    //отримуємо відповідь від сервера у потрібному нам форматі, на рядку 12 ми повернули відповідь від сервера і перевели дані у формат json
    console.log(data);
  })
  .catch(error => {
    console.warn(error);
  });
