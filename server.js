//const express = require('express')
import express from "express";
//const color = require('colors')
import color from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from "url";

//configure env
dotenv.config();

//database config
connectDB();

//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname , './client/build')))

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api

app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'));
})
/*app.get("/", (req, res) => {
  res.send("<h1>Welcome to ECommerce App</h1>");
});*/ //aa deploy karta pela nu chhe 



//port
// const port = 8080 defined in env file
const port = process.env.port || 8080;

//run listen
app.listen(port, () => {
  //console.log(`Server Running on ${port}`.bgCyan.white);
});
//till vid 17
// import express from "express";
// import colors from "colors";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoute.js";
// import categoryRoutes from "./routes/categoryRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import cors from "cors";

// //configure env
// dotenv.config();

// //databse config
// connectDB();

// //rest object
// const app = express();

// //middelwares
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// //routes
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);

// //rest api
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to ecommerce app</h1>");
// });

// //PORT
// const PORT = process.env.PORT || 8080;

// //run listen
// app.listen(PORT, () => {
//   //console.log(
//     `Server Running on mode on port ${PORT}`.bgCyan
//       .white
//   );
// });
