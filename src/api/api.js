import axios from "axios";

const useAxios = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "44851319-3174-43d9-9329-5d97ad880226",
  },
});

const getUsers = (currentPage, pageSize) => {
  return useAxios
    .get(`users?page=${currentPage}&count=${pageSize}&limit=100`)
    .then((response) => response.data);
};

const unfollow = (userId) => {
  return useAxios.delete(`follow/${userId}`).then((response) => response.data);
};

const follow = (userId) => {
  return useAxios.post(`follow/${userId}`).then((response) => response.data);
};

const getAuth = () => {
  return useAxios.get("auth/me").then((response) => response.data);
};

export const userApi = {
  getUsers,
  unfollow,
  follow,
  getUserProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object");
    return profileAPI.getUserProfile(userId);
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return useAxios.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return useAxios.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return useAxios.put(`profile/status`, {
      status,
    });
  },
};

export const authApi = {
  getAuth,
};
