const Router = require("./router");
const Rest = require("./rest");
const firestoreDao = require("../../interfaces/firebase/dao");
const mongooseDao = require("../../interfaces/mongoose/dao");

module.exports = () => {
  const rest = Rest(mongooseDao);
  const router = Router(rest);

  return { router };
};
