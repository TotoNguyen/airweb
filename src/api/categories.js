import { handleResponse, handleError } from './api.js';

export function getCategories() {
  return fetch(`${process.env.VUE_APP_API_BASE_URL}/categories`)
    .then(handleResponse)
    .catch(handleError);
}

export function getCategory(id) {
  return fetch(`${process.env.VUE_APP_API_BASE_URL}/categories/${id}`)
  .then(handleResponse)
  .catch(handleError);
}