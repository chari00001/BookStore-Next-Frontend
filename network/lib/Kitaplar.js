import api from "../api";

const getBooks = async () => {
  try {
    const response = await api.get("/kitaplar");
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getBookById = async (id) => {
  try {
    const response = await api.get(`/kitaplar/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBooks,
  getBookById,
};
