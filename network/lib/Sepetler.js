import api from "../api";

const getCartItemsByUserId = async (userId) => {
  try {
    const response = await api.get(`/sepetler/musteri/${userId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createCartItem = async (cartItem) => {
  try {
    const response = await api.post("/sepetler", cartItem);
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
    const response = await api.put(`/sepetler/${itemId}`, quantity);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCartItemsByUserId,
  createCartItem,
  deleteCartItem,
  updateCartItem,
};
