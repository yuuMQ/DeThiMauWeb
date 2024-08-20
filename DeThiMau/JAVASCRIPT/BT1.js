$(document).ready(function(){
    $("#textcolor").change(function(){
        $("h1").css("color", $(this).val())
    })
    $("#shadow").change(function(){
        if($(this).is(":checked")){
            $("h1").addClass("shadow");
        }
        else{
            $("h1").removeClass("shadow");
        }
    })
    $("select").change(function(){
        var selected_value = $(this).val();
        console.log(selected_value);
        if(selected_value=="All"){
            $(".LTWeb, .HDH, .MMT").show();
        }
        else{
            $(".LTWeb, .HDH, .MMT").hide();
            $("."+selected_value).show();
        }
    })
    function shiftChar(c, shift){
        code = c.charCodeAt();
        shift = parseInt(shift);
        if (c >= 'a' && c <= 'z') {
            return String.fromCharCode(((code - 'a'.charCodeAt(0) + shift) % 26 + 26) % 26 + 'a'.charCodeAt(0));
        } else if (c >= 'A' && c <= 'Z') {
            return String.fromCharCode(((code - 'A'.charCodeAt(0) + shift) % 26 + 26) % 26 + 'A'.charCodeAt(0));
        } else if (c >= '0' && c <= '9') {
            return String.fromCharCode(((code - '0'.charCodeAt(0) + shift) % 10 + 10) % 10 + '0'.charCodeAt(0));
        }
        return c;
    }
    $("button").click(function(){
        var val = $("#n").val();
        var str = $("#string").val();
        var res="";
        for(var i=0; i <str.length; i++){
            res+=shiftChar(str[i], val);
        }   
        $("#result").val(res);
    })
})