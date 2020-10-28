/*
Setup the burgers.views.js to use the props data you need to pass into it.

Create a button in burgers.views.js that will submit the user input into the database.

*/

module.exports = function (props) {
  const {burgers} = props;
 return /*html*/ `
  <h1>Eat-Da-Burger</h1>

  

  <h2>Add a Burger</h2>
  <form class="create-form">

    <div class="form-group">
      <label for="ca">Create a Burger:</label>
      <input type="text" id="ca" name="name">
    </div>

    <button type="submit">Create burger</button>
  </form>
`
};