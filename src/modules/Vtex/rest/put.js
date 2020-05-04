module.exports = (dao) => {
  const editProduct = async (productInfo, productImage) => {
    return await dao.editProduct(productInfo, productImage);
  };

  const updateOrderStatus = async (orderInfo) => {
    return await dao.updateOrderStatus(orderInfo);
  };

  return {
    editProduct,
    updateOrderStatus,
  };
};
