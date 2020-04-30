const express = require("express");
const router = express.Router();

module.exports = () => {
  const VtexRouter = require("../../modules/Vtex")().router();
  router.use(VtexRouter.endpoint, VtexRouter.router);
  return router;
};
