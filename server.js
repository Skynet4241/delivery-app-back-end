const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(
    "mongodb+srv://admin:p9bOY39l7Tzd1BON@cluster0.jvlu9er.mongodb.net/contacts-collections?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(PORT, () => console.log("Database connection successful"))
  )
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
