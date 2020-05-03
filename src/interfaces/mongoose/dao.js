const fs = require("fs");
const Product = require("../../infra/database/mongoose/models/Product");

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
      await product.save();
    }

    return product;
  };

  const deleteProduct = async (id) => {
    return Product.findByIdAndRemove({ _id: id });
  };

  return {
    getAllProducts,
    createProduct,
    editProduct,
    deleteProduct,
  };
};
