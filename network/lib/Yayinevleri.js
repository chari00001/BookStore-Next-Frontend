import api from "../api";

const getPublishers = async () => {
  try {
    const response = await api.get("/yayinevleri");
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getPublisherById = async (id) => {
  try {
    const response = await api.get(`/yayinevleri/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPublishers,
  getPublisherById,
};
