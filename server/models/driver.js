const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
  type:{type: String, required: true, default: "undefined"},
  registrationNo: { type: String, required: true, default: "undefined"},
  licenseNo: { type: String, required: true, default: "undefined" },
  status: { type: String, required: true, default: "undefined" }
});

module.exports = mongoose.model('driver', driverSchema);
