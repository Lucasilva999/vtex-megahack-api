module.exports = (dao) => {
  const deleteProduct = async (id) => {
    return await dao.deleteProduct(id);
  };

  return {
    deleteProduct,
  };
};
