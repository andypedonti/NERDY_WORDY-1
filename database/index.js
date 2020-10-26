//Connect to Mongo database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://test:test@cluster0.q6d8s.mongodb.net/nerdy_wordy?retryWrites=true&w=majority').then(
  () => {
    console.log('CONNECTED TO MONGO');
  },
  (err) => {
    console.log('ERROR CONNECTING TO MONGO:', err);
  }
);

module.exports = mongoose.connection;
