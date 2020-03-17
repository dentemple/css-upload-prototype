const app = require("./app");
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => void console.log(`We are rocking on ${PORT}.`));
