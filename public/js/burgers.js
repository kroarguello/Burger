
$(function() {
  $(".change-devoured").on("click", function(event) {
    const id = $(this).data("id");
    const newDevor = $(this).data("newdevor");

    const newDevorState = {
      devoured: newDevor
    };

    
    $.ajax("/api/burgers/" + id, {
      type: "PATCH",
      data: newDevorState
    }).then(
      function() {
        console.log("devoured", newDevor);
        location.reload();
      }
    );
  });


//ADDING 

  $(".create-form").on("submit", function(event) {
  
    event.preventDefault();

    const newBurger = {
      name: $("#ca").val().trim(),
    };
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created burger");
        location.reload();
      }
    );
  });

});
