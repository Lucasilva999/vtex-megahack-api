module.exports = (dao) => {
  const getAllProducts = async () => {
    const products = await dao.getAllProducts();
    return products;
  };

  const identifyNearPoints = async (lat, lon) => {
    const clientLocation = [lat, lon];
    return dao.returnClosestProducts(clientLocation);
  };

  return {
    getAllProducts,
    identifyNearPoints,
  };
};
