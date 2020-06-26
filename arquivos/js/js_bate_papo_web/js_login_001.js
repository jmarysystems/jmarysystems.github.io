/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function printDiv(divID) {
   var body = document.body.innerHTML;
   var conteudo = document.getElementById(divID).innerHTML;
   
   document.body.innerHTML = conteudo;
   
   window.print();
   
   document.body.innerHTML = body;
}

function js_login_001_buscar_lista(){
    
    try{
        var key = "AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";
        var intervalo = "A:F";
        var id = "1By3w9XL3XDO_Dzi5VomurGnqoMS-_zW552C4-B2SJKo";
    
        //var url = "https://sheets.googleapis.com/v4/spreadsheets/" + id + "/values/"+ intervalo + "?key=" + key;
        var url = "https://sheets.googleapis.com/v4/spreadsheets/1By3w9XL3XDO_Dzi5VomurGnqoMS-_zW552C4-B2SJKo/values/A:F?key=AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";
    
        //var url = document.getElementById('url').value;
    
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
    
        xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    
        document.getElementById("central").innerHTML = xhttp.responseText;
    }catch(Exception){}
}


