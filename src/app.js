const express = require('express');
const v1Router = require("./routes/index");
const app = express();
const port = process.env.port || 3000;

app.use("/api/v1", v1Router)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

 