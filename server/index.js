const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "..", "public");

app.disable("etag");

app.get("/*", function (req, res, next) {
  res.setHeader("Last-Modified", new Date().toUTCString());
  next();
});

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
