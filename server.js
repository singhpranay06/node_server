const express = require("express");
const app = express();
  
app.get("/", (req, res) => {
  res.send("Hello World!");
});
  
app.post("/data",(req,res) => {

    console.log("react says hi!!!!!");
    res.redirect("/");
});







const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));