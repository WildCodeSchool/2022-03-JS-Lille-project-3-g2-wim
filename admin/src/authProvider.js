import api from "@services/api";

export default {
  login: async (params) => {
    try {
      const formData = {
        email: params.username,
        password: params.password,
      };
      const { data } = await api.post(`/auth/admin`, formData);
      localStorage.setItem("token", data.token);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject();
    }
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    if (localStorage.getItem("token")) {
      return Promise.resolve();
    }
    return Promise.reject();
  },
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  getIdentity: () => {
    return Promise.resolve();
  },
  getPermissions: () => {
    return Promise.resolve();
  },
};
