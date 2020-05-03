module.exports = (dao) => {
  const editProduct = async (productInfo, productImage) => {
    return await dao.editProduct(productInfo, productImage);
  };

  return {
    editProduct,
  };
};
