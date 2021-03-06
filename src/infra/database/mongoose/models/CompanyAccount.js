const mongoose = require("mongoose");

const CompanyAccountSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companySize: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CompanyAccount", CompanyAccountSchema);
