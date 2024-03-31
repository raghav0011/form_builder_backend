const app = require("../server"); // Adjust the path if necessary

const server = app.listen(6000, () => {
  console.log(`Test server is running on port 5000`);
});

module.exports = server;
