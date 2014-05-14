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