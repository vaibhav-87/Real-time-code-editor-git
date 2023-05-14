const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://yumfood:vaibhav87@cluster0.zrw9m5v.mongodb.net/yumfoodmern?retryWrites=true&w=majority";
const mongoURI = "mongodb+srv://vaiasawaleva:vaibhavasa@cluster0.ye1usga.mongodb.net/real_time_code_editor?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected Successfully");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
