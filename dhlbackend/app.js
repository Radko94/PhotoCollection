const express = require("express");
const helmet = require("helmet");

const photoRoutes = require("./routes/photo.router");

const port = process.env.PORT ? process.env.PORT : 3100;

const app = express();

app.use(helmet());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});

app.use("/photos", photoRoutes);

app.listen(port, () => console.log(`server listening on port: ${port}`));
