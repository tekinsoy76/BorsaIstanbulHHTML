$(document).ready(function(){
    $("h1").html("Hesap Makinesi");

        var rakam = 0;
        var islem = "";
    $("button").click(function(){
        var butonText = $(this).html();
        if(butonText == "+" | butonText == "-" | butonText == "x" | butonText == "/"){
            islem = butonText;
            if (rakam == 0){
                rakam = Number($("#screen").val());
            }
            else if (islem == "+"){
                rakam += Number($("#screen").val());
            }
            else if (islem == "-"){
                rakam -= Number($("#screen").val());
            }
            else if (islem == "x"){
                rakam *= Number($("#screen").val());
            }
            else if (islem == "/"){
                rakam /= Number($("#screen").val());
            }
            $("#screen").val("0");
        }
        else if (butonText == "="){
            if (islem == "+"){
                rakam += Number($("#screen").val());
            }
            else if (islem == "-"){
                rakam -= Number($("#screen").val());
            }
            else if (islem == "x"){
                rakam *= Number($("#screen").val());
            }
            else if (islem == "/"){
                rakam /= Number($("#screen").val());
            }
            islem = "";
            $("#screen").val(rakam);
            rakam = 0;
        }

    });//click sonu

}); //ready sonu
