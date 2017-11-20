$(document).ready(function(){
    $("#button1").hover(function(){
        $("#button1").attr("disabled", true);
        $("p").on("click", function(){
    		$(this).fadeIn("slow");
		});
    });
});