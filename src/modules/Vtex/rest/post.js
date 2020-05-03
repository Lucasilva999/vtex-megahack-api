module.exports = (dao) => {
  const createProduct = async (productInfo, productImage) => {
    const geo = [productInfo.lat, productInfo.lon];
    delete productInfo.lat;
    delete productInfo.lon;
    productInfo.geo = geo;
    return await dao.createProduct(productInfo, productImage);
  };

  return {
    createProduct,
  };
};
