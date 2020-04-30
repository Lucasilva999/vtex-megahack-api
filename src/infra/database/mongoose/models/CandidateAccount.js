const mongoose = require("mongoose");

const CandidateAccountSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nationality: {
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
  habilities: [
    {
      name: {
        type: String,
        required: true,
      },
      level: {
        type: Number,
        required: true,
      },
    },
  ],
  cv: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CandidateAccount", CandidateAccountSchema);
