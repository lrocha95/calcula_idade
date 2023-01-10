
function idade(){
    var d1 = document.getElementById("dia").value;
    var m1 = document.getElementById("mes").value;
    var a1 = document.getElementById("ano").value;

    
    var data = new Date,
        ano_atual = data.getFullYear(),
        mes_atual = data.getMonth() +1,
        dia_atual = data.getDate()
        
    var mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    if(d1 > dia_atual){
        dia_atual = dia_atual + mes[mes_atual -1];
        mes_atual = mes_atual - 1;
    }

    if(m1 > mes_atual){
        mes_atual = mes_atual + 12;
        ano_atual = ano_atual - 1;
    }

    var d = dia_atual - d1;
    var m = mes_atual - m1;
    var a = ano_atual - a1;

    return document.getElementById("idade").innerHTML = "Sua Idade é: " + a + " anos" + m + " meses e " + d + " dias";
}