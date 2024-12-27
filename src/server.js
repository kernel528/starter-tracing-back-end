require("dotenv").config();

const { PORT = 5002 } = process.env;

const app = require("./app");
const listener = () => console.log(`Listening on Port http://localhost:${PORT}!`);
app.listen(PORT, listener);
