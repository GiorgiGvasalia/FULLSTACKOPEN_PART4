require('dotenv').config()

const PORT = process.env.PORT
const password = process.env.mongo_password;
if(!password) {
  console.log("Provide a passwod!")
  process.exit();
}

const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? `mongodb+srv://41489054:${password}@cluster0.ugts7.mongodb.net/blog-db-test?retryWrites=true&w=majority`
  : `mongodb+srv://41489054:${password}@cluster0.ugts7.mongodb.net/blog-db?retryWrites=true&w=majority`

module.exports = {
  MONGODB_URI,
  PORT
}