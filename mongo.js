const mongoose = require('mongoose')

const password = process.env.mongo_password;
if(!password) {
  console.log("Provide a passwod!")
  process.exit();
}


const mongoUrl = `mongodb+srv://41489054:${password}@cluster0.ugts7.mongodb.net/blog-db?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl);