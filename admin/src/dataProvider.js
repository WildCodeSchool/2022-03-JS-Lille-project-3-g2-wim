import { fetchUtils } from "react-admin";
import api from "../services/api";

const apiUrl = `${api.defaults.baseURL}`;

const httpClient = (url, options = {}) => {
  const newOptions = { ...options };
  if (!newOptions.headers) {
    newOptions.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  newOptions.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, newOptions);
};

export default {
  getList: (resource) => {
    const url = `${apiUrl}/${resource}`;
    return httpClient(url).then(({ json }) => ({
      data: json,
      total: json.length,
    }));
  },

  getMany: (resource) => {
    const url = `${apiUrl}/${resource}`;
    return httpClient(url).then(({ json }) => {
      return { data: json };
    });
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
      return {
        data: { ...json },
      };
    }),

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: { json }.id },
    })),

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: { ...params.data }, id: { json }.id })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: { ...params.data }, id: { json }.id })),
};
