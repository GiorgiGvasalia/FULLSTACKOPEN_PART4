const mongoose = require('mongoose')

const password = process.env.mongo_password;
if(!password) {
  console.log("Provide a passwod!")
  process.exit();
}

const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? `mongodb+srv://41489054:${password}@cluster0.ugts7.mongodb.net/blog-db-test?retryWrites=true&w=majority`
  : `mongodb+srv://41489054:${password}@cluster0.ugts7.mongodb.net/blog-db?retryWrites=true&w=majority`


mongoose.connect(MONGODB_URI);




const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  })
  

module.exports = mongoose.model('Blog', blogSchema);