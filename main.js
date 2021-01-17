$(document).ready(function () {

    $('.errorname').hide();
    $('.erroremail').hide();
    $('.errorpassword').hide();

    var error_name = true;
    var error_email = true;
    var error_password = true;


    $('#exampleInputName').keyup(function () {
      check_name();
    });


    function check_name() {
      var name = $('#exampleInputName').val();
      if (name.length == "") {
        $('.errorname').html('***Enter name***');
        $('.errorname').css("color", "#fff68e");
        $('.errorname').show();
        $('.errorname').focus();
        error_name = false;
        return false;
      }
      if (name.length <= 3 || name.length >= 25) {
        $('.errorname').show();
        $('.errorname').html('***Name must be between 3 to 25 letters***');
        $('.errorname').css("color", "#fff68e");
        $('.errorname').focus();
        error_name = false;
        return false
      }
    }

    $('#exampleInputPassword1').keyup(function () {
      check_password();
    });

    function check_password() {
      var password = $('#exampleInputPassword1').val();
      if (password == "") {
        $('.errorpassword').show();
        $('.errorpassword').html('***Enter Password***');
        $('.errorpassword').css("color", "#fff68e");
        $('.errorpassword').focus();
        error_password = false;
        return false
      }
      if (password.length <= 7) {
        $('.errorpassword').show();
        $('.errorpassword').html('***Password must have atleast 8 letters***');
        $('.errorpassword').css("color", "#fff68e");
        $('.errorpassword').focus();
        error_password = false;
        return false;
      }
    }


    $('#exampleInputEmail1').keyup(function () {
      check_email();
    });

    function check_email() {
      var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      var email = $('#exampleInputEmail1').val();
      if (pattern.test(email) && email !== '') {
        $("#email_error_message").hide();
        $("#form_email").css("border-bottom", "2px solid #34F458");
      } else {
        $("#email_error_message").html("Invalid Email");
        $("#email_error_message").show();
        $("#form_email").css("border-bottom", "2px solid #F90A0A");
        error_email = false;
      }
    }


    $('.submitbtn').click(function(){
       error_password = true;
       error_name = true;
       error_email = true;

      check_name();
      check_password();

      if (  error_name == true &&  error_email == true &&  error_password == true ){
         $('.message').html("Form submitted successfully");     
            return( true);
    }

    else{
      $('.message').html("There is some error in your form ");
    }
  });
            // **************************   FORM VALIDATION COMPLETED   ***************************************//

   

  
  
  });
  
  // INSERT INTO `contact` (`S.No`, `Name`, `Email`, `Password`, `Suggestions`, `Date`) VALUES ('1', 'name', 'name@name.com', 'thepassword', 'first php form', 'current_timestamp()');
