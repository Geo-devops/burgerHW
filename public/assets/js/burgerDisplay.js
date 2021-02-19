$(document).ready(() => {
    //submit
    $('#submit').on('click', (event) => {
        event.preventDefault();
        console.log('submit:')

        var newBurger = {
            burger_name: $('#burgerName').val().trim(),
            devoured: $("[name=devoured]:checked").val()
        };

        //post
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            () => {
                console.log('created new burger');
                location.reload(); //reload to update
            }
        );
    });

    //btnDevour
    $('.btnDevour').on('click', function(event) {
        var id = $(this).data('id');
        var devoured = event.target.getAttribute('data-newDevour');
        console.log('devoured', devoured);
        console.log(event.target.getAttribute('data-newDevour'));
        
        var newlyDevoured = {
            devoured: true //not devoured: devoured
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newlyDevoured
        }).then(
            () => {
                console.log('changed to devoured', devoured);
                location.reload(); //reload to update
            }
        )
    })

});