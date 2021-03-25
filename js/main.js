//   Author:   Deepkumar Patel
//   Purpose:  Northern Frontend Challenge

$(document).ready(function(){

    $(".button").click(function(){

        console.log("button clicked");

        var email = $("input").val();
        var drop = $("select").val();

        // Validation email
        if(!email || email.indexOf("@") < 0 || email.indexOf(".") < 0){
            console.log("Please enter valid email address");
            // error message and Red border line will show on unvalid email
            $("small.error").addClass("errorshow");
            $("input").addClass("error-outline");

            // Before Validation
            console.log("input email:(before)", email);
            console.log("Drop Down Value:(before)", drop);

            // Hide error class- red outline when user type
            $("input").on('keydown', function () {
                $("small.error").removeClass("errorshow");
                $("input").removeClass("error-outline");
            });
        }
        // Else runs if validation is successful
        else{

            // this take input value and store in local storage as key
            let x = $(".input-email").val();
            var key = localStorage.getItem(x);
            // This condition block restrict to make submission if user has already done
            if( key == "true"){
                // Show message
                $(".restricted").css("display", "block");
                return;
            }else{
                $(".restricted").css("display", "none");
            }

            // Store input values into browser local storage
            localStorage.setItem(x.toString(), "true");
            // console log entered value
            console.log("input email:", email);
            console.log("Drop Down Value:", drop);
            
            // Show below text for couple of seconds on button click
            $("span").text(function(){
                return "Submitting...";
            });

            // This function hides form after couple of seconds and display thank you template
            // on successful submission.
            setTimeout(function(){
                $("form").addClass("form-hidden");
                $("p.dataform").addClass("form-hidden");
                $(".thankyou").addClass("thankshow");
            }, 2000);
        }
    });
});