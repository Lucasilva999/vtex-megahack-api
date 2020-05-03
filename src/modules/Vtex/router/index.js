const router = require("express").Router();
const upload = require("../../../interfaces/multer/multer");

module.exports = ({ get, post, put, del }) => () => {
  router.get("/products", async (req, res) => {
    try {
      const data = await get.getAllProducts(req.body);
      res.status(200).json({
        data,
        message: "Produtos retornados com sucesso",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        data: null,
        message: "Internal Server Error",
      });
    }
  });

  router.post(
    "/product/create",
    upload.single("productImage"),
    async (req, res) => {
      try {
        const data = await post.createProduct(req.body, req.file.path);
        res.status(201).json({
          data,
          message: "Produto cadastrado com sucesso",
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          data: null,
          message: "Internal Server Error",
        });
      }
    }
  );

  router.put("/product", upload.single("productImage"), async (req, res) => {
    try {
      let data = null;
      if (req.file) data = await put.editProduct(req.body, req.file.path);
      else data = await put.editProduct(req.body, null);

      if (!data) {
        res.status(400).json({
          data,
          message: "Produto não encontrado",
        });
      }
      res.status(200).json({
        data,
        message: "Produto alterado com sucesso",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        data: null,
        message: "Internal Server Error",
      });
    }
  });

  router.delete("/product", async (req, res) => {
    try {
      const data = await del.deleteProduct(req.body._id);
      res.status(200).json({
        data,
        message: "Produto removido com sucesso",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        data: null,
        message: "Internal Server Error",
      });
    }
  });

  return { router, endpoint: "/" };
};
