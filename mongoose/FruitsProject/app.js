const mongoose = require('mongoose');
mongoose.connect("mongodb://locahost:27017/fruitsDB",{ useUrlparser : true});


const fruitSchema = new mongoose.Schema ({ //create a new schema
  name : String,  // variable name : datatype
  rating :Number,
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema); //
const fruit = new Fruit({     //creating a new document
  name :"apple",
  rating:7,
  review:"pretty solid as a fruit"
});

fruit.save();
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person =mongoose.model("person",personSchema);
const person = new Person({
  name:"john",
  age :37
  });
person.save();
