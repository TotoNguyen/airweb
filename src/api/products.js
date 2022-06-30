import { handleResponse, handleError } from './api.js';

export function getProducts() {
  return fetch(`${process.env.VUE_APP_API_BASE_URL}/products`)
    .then(handleResponse)
    .catch(handleError);
}

export function getProduct(id) {
  return fetch(`${process.env.VUE_APP_API_BASE_URL}/products/${id}`)
    .then(handleResponse)
    .catch(handleError);
}