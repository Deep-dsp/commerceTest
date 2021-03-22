$(document).ready(function(){

    $(".button").click(function(){
        console.log("button clicked");

        var email = $("input").val();
        var drop = $("select").val();

        // Validation
        if(!email || email.indexOf("@") < 0 || email.indexOf(".") < 0){
            console.log("Please enter valid email address");
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

                //if()


            let x = $(".input-email").val();
            var key = localStorage.getItem(x);
            if( key == "true"){
                $(".restricted").css("display", "block");
                return;
            }else{
                $(".restricted").css("display", "none");
            }
            localStorage.setItem(x.toString(), "true");
            // console log entered value
            console.log("input email:", email);
            console.log("Drop Down Value:", drop);
            // $("span").replaceWith('<span class="button expanded disabled">Submitting...</span>');
            $("span").text(function(){
                return "Submitting...";
            });

            setTimeout(function(){
                $("form").addClass("form-hidden");
                $("p.dataform").addClass("form-hidden");
                $(".thankyou").addClass("thankshow");
            }, 2000);
        }
    });
});