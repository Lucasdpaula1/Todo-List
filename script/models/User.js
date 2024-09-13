const { up } = require("../migrations/Table");
try {
  up();
} catch (error) {
  console.log(error);
}
