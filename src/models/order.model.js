import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    payments: {},
    name: {
      type: String,
      required: true,
    },
    table: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["diproses", "selesai"],
      default: "diproses",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
