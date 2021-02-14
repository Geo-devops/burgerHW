$(() => { 
    $(".devour-form").on("submit", function(event){
        event.preventDefault();

        var burgerid = $(this).children("burger_id").val()
        var devoured = $(this).children("burgerid").attr("data-devoured")

        devoured = devoured === "0" ? 1 : 0

        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + burgerid, 
            data: {devoured:devoured}
        }).then(function(data){
            location.reload()
        })
    })
    $(".create-form").on("submit", (event) => {
        event.preventDefault();
        const newBurger = {
            name: $("#enter_text").val().trim(), 
            devoured: 0

        };
           
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created new Burger");
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });
      }); 