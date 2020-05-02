module.exports = (dao) => {
  const getAllProducts = async () => {
    const products = await dao.getAllProducts();
    return products;
  };

  return {
    getAllProducts,
  };
};
