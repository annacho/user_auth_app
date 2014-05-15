$(document).ready(function() {

	$('input[type=email]').keyup(function() {
		//set email variable
		var email = $(this).val();

		//validate filled in
		if ( email  == '') {
        alert('Field is empty. Please input your email.');
        return false;
    }
	}); 

	$('input[type=password]').keyup(function() {
		//set password variable
		var pswd = $(this).val();

		//validate the length
		if ( pswd.length < 8 ) {
			$('#length').removeClass('valid').addClass('invalid');
		} else {
			$('#length').removeClass('invalid').addClass('valid');
		}

		//validate letter
		if ( pswd.match(/[A-z]/) ) {
			$('#letter').removeClass('invalid').addClass('valid');
		} else {
			$('#letter').removeClass('valid').addClass('invalid');
		}

		//validate capital letter
		if ( pswd.match(/[A-Z]/) ) {
			$('#capital').removeClass('invalid').addClass('valid');
		} else {
			$('#capital').removeClass('valid').addClass('invalid');
		}

		//validate number
		if ( pswd.match(/\d/) ) {
			$('#number').removeClass('invalid').addClass('valid');
		} else {
			$('#number').removeClass('valid').addClass('invalid');
		}

	}).focus(function() {
		$('#pswd_info').show();
	}).blur(function() {
		$('#pswd_info').hide();
	}); 

	// $('input[type=password_confirmation]').keyup(function() {
	// // set password confirmation variable
	// var pswdconfirm = $(this).val();

	// //validate password confirmation
	// if ( pswd != pswdconfirm ) {
	// 	$('#password_confirmation').removeClass('valid').addClass('invalid');
	// } else {
	// 	$('#password_confirmation').removeClass('invalid').addClass('valid');
	// }

	// }).focus(function() {
	// 	$('#pswd_info').show();
	// }).blur(function() {
	// 	$('#pswd_info').hide();
	// }); 

	$(':checkbox').on('click', function(){

		var row 		= $(this).parents('tr'),
				user_id = $(this).attr('data-user-id');
		
		// console.log(task_id)

		$.ajax({

			url: "/users/" + user_id,
			type: 'PUT',
			data: {
				user: {
					"online": true
				}
			},
			success: function(data){ 
				console.log(data);
				if (data == "1") {
					$(row).hide( "slow" );
				}
				else {
					console.log("false");
					$(row).addClass("failed");
				}
			}

		});

	});

});