import api from "../api";

const getCommentsByBookId = async (id) => {
  try {
    const response = await api.get(`/yorumlar/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const postComment = async (data) => {
  try {
    const response = await api.post("/yorumlar", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async (id) => {
  try {
    const response = await api.delete(`/yorumlar/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getRepliesByCommentID = async (id) => {
  try {
    const response = await api.get(`/yorumlar/yanitlar/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCommentsByBookId,
  postComment,
  deleteComment,
  getRepliesByCommentID,
};
