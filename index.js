// index.js
import data from './data';
import template from './template.hbs';

const renderData = (data) => {
  const app = document.getElementById('app');
  app.innerHTML = template({ data });
};

renderData(data);
