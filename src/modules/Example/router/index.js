const router = require("express").Router();

module.exports = ({ get, post, put, del }) => () => {
  return { router, endpoint: "/" };
};
