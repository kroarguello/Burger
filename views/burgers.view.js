const renderBurger = require("./burger.view");

module.exports = function (props) {
  const { burgers } = props;
  return /*html*/ `
  

  <div class="container">
  <div class="row">
  <h1>Eat-Da-Burger</h1>
  </div>

  <div class="row">
    <div class="col-sm">
    
    <h2>New Burgers</h2>

    <ul>
      ${burgers
      .filter(burger => !burger.devoured)
      .map(burger => renderBurger(burger))
      .join("")}
    </ul>

    </div>
    <div class="col-sm">
      
    
    
  <h2>Create a Burger</h2>
  
  <form class="create-form">

    <div class="form-group">
      <label for="ca">Create a Burger with your favorite ingredient</label>
      <input type="text" id="ca" name="name">
    </div>
    <button type="submit">Create a Burger</button>
  </form>
    
    
      </div>
    <div class="col-sm">


    <h2>Devored Burger</h2>

    <ul>
    ${burgers
      .filter(burger => burger.devoured)
      .map(burger => renderBurger(burger))
      .join("")}
    </ul>


      </div>
  </div>
</div>
`
};