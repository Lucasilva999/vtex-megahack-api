module.exports = (dao) => {
  const editProduct = async (data) => {
    const id = data._id;
    delete data._id;
    return await dao.editProduct(id, data);
  };

  return {
    editProduct,
  };
};
