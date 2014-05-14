// $(function() {
//   $( "form#add_" ).submit(function() {
//     var inputVal = $("#Email").val();
//     $(document).trigger("clear-alert-id.example");
//     if (inputVal.length < 3) {
//       $(document).trigger("set-alert-id-example", [
//         {
//           message: "Please enter at least 3 characters",
//           priority: "error"
//         },
//         {
//           message: "This is an info alert",
//           priority: "info"
//         }
//       ]);
//     }
//   });
// });

// $(function() {
//   $('form#add_validation_to_ajax_form').submit( function() {
//     alert ("hello :)");
//     add_custom_validation_methods();
//     force_ckeditor_to_update();
//     $(this).validate({
//       meta:"validate",
//       onkeyup:false,
//       validClass:"ok-input",
//       errorPlacement: function(error, element) {}
//     });
//   });
// });

<script src="//jquery.validate.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript">


  $('#registerHere input').hover(function(){
    $(this).popover('show')
  });

  $("#registerHere").validate({
  	onkeyup: false,
    rules: {
      name:"required",
      email:{required:true,email: true},
      pwd:{required:true,minlength: 6},
      cpwd:{required:true,equalTo: "#pwd"},
    },

    messages: {
      name:"Enter your first and last name",
      email:{
        required:"Enter your email address",
        email:"Enter valid email address"},
      pwd:{
        required:"Enter your password",
        minlength: jQuery.format("Password must be minimum 6 characters")},
      cpwd:{
        required:"Enter confirm password",
        equalTo:"Password and Confirm Password must match"},
    },

    errorClass: "help-inline",
    errorElement: "span",
    highlight:function(element, errorClass, validClass)
    {
      $(element).parents('.control-group').addClass('error');
    },
    unhighlight: function(element, errorClass, validClass)
    {
      $(element).parents('.control-group').removeClass('error');
      $(element).parents('.control-group').addClass('success');
    }
  });
 </script>