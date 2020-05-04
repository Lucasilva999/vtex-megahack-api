module.exports = (dao) => {
  const createProduct = async (productInfo, productImage) => {
    const geo = [productInfo.lat, productInfo.lon];
    delete productInfo.lat;
    delete productInfo.lon;
    productInfo.geo = geo;
    return await dao.createProduct(productInfo, productImage);
  };

  const createOrder = async (orderInfo) => {
    for (let i = 0; i < orderInfo.products.length; i++) {
      await dao.editProduct(
        { _id: orderInfo.products[i].productId, sold: true },
        null
      );
    }

    return await dao.createOrder(orderInfo);
  };

  return {
    createProduct,
    createOrder,
  };
};
