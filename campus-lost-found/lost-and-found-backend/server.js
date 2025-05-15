const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use('/api/items', itemRoutes);

// DB Connection + Start Server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('MongoDB connection error:', err));
