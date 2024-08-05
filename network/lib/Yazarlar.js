import api from "../api";

const getAuthors = async () => {
  try {
    const response = await api.get("/yazarlar");
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAuthorById = async (id) => {
  try {
    const response = await api.get(`/yazarlar/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAuthors,
  getAuthorById,
};
