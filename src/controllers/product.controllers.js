import cloudinary from "../lib/cloudinary.js";
import Product from "../models/products.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
    console.log("Get all products fetch");
  } catch (error) {
    console.log("Error in product.controllers.js in getAllProduct", error);
    res.status(500).json({ message: error });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findById(id);
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(products);
    console.log("Get products by id fetch");
  } catch (error) {
    console.log("Error in product.controller.js in getProductById", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const addProduct = async (req, res) => {
  const { name, price, description, category, productImage } = req.body;

  if (!name || !price || !description || !category || !productImage) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const uploadResponse = await cloudinary.uploader.upload(productImage);
  try {
    const newProduct = await Product.create({
      name: name,
      price: price,
      description: description,
      category: category,
      productImage: uploadResponse.secure_url,
    });

    if (!newProduct) {
      return res.status(400).json({ message: "Failed to create product" });
    }

    console.log("Produk berhasil ditambahkan");
    return res.status(201).json(newProduct); // Gunakan status code 201 untuk "Created"
  } catch (error) {
    console.error("Error in product.controller.js in addProduct:", error);

    // Berikan pesan error yang lebih spesifik
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deletedProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    console.log("Received product ID:", productId);
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Produk tidak ditemukan" });
    }

    return res.status(200).json({ message: "Produk berhasil dihapus", deletedProduct });
  } catch (error) {
    console.log("Error in product.controller.js in deleteProduct:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const newMenu = async (req, res) => {
  try {
    let products = await Product.find({});
    let newMenu = products.slice(-6);
    console.log("new collection fetch");
    res.status(200).json(newMenu);
  } catch (error) {
    console.log("Error in product.controller.js in newCollection", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const popularCoffee = async (req, res) => {
  try {
    let products = await Product.find({ category: "coffee" });
    let popular_coffe = products.slice(0, 6);
    console.log("popular products fetch");
    res.send(popular_coffe);
  } catch (error) {
    console.log("Error in product.controller.js in getProductsByCategory", error);
    res.status(500).json({ message: "Server Error" });
  }
};
