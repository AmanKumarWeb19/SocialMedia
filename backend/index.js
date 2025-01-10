const express = require("express")
const { connection } = require("./configs/db")
const { postRouter } = require("./routes/Post.routes");
const cors = require("cors");
require("dotenv").config();
const app = express()


app.use(
  cors({
    origin: "*",
  })
);


app.use(express.json());

app.get("/", (req, res) => {
    res.send("HOMEPAGE");
  });

  app.use("/post", postRouter);

    
app.listen(process.env.port, async () => {
    try {
      await connection;
      console.log("Connected to DB");
    } catch (err) {
      console.log("Didnot Connect to db");
    }
    console.log(`running at ${process.env.port}`);
  });
  