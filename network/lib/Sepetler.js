import api from "../api";

const getCartItemsByUserId = async (userId) => {
  try {
    const response = await api.get(`/sepetler/${userId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteCartItem = async (itemId) => {
  try {
    const response = await api.delete(`/sepetler/${itemId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateCartItem = async (itemId, quantity) => {
  try {
    const response = await api.patch(`/sepetler/${itemId}`, quantity);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCartItemsByUserId,
  deleteCartItem,
  updateCartItem,
};
