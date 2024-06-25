const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("MongoDB connecté");
    }catch(err) {
        console.log(err);
        process.exit();
    }
};

module.exports = connectDB;