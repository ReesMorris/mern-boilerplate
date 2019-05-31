const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  if (db === '')
    return console.log('[MongoDB] No URI set; skipping connection');
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('[MongoDB]: Connected successfully');
  } catch (err) {
    console.error(`[MongoDB]: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
