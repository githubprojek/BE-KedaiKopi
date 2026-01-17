import Order from "../models/order.model.js";
import midtransClient from "midtrans-client";
import dotenv from "dotenv";
dotenv.config();

export const order = async (req, res) => {
  try {
    const { cart, name, table } = req.body;

    if (!cart) {
      console.log("no cart data or payments");
      res.status(401).json({ message: error });
    }
    let total = 0;
    cart.map((i) => {
      total += i.price;
    });

    const orders = new Order({
      products: cart,
      payments: total,
      name,
      table,
    });

    await orders.save();
    res.status(201).json({ message: "Pesanan berhasil dibuat, Silahkan ditunggu!", orders });
    console.log("Pesanan berhasil dibuat", orders);
  } catch (error) {
    console.log("Pesanan gagal dibuat", error);
    res.status(500).json({ message: error.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const getOrder = await Order.find({}).populate("products", "name price category");

    console.log("Order Data Sent to Frontend:", JSON.stringify(getOrder, null, 2));
    res.status(201).json({ message: "Pesanan berhasil didapatkan", data: getOrder });
  } catch (error) {
    console.log("gagal mendapatkan pesanan", error);
    res.status(500).json({ message: error.message });
  }
};

export const statusOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!id) {
      res.status(404).json({ message: error.message });
      console.log("Data tdk ditemukan", error);
    }
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });

    if (!order) {
      console.log("Data tdk ditemukan", error);
      res.status(404).json({ message: error.message });
    }
    res.status(201).json({ message: "Status berhasil diganti", order });
    console.log("Berhasil diganti", order);
  } catch (error) {
    console.log("Gagal mengubah status", error);
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const getOrder = await Order.findById(id);
    if (!getOrder) {
      console.log("Data tidak ditemukan", error);
      res.status(404).json({ message: "Data tidak ditemukan" });
    }
    res.status(201).json({ message: "Data berhasil didapatkan", data: getOrder });
    console.log("Data orderan :", getOrder);
  } catch (error) {
    console.log("Gagal mendapatkan data", error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      console.log("Data tidak ditemukan", error);
      res.status(404).json({ message: error.message });
    }
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      console.log("Data tidak ditemukan", error);
      res.status(404).json({ message: error.message });
    }
    res.status(201).json({ message: "Data berhasil dihapus", order });
    console.log("Data berhasil dihapus", order);
  } catch (error) {
    console.log("Gagal menghapus data", error);
    res.status(500).json({ message: error.message });
  }
};
