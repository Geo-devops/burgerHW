$(document).ready(() => {
  
    $('#submit').on('click', (event) => {
        event.preventDefault();
        console.log('submit:')

        var newBurger = {
            burger_name: $('#burgerName').val().trim(),
            devoured: $("[name=devoured]:checked").val()
        };

      
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            () => {
                console.log('created new burger');
                location.reload(); 
            }
        );
    });

    
    $('.btnDevour').on('click', function(event) {
        var id = $(this).data('id');
        var devoured = event.target.getAttribute('data-newDevour');
        console.log('devoured', devoured);
        console.log(event.target.getAttribute('data-newDevour'));
        
        var newlyDevoured = {
            devoured: true 
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newlyDevoured
        }).then(
            () => {
                console.log('changed to devoured', devoured);
                location.reload(); 
            }
        )
    })

});