module.exports = (dao) => {
  const createProduct = async (productInfo, productImage) => {
    return await dao.createProduct(productInfo, productImage);
  };

  return {
    createProduct,
  };
};
