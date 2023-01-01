const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    author: String,
    body: String
});

const blog = mongoose.model("blog",blogSchema);

const blog1  = new blog({
    title:'Lorem ipsum dolor',
    author:'mesbahi',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros ex, bibendum condimentum dignissim et, pulvinar bibendum sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis convallis massa, ac ultrices orci. '
});

mongoose.set('strictQuery', false);

  mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(res => {
    console.log("connected with success")
    
  })
  .catch(err => {
    console.log("Error : \n",err)
  });
  
  blog1.save();


