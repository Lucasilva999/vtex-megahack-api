const get = require("./get");
const post = require("./post");
const put = require("./put");
const del = require("./delete");

module.exports = (dao) => {
  return {
    get: get(dao),
    post: post(dao),
    put: put(dao),
    del: del(dao),
  };
};
