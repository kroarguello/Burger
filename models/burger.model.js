const Base = require("./base.model");
class Burger extends Base {
  findAll(){
    return this.query("SELECT * FROM burgers", []);
  }
  create(burgerData){
    return this.query("INSERT INTO burgers SET ?", [burgerData]);
  }
  update(values, conditions){
    return this.query("UPDATE burgers SET ? WHERE ?", [values, conditions]);
  }
  
}

module.exports = Burger;
