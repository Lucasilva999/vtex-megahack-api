const Product = require("../../infra/database/mongoose/models/Product");
const ProductOrder = require("../../infra/database/mongoose/models/ProductOrder");

module.exports = () => {
  const getAllProducts = async () => {
    return await Product.find({});
  };

  const createProduct = async (productInfo, productImage) => {
    let product = new Product({ ...productInfo, productImage });
    await product.save();
    return product;
  };

  const editProduct = async (productData, productImage) => {
    const product = await Product.findById(productData._id);
    if (product) {
      if (productData.name) product.name = productData.name;
      if (productData.category) product.category = productData.category;
      if (productData.description)
        product.description = productData.description;
      if (productImage) product.productImage = productImage;
      if (productData.lat) product.lat = productData.lat;
      if (productData.long) product.long = productData.long;
      if (productData.status) product.status = productData.status;
      if (productData.sold) product.sold = productData.sold;
      await product.save();
    }

    return product;
  };

  const deleteProduct = async (id) => {
    return Product.findByIdAndRemove({ _id: id });
  };

  const returnClosestProducts = async (clientLocation) => {
    return await Product.find({
      geo: {
        $near: clientLocation,
        $maxDistance: 10 / 111.12,
      },
    });
  };

  const createOrder = async (orderInfo) => {
    return await ProductOrder.create(orderInfo);
  };

  const updateOrderStatus = async (orderInfo) => {
    const order = await ProductOrder.findById(orderInfo._id);
    if (order) {
      if (orderInfo.orderStatus) order.orderStatus = orderInfo.orderStatus;
      await order.save();
    }
    return order;
  };

  return {
    getAllProducts,
    createProduct,
    editProduct,
    deleteProduct,
    returnClosestProducts,
    createOrder,
    updateOrderStatus,
  };
};
