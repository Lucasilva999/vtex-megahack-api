const router = require("express").Router();
const upload = require("../../../interfaces/multer/multer");

module.exports = ({ get, post, put, del }) => () => {
  router.get("/products", async (req, res) => {
    try {
      const data = await get.getAllProducts(req.body);
      res.status(200).json({
        data,
      });
    } catch (error) {
      console.log(error);
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
        });
      } catch (error) {
        console.log(error);
      }
    }
  );

  router.put("/product", async (req, res) => {
    try {
      const data = await put.editProduct(req.body);
      res.status(200).json({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  });

  router.delete("/product", async (req, res) => {
    try {
      const data = await del.deleteProduct(req.body._id);
      res.status(200).json({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  });

  return { router, endpoint: "/" };
};
