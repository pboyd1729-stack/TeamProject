const mongoose = require('mongoose');
// Define the Product schema
const productSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: true
  },
  storeName: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Create and export the Product model
module.exports = mongoose.model('Product', productSchema);