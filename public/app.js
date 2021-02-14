$(()) => { 
    $(".devour-form").on("submit", function(event){
        event.preventDefault();

        var burgerid = $(this).children("burger_id").val()
        var devoured = $(this).children("burgerid").attr("data-devoured")

        devoured = devoured === "0" ? 1 : 0

        $.ajax({
            method: "PUT",
            url: 
        })
    })
}