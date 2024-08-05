import api from "../api";

const getCategories = async () => {
  try {
    const response = await api.get("/kategoriler");
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getCategoryById = async (id) => {
  try {
    const response = await api.get(`/kategoriler/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCategories,
  getCategoryById,
};
