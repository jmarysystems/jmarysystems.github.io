/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function _01_controle_loop_sem_fim(){   
                
            try{
                
                setTimeout(function(){ 
                    
                    _02_controle_loop_sem_fim_baixar_tabela_conversa();
                    
                }, 1000);
            }
            catch(Exception){alert( "_01_controle_loop_sem_fim: " + Exception );}
        }
        
        function _02_controle_loop_sem_fim_baixar_tabela_conversa(){
            
            try{
                var id_planilha = "10n3TYa4DlEbwduXiXU94yY5tHeStfoFeeod6EO-ST_o";
                var url = "https://sheets.googleapis.com/v4/spreadsheets/"+ id_planilha +"/values/A:B?key=AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";

                jQuery.getJSON(url).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    try{
                        document.getElementById("tabela_conversas").value = JSON.stringify(data);
                        _03_controle_loop_sem_fim_mostrar_conversas();
                    }catch(Exception){}
                }).error(function(message) {
                    //console.error('error' + message); 
                    //_01_controle_loop_sem_fim();
                    //alert("Erro: " + message );
                    _01_controle_loop_sem_fim();
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){
                alert( "_02_controle_loop_sem_fim_baixar_tabela_conversa: " + Exception );
            }finally {   
                
                //_01_controle_loop_sem_fim();
                //////////////////////////////////////////////////////////////////////
                //document.getElementById("ul_meus_contatos").style.display = 'block'; 
                //////////////////////////////////////////////////////////////////////
            }
        }
        
        function _03_controle_loop_sem_fim_mostrar_conversas(){
            
            try{
                
                var tem_mensagem = false;
                
                try{
                    
                    var linha_recebida = document.getElementById("tabela_conversas").value.split("@");
                    for( var i = 0; i < linha_recebida.length; i++ ) {
                        if( linha_recebida[i].includes("-") ){
                            tem_mensagem = true;
                            break;
                        }
                    }
                    
                }catch(Exception){}
                
                if( tem_mensagem === true ){
                                        
                    //alert( document.getElementById("tabela_conversas").value );                    
                    //_01_controle_loop_sem_fim();
                    setTimeout(function(){                      
                        listando_todos_os_contatos_001();
                    }, 1000);                    
                }
                else{
                    
                    //_01_controle_loop_sem_fim();
                }
            }
            catch(Exception){}
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODOS OS CONTATOS   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function listando_todos_os_contatos_001(){        
            try{           
                
                var linha_recebida = lista_de_contatos.split("@");            
                for( var i = ( linha_recebida.length - 1 ); i >= 0; i-- ) {
                    if( linha_recebida[i].includes("-") ){
                        var web_id;
                        var web_comando;
                        var web_usuario_logado;
                        
                        var web_contato_email;
                        var web_contato_nome;
                        var web_contato_nome_meio;
                        var web_contato_ultimo_nome;

                        var argumentos = linha_recebida[i].split("j");
                        for( var j = 0; j < argumentos.length; j++ ) {
                            if(j === 0){ 
                                web_id = argumentos[j];
                            }
                            else if(j === 1){
                                web_comando = argumentos[j];
                            }
                            else if(j === 2){
                                web_usuario_logado = argumentos[j];
                            }
                            else if(j === 3){
                                web_contato_email = argumentos[j];
                            }
                            else if(j === 4){
                                web_contato_nome = argumentos[j];
                            }
                            else if(j === 5){
                                web_contato_nome_meio = argumentos[j];
                            }
                            else if(j === 6){
                                web_contato_ultimo_nome = argumentos[j];
                            }
                        }

                       //Verificar se este contato é deste usuário
                       var nome_principal = "";   try{ nome_principal = converter_base64(web_contato_nome).trim(); }catch(Exception){}
                       var web_contato_email_str      = importar_Para_Alfabeto_JM( web_contato_email ).trim().toUpperCase();
                       //alert( web_id + "\n" + web_contato_email + "\n" + nome_principal );
                       //setTimeout(function(){                      
                           loop( web_id, web_contato_email_str, nome_principal );
                       //}, 1000);
                    }
                }                  
            }catch(Exception){
                
                document.getElementById("ul_meus_contatos").innerHTML = "consultar_contato_antes_de_cadastrar_003 -- " + Exception;
            }finally {   
                
                //alert("Acabou");
                setTimeout(function(){ 
                    
                    //alert("Reiniciando");
                    _01_controle_loop_sem_fim();
                    
                }, 1000);
            }
            
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODOS OS CONTATOS   
///////////////////////////////////////////////////////////////////////////////////////////////////////////   


/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////ESCREVER E ENVIAR MENSAGENS - INÍCIO   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        function loop( web_id, web_contato_email, nome_principal ){
            try{    
                
                //alert( web_id + "\n" + web_contato_email + "\n" + nome_principal );
                        
                        var linha_recebida = document.getElementById("tabela_conversas").value.split("@"); 
                        //alert( "\nlinha_recebida:\n" + linha_recebida );
                        for( var i = 0; i < linha_recebida.length; i++ ) {
                            
                            //alert( web_id + "\n" + web_contato_email + "\n" + nome_principal + "\ncontador: " );
                            
                            if( document.getElementById( "contador" + web_id ).value < i ){
                                
                                //alert( web_id + "\n" + web_contato_email + "\n" + nome_principal );
                                
                                if( linha_recebida[i].includes("-") ){
                                    var jm_id_msg;
                                    var jm_comando;
                                    var jm_remetente;   
                                    var jm_destinatario;   
                                    var jm_mensagem_a_receber;

                                    var argumentos = linha_recebida[i].split("j");
                                    for( var j = 0; j < argumentos.length; j++ ) {
                                        if(j === 0){ 
                                            jm_id_msg = argumentos[j];
                                        }
                                        else if(j === 1){
                                            jm_comando = argumentos[j];
                                        }
                                        else if(j === 2){
                                            jm_remetente = argumentos[j];
                                        }
                                        else if(j === 3){
                                            jm_destinatario = argumentos[j];
                                        }
                                        else if(j === 4){
                                            jm_mensagem_a_receber = argumentos[j];
                                        }
                                    }
                                
                                    var _00_local_usuario_logado_email_str            = document.getElementById("usuario_logado").value.trim().toUpperCase();
                                    
                                    var _11_local_contato_desta_tabela_email_str      = web_contato_email;
                                
                                    var _00_web_usuario_logado_email_remetente_str    = importar_Para_Alfabeto_JM(jm_remetente).trim().toUpperCase();
                                    var _11_web_usuario_logado_email_destinatario_str = importar_Para_Alfabeto_JM(jm_destinatario).trim().toUpperCase();

                                    //Se o remetente for igual ao usuário logado então:
                                    if( verificar_igualdade_sem_espaco_no_final( _00_web_usuario_logado_email_remetente_str, _00_local_usuario_logado_email_str ) === true ){
                           
                                        //Se o destinatário for igual ao contato local aberto então:
                                        if( verificar_igualdade_sem_espaco_no_final( _11_local_contato_desta_tabela_email_str, _11_web_usuario_logado_email_destinatario_str ) === true ){
                                            var web_mensagem_str = importar_Para_Alfabeto_JM( jm_mensagem_a_receber ).trim();
                                            var web_hora_str = importar_Para_Alfabeto_JM( jm_id_msg ).trim();
                                            
                                            var nova_mensagem = web_mensagem_str.trim().replace("\n", "<br>");
                                            
                                            if( vericar_id_de_mensagens( jm_id_msg, web_id ) === false ){
                                    
                                                registrar_mensagem_enviada( web_id, web_hora_str, nova_mensagem );
                                            }
                                        }
                                    } 
                                    //Se o remetente for igual ao usuário logado então:
                                    else if( verificar_igualdade_sem_espaco_no_final( _00_web_usuario_logado_email_remetente_str, _11_local_contato_desta_tabela_email_str ) === true ){
                           
                                        //Se o destinatário for igual ao usuário logado então:
                                        if( verificar_igualdade_sem_espaco_no_final( _11_web_usuario_logado_email_destinatario_str, _00_local_usuario_logado_email_str ) === true ){
                                            var web_mensagem_str = importar_Para_Alfabeto_JM( jm_mensagem_a_receber ).trim();
                                            var web_hora_str = importar_Para_Alfabeto_JM( jm_id_msg ).trim();
                                            
                                            var nova_mensagem = web_mensagem_str.trim().replace("\n", "<br>");
                                    
                                            var imagem_src_data = document.getElementById ( web_id ).value; 
                                            //document.getElementById("usuario_logado_imagem").value;                                            
                                            registrar_mensagem_enviada_esquerda( nome_principal, web_id, web_hora_str, nova_mensagem, imagem_src_data );
                                        }
                                    }
                                                                
                                }
                                
                                document.getElementById( "contador" + web_id ).value = i;
                            }
                        } 
                
            }catch(Exception){                
            }
            finally {   
                //alert("Acabou");
                //loop_controle( web_id, web_contato_email );
            } 
        }
        
        function vericar_id_de_mensagens( jm_id_msg_num_web_receb, web_id ){
            
            var retorno = false;
            
            try{
                
                var linha_recebida = document.getElementById( "msg_enviadas" + web_id + "input" ).value.split("@");            
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        var interno_id;

                        var argumentos = linha_recebida[i].split("j");
                        for( var j = 0; j < argumentos.length; j++ ) {
                            if(j === 0){ 
                                interno_id = argumentos[j];
                            }
                        }
                        
                        var jm_id_msg_num_web = jm_id_msg_num_web_receb.trim(); 
                        var jm_id_msg_num_intern = interno_id.trim(); 
                        
                        if( verificar_igualdade_sem_espaco_no_final( jm_id_msg_num_web, jm_id_msg_num_intern ) === true ){
                            
                            retorno = true;
                            break;
                        }
                    }
                }
                
            }catch(Exception){                
            }
            finally {   
                
                //loop_controle( web_id, web_contato_email );
            } 
            
            return retorno;
            
        }
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////ESCREVER E ENVIAR MENSAGENS - FIM   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 