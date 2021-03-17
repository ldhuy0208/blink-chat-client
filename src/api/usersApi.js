import { axiosClientAuth } from "./axiosClient";

export default {
  getMe: () => {
    return axiosClientAuth.get("/users/about");
  },
};
