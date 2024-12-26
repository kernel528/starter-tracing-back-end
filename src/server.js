require("dotenv").config();

const { PORT = 5002 } = process.env;

const app = require("./app");
const listener = () => console.log(`Listening on Port https://localhost:${PORT}!`);
app.listen(PORT, listener);
