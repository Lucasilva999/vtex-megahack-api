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

  const editProduct = async (id, productData) => {
    const product = await Product.findOne({ _id: id });
    if (productData.name) product.name = productData.name;
    if (productData.category) product.category = productData.category;
    if (productData.description) product.description = productData.description;
    if (productData.productImage)
      product.productImage = productData.productImage;
    if (productData.lat) product.lat = productData.lat;
    if (productData.long) product.long = productData.long;
    await product.save();
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
