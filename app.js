const express = require("express");
const app = express();
const router = require("./routes");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/", router)

app.listen(PORT, console.log(`Server started on port ${PORT}`));