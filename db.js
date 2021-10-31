const mongoose = require('mongoose');
const dbURI = "mongodb+srv://oshea1:Password1234@cluster0.hhhm6.mongodb.net/GymSys?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./locations');
