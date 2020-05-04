const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: false,
    },
    value: {
      type: Number,
      required: true,
    },
    geo: {
      type: [Number],
      index: "2d",
    },
    status: {
      type: String,
      enum: ["ON ANALYSIS", "APPROVED", "REJECTED"],
      default: "ON ANALYSIS",
    },
    sold: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
