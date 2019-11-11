$(document).ready(function() {
        
    
}); 

function envia_form_login(){   
    try{
        var usr  = document.getElementById( "form_login_login" ).value;           
        var pass = document.getElementById( "form_login_senha" ).value;
    
        if( usr === "" || pass === "" ) {
            
            alert( "Informe o nome de Usuário e a Senha para logar!\n" + usr + " - " + pass  );
        }
        else{
            
            $.ajax({
                type: "POST",
                url:  "COMANDO/LOGIN" + "/" + usr + "/" + pass,
                data: { paginasolicitada: "admin/topo/topo_index.jsp", cmd: "login", login: usr, senha: pass },
                        
                error: function(){ alert( "Erro inesperado na requisição da página!" ); },
                
                //success: function(result){ document.getElementById( "central" ).innerHTML = result; }
                
                success: function(result){ $("#tudo").html(result); }
                
                //success: function(result){ document.getElementById( "tudo" ).innerHTML = result; } -- window.location.href = "";
                //timeout: ajaxTimeOut,
                //statusCode: { 404: function() { alert( "page not found" ); } }
            });
        }
        
    }catch(e){ alert( "Informe o nome de Usuário e a Senha 2!\n" + e  ); }
        
}

