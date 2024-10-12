const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'driver' },
  pickupLocation: { type: String, required: true },
  dropLocation: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'accepted', 'rejected', 'ongoing', 'completed'], 
    default: 'pending' 
  },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('booking', bookingSchema);
module.exports = Booking;
