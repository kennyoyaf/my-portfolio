const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    return await mongoose.connect(process.env.MONGODB_URI, {});
  } catch (error) {
    console.log(`DB connection failed ${error}`);
  }
};

module.exports = { connectDB };
