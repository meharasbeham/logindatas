
const {default:mongoose} = require("mongoose");
const databs="mongodb+srv://meha:meha@cluster0.zm7lfvv.mongodb.net/Authe";

function connectToDatabase() {  
     mongoose
    .connect(databs)
    .then((response)=>{
      if(response){
        console.log("connect");
      }
    })
    .catch((e) => console.log(e));
}

module.exports = {
  connectToDatabase,
};