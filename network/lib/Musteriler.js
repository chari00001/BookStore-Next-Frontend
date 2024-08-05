import api from "../api";

const login = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const register = async (credentials) => {
  try {
    const response = await api.post("/register", JSON.stringify(credentials));
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
  register,
};
