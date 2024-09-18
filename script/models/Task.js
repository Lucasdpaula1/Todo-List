const { up, down } = require("../migrations/Task");
const DeleteModel = async () => {
  try {
    await down();
    console.log("tabela deletada com sucesso");
  } catch (error) {
    console.log(error);
  }
};
const createModel = async () => {
  try {
    await up();
    console.log("tabela criada com sucesso");
  } catch (error) {
    console.log(error);
  }
};

class Task {
  constructor(description, atcive) {
    this.description = description;
    this.atcive = atcive;
  }
}
