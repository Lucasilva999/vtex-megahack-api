const mongoose = require("mongoose");

const ProductOrderSchema = mongoose.Schema(
  {
    products: [
      {
        productId: {
          type: mongoose.Schema.ObjectId,
          required: true,
        },
        productName: {
          type: String,
          required: true,
        },
        productValue: {
          type: Number,
          required: true,
        },
      },
    ],
    orderValue: {
      type: Number,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["SOLD", "BEING_PACKED", "PREPARING_FOR_DELIVERY", "DELIVERED"],
      default: "SOLD",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ProductOrder", ProductOrderSchema);
