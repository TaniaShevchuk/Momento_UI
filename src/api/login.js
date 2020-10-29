import axios from "axios";

export const authenticateUser = ({ email, password }) => {
  return axios.get("/auth", { params: { email, password } }).catch((error) => {
    console.error("User auth failed.");
    console.error(error);
  });
};
