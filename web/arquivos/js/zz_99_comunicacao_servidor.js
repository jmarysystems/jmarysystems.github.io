

function _comunicacao_com_o_servidor( COMANDO, SUBCOMANDO, ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR, parametro_01, parametro_02 ){        
        try{
            
            let numeros_parametro_01 = "";   try{   numeros_parametro_01 =  transformar_para_numero( parametro_01 );   }catch(Exception){}
            let numeros_parametro_02 = "";   try{   numeros_parametro_02 =  transformar_para_numero( parametro_02 );   }catch(Exception){}
            
            // alert(  numeros_parametro_01 ); 
            
            let letras_parametro_01 = "";   try{   letras_parametro_01 = transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
            let letras_parametro_02 = "";   try{   letras_parametro_02 = transformar_para_texto(  numeros_parametro_02  )   }catch(Exception){}
            
            // alert(  letras_parametro_01 );
            
            // alert(  numeros_parametro_01 + "\n"  +  letras_parametro_01 ); 
            
            
            let lista_de_parametros = ""; 
            try{  
                
                lista_de_parametros  =  letras_parametro_01.trim() + "&" + letras_parametro_02.trim(); 
                
                // alert(  encode_parametro_03  );  
                
                // alert(  encode_parametro_04  );  
                
                // alert(  lista_de_parametros  );  
                
            }catch(Exception){}
            
            
            
            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inválido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR�O
                        document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML =    //  MODELO GEN�RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "processando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    }, 0);

                    setTimeout(function(){ 
                        try{
                            // URL(ENDERE�O DE ARQUIVO) QUE SER� ENVIADA AO SERVIDOR
                            // COMANDO
                            // SUBCOMANDO
                            // ARGUMENTOS
                            // @ COMANDO @ SUBCOMANDO @ ARGUMENTO_01 & ARGUMENTO_02
                            //const encode = encodeURIComponent(descricao_loja);
                            var url = "@" + COMANDO + "@" + SUBCOMANDO + "@" + id_da_sessao + "@" + lista_de_parametros;
                            $.ajax({
                                url: url,
                                    success: function(data) {
                                        
                                        //alert( "OK - " + data );  
                                        // SE O ARQUIVO N�O EXISTIR NO SERVIDOR 
                                        if( data.trim() === "pagina_nao_encontrada" ){
                                            
                                            try{          
                                                
                                                window.open('../404.html', '_parent');
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                
                                                window.open('../405.html', '_parent');
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P�GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P�GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P�GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML = data;
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        window.open('../405.html', '_parent');
                                    }
                            });
                        }catch(Exception){}
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){}    
            }

        }catch(Exception){}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 






















function _comunicacao_com_o_servidor_3p( COMANDO, SUBCOMANDO, ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR, 
                                      parametro_01, parametro_02, parametro_03 ){        
        try{
            
            /*
             alert(  "numeros_parametro_01 = " + parametro_01 );
             alert(  "numeros_parametro_02 = " + parametro_02 );
             alert(  "numeros_parametro_03 = " + parametro_03 );
             alert(  "numeros_parametro_04 = " + parametro_04 );
             */
            
            let numeros_parametro_01 = "";   try{   numeros_parametro_01 =  transformar_para_numero( parametro_01 );   }catch(Exception){}
            let numeros_parametro_02 = "";   try{   numeros_parametro_02 =  transformar_para_numero( parametro_02 );   }catch(Exception){}
            let numeros_parametro_03 = "";   try{   numeros_parametro_03 =  transformar_para_numero( parametro_03 );   }catch(Exception){}
            
            // alert(  numeros_parametro_01 ); 
            
            let letras_parametro_01 = "";   try{   letras_parametro_01 = transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
            let letras_parametro_02 = "";   try{   letras_parametro_02 = transformar_para_texto(  numeros_parametro_02  )   }catch(Exception){}
            let letras_parametro_03 = "";   try{   letras_parametro_03 = transformar_para_texto(  numeros_parametro_03  )   }catch(Exception){}
            
            // alert(  letras_parametro_01 );
            
            // alert(  numeros_parametro_01 + "\n"  +  letras_parametro_01 ); 
            
            
            let lista_de_parametros = ""; 
            try{  
                
                lista_de_parametros  =  letras_parametro_01.trim() + "&" + letras_parametro_02.trim() + "&" + 
                                        letras_parametro_03.trim();  
                
                // alert(  "lista_de_parametros = " + lista_de_parametros );
                
                // alert(  encode_parametro_03  );  
                
                // alert(  encode_parametro_04  );  
                
                // alert(  lista_de_parametros  );  
                
            }catch(Exception){}
            
            
            
            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inv?lido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR?O
                        document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML =    //  MODELO GEN?RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "processando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    }, 0);

                    setTimeout(function(){ 
                        try{
                            // URL(ENDERE?O DE ARQUIVO) QUE SER? ENVIADA AO SERVIDOR
                            // COMANDO
                            // SUBCOMANDO
                            // ARGUMENTOS
                            // @ COMANDO @ SUBCOMANDO @ ARGUMENTO_01 & ARGUMENTO_02
                            //const encode = encodeURIComponent(descricao_loja);
                            var url = "@" + COMANDO + "@" + SUBCOMANDO + "@" + id_da_sessao + "@" + lista_de_parametros;
                            $.ajax({
                                url: url,
                                    success: function(data) {
                                        
                                        //alert( "OK - " + data );  
                                        // SE O ARQUIVO N?O EXISTIR NO SERVIDOR 
                                        if( data.trim() === "pagina_nao_encontrada" ){
                                            
                                            try{          
                                                
                                                window.open('../404.html', '_parent');
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                
                                                window.open('../405.html', '_parent');
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P?GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML = data;
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        window.open('../405.html', '_parent');
                                    }
                            });
                        }catch(Exception){}
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){}    
            }

        }catch(Exception){}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 













function _comunicacao_com_o_servidor_4p( COMANDO, SUBCOMANDO, ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR, 
                                      parametro_01, parametro_02, parametro_03, parametro_04 ){        
        try{
            
            /*
             alert(  "numeros_parametro_01 = " + parametro_01 );
             alert(  "numeros_parametro_02 = " + parametro_02 );
             alert(  "numeros_parametro_03 = " + parametro_03 );
             alert(  "numeros_parametro_04 = " + parametro_04 );
             */
            
            let numeros_parametro_01 = "";   try{   numeros_parametro_01 =  transformar_para_numero( parametro_01 );   }catch(Exception){}
            let numeros_parametro_02 = "";   try{   numeros_parametro_02 =  transformar_para_numero( parametro_02 );   }catch(Exception){}
            let numeros_parametro_03 = "";   try{   numeros_parametro_03 =  transformar_para_numero( parametro_03 );   }catch(Exception){}
            let numeros_parametro_04 = "";   try{   numeros_parametro_04 =  transformar_para_numero( parametro_04 );   }catch(Exception){}
            
            // alert(  numeros_parametro_01 ); 
            
            let letras_parametro_01 = "";   try{   letras_parametro_01 = transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
            let letras_parametro_02 = "";   try{   letras_parametro_02 = transformar_para_texto(  numeros_parametro_02  )   }catch(Exception){}
            let letras_parametro_03 = "";   try{   letras_parametro_03 = transformar_para_texto(  numeros_parametro_03  )   }catch(Exception){}
            let letras_parametro_04 = "";   try{   letras_parametro_04 = transformar_para_texto(  numeros_parametro_04  )   }catch(Exception){}
            
            // alert(  letras_parametro_01 );
            
            // alert(  numeros_parametro_01 + "\n"  +  letras_parametro_01 ); 
            
            
            let lista_de_parametros = ""; 
            try{  
                
                lista_de_parametros  =  letras_parametro_01.trim() + "&" + letras_parametro_02.trim() + "&" + 
                                        letras_parametro_03.trim() + "&" + letras_parametro_04.trim();  
                
                // alert(  "lista_de_parametros = " + lista_de_parametros );
                
                // alert(  encode_parametro_03  );  
                
                // alert(  encode_parametro_04  );  
                
                // alert(  lista_de_parametros  );  
                
            }catch(Exception){}
            
            
            
            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inv?lido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR?O
                        document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML =    //  MODELO GEN?RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "processando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    }, 0);

                    setTimeout(function(){ 
                        try{
                            // URL(ENDERE?O DE ARQUIVO) QUE SER? ENVIADA AO SERVIDOR
                            // COMANDO
                            // SUBCOMANDO
                            // ARGUMENTOS
                            // @ COMANDO @ SUBCOMANDO @ ARGUMENTO_01 & ARGUMENTO_02
                            //const encode = encodeURIComponent(descricao_loja);
                            var url = "@" + COMANDO + "@" + SUBCOMANDO + "@" + id_da_sessao + "@" + lista_de_parametros;
                            $.ajax({
                                url: url,
                                    success: function(data) {
                                        
                                        //alert( "OK - " + data );  
                                        // SE O ARQUIVO N?O EXISTIR NO SERVIDOR 
                                        if( data.trim() === "pagina_nao_encontrada" ){
                                            
                                            try{          
                                                
                                                window.open('../404.html', '_parent');
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                
                                                window.open('../405.html', '_parent');
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P?GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML = data;
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        window.open('../405.html', '_parent');
                                    }
                            });
                        }catch(Exception){}
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){}    
            }

        }catch(Exception){}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 






















function _comunicacao_com_o_servidor_5p( COMANDO, SUBCOMANDO, ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR, 
                                      parametro_01, parametro_02, parametro_03, parametro_04, parametro_05 ){        
        try{
            
            /*
             alert(  "numeros_parametro_01 = " + parametro_01 );
             alert(  "numeros_parametro_02 = " + parametro_02 );
             alert(  "numeros_parametro_03 = " + parametro_03 );
             alert(  "numeros_parametro_04 = " + parametro_04 );
             */
            
            let numeros_parametro_01 = "";   try{   numeros_parametro_01 =  transformar_para_numero( parametro_01 );   }catch(Exception){}
            let numeros_parametro_02 = "";   try{   numeros_parametro_02 =  transformar_para_numero( parametro_02 );   }catch(Exception){}
            let numeros_parametro_03 = "";   try{   numeros_parametro_03 =  transformar_para_numero( parametro_03 );   }catch(Exception){}
            let numeros_parametro_04 = "";   try{   numeros_parametro_04 =  transformar_para_numero( parametro_04 );   }catch(Exception){}
            let numeros_parametro_05 = "";   try{   numeros_parametro_05 =  transformar_para_numero( parametro_05 );   }catch(Exception){}
            
            // alert(  numeros_parametro_01 ); 
            
            let letras_parametro_01 = "";   try{   letras_parametro_01 = transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
            let letras_parametro_02 = "";   try{   letras_parametro_02 = transformar_para_texto(  numeros_parametro_02  )   }catch(Exception){}
            let letras_parametro_03 = "";   try{   letras_parametro_03 = transformar_para_texto(  numeros_parametro_03  )   }catch(Exception){}
            let letras_parametro_04 = "";   try{   letras_parametro_04 = transformar_para_texto(  numeros_parametro_04  )   }catch(Exception){}
            let letras_parametro_05 = "";   try{   letras_parametro_05 = transformar_para_texto(  numeros_parametro_05  )   }catch(Exception){}
            
            // alert(  letras_parametro_01 );
            
            // alert(  numeros_parametro_01 + "\n"  +  letras_parametro_01 ); 
            
            
            let lista_de_parametros = ""; 
            try{  
                
                lista_de_parametros  =  letras_parametro_01.trim() + "&" + letras_parametro_02.trim() + "&" + 
                                        letras_parametro_03.trim() + "&" + letras_parametro_04.trim() + "&" + letras_parametro_05.trim();  
                
                // alert(  "lista_de_parametros = " + lista_de_parametros );
                
                // alert(  encode_parametro_03  );  
                
                // alert(  encode_parametro_04  );  
                
                // alert(  lista_de_parametros  );  
                
            }catch(Exception){}
            
            
            
            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inv?lido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR?O
                        document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML =    //  MODELO GEN?RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "processando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    }, 0);

                    setTimeout(function(){ 
                        try{
                            // URL(ENDERE?O DE ARQUIVO) QUE SER? ENVIADA AO SERVIDOR
                            // COMANDO
                            // SUBCOMANDO
                            // ARGUMENTOS
                            // @ COMANDO @ SUBCOMANDO @ ARGUMENTO_01 & ARGUMENTO_02
                            //const encode = encodeURIComponent(descricao_loja);
                            var url = "@" + COMANDO + "@" + SUBCOMANDO + "@" + id_da_sessao + "@" + lista_de_parametros;
                            $.ajax({
                                url: url,
                                    success: function(data) {
                                        
                                        //alert( "OK - " + data );  
                                        // SE O ARQUIVO N?O EXISTIR NO SERVIDOR 
                                        if( data.trim() === "pagina_nao_encontrada" ){
                                            
                                            try{          
                                                
                                                window.open('../404.html', '_parent');
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                
                                                window.open('../405.html', '_parent');
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P?GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML = data;
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        window.open('../405.html', '_parent');
                                    }
                            });
                        }catch(Exception){}
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){}    
            }

        }catch(Exception){}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 



































function _comunicacao_com_o_servidor_6p( COMANDO, SUBCOMANDO, ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR, 
                                      parametro_01, parametro_02, parametro_03, parametro_04, parametro_05, parametro_06 ){        
        try{
            
            /*
             alert(  "numeros_parametro_01 = " + parametro_01 );
             alert(  "numeros_parametro_02 = " + parametro_02 );
             alert(  "numeros_parametro_03 = " + parametro_03 );
             alert(  "numeros_parametro_04 = " + parametro_04 );
             */
            
            let numeros_parametro_01 = "";   try{   numeros_parametro_01 =  transformar_para_numero( parametro_01 );   }catch(Exception){}
            let numeros_parametro_02 = "";   try{   numeros_parametro_02 =  transformar_para_numero( parametro_02 );   }catch(Exception){}
            let numeros_parametro_03 = "";   try{   numeros_parametro_03 =  transformar_para_numero( parametro_03 );   }catch(Exception){}
            let numeros_parametro_04 = "";   try{   numeros_parametro_04 =  transformar_para_numero( parametro_04 );   }catch(Exception){}
            let numeros_parametro_05 = "";   try{   numeros_parametro_05 =  transformar_para_numero( parametro_05 );   }catch(Exception){}
            let numeros_parametro_06 = "";   try{   numeros_parametro_06 =  transformar_para_numero( parametro_06 );   }catch(Exception){}
            
            // alert(  numeros_parametro_01 ); 
            
            let letras_parametro_01 = "";   try{   letras_parametro_01 = transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
            let letras_parametro_02 = "";   try{   letras_parametro_02 = transformar_para_texto(  numeros_parametro_02  )   }catch(Exception){}
            let letras_parametro_03 = "";   try{   letras_parametro_03 = transformar_para_texto(  numeros_parametro_03  )   }catch(Exception){}
            let letras_parametro_04 = "";   try{   letras_parametro_04 = transformar_para_texto(  numeros_parametro_04  )   }catch(Exception){}
            let letras_parametro_05 = "";   try{   letras_parametro_05 = transformar_para_texto(  numeros_parametro_05  )   }catch(Exception){}
            let letras_parametro_06 = "";   try{   letras_parametro_06 = transformar_para_texto(  numeros_parametro_06  )   }catch(Exception){}
            
            // alert(  letras_parametro_01 );
            
            // alert(  numeros_parametro_01 + "\n"  +  letras_parametro_01 ); 
            
            
            let lista_de_parametros = ""; 
            try{  
                
                lista_de_parametros  =  letras_parametro_01.trim() + "&" + letras_parametro_02.trim() + "&" + 
                                        letras_parametro_03.trim() + "&" + letras_parametro_04.trim() + "&" + letras_parametro_05.trim()
                                        + "&" + letras_parametro_06.trim();  
                
                // alert(  "lista_de_parametros = " + lista_de_parametros );
                
                // alert(  encode_parametro_03  );  
                
                // alert(  encode_parametro_04  );  
                
                // alert(  lista_de_parametros  );  
                
            }catch(Exception){}
            
            
            
            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inv?lido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR?O
                        document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML =    //  MODELO GEN?RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "processando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    }, 0);

                    setTimeout(function(){ 
                        try{
                            // URL(ENDERE?O DE ARQUIVO) QUE SER? ENVIADA AO SERVIDOR
                            // COMANDO
                            // SUBCOMANDO
                            // ARGUMENTOS
                            // @ COMANDO @ SUBCOMANDO @ ARGUMENTO_01 & ARGUMENTO_02
                            //const encode = encodeURIComponent(descricao_loja);
                            var url = "@" + COMANDO + "@" + SUBCOMANDO + "@" + id_da_sessao + "@" + lista_de_parametros;
                            $.ajax({
                                url: url,
                                    success: function(data) {
                                        
                                        //alert( "OK - " + data );  
                                        // SE O ARQUIVO N?O EXISTIR NO SERVIDOR 
                                        if( data.trim() === "pagina_nao_encontrada" ){
                                            
                                            try{          
                                                
                                                window.open('../404.html', '_parent');
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                
                                                window.open('../405.html', '_parent');
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P?GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML = data;
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        window.open('../405.html', '_parent');
                                    }
                            });
                        }catch(Exception){}
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){}    
            }

        }catch(Exception){}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 













































function _comunicacao_com_o_servidor_7p( COMANDO, SUBCOMANDO, ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR, 
                                      parametro_01, parametro_02, parametro_03, parametro_04, parametro_05, parametro_06, 
                                      parametro_07 
){        
        try{
            
            /*
             alert(  "numeros_parametro_01 = " + parametro_01 );
             alert(  "numeros_parametro_02 = " + parametro_02 );
             alert(  "numeros_parametro_03 = " + parametro_03 );
             alert(  "numeros_parametro_04 = " + parametro_04 );
             */
            
            let numeros_parametro_01 = "";   try{   numeros_parametro_01 =  transformar_para_numero( parametro_01 );   }catch(Exception){}
            let numeros_parametro_02 = "";   try{   numeros_parametro_02 =  transformar_para_numero( parametro_02 );   }catch(Exception){}
            let numeros_parametro_03 = "";   try{   numeros_parametro_03 =  transformar_para_numero( parametro_03 );   }catch(Exception){}
            let numeros_parametro_04 = "";   try{   numeros_parametro_04 =  transformar_para_numero( parametro_04 );   }catch(Exception){}
            let numeros_parametro_05 = "";   try{   numeros_parametro_05 =  transformar_para_numero( parametro_05 );   }catch(Exception){}
            let numeros_parametro_06 = "";   try{   numeros_parametro_06 =  transformar_para_numero( parametro_06 );   }catch(Exception){}
            let numeros_parametro_07 = "";   try{   numeros_parametro_07 =  transformar_para_numero( parametro_07 );   }catch(Exception){}
            
            // alert(  numeros_parametro_01 ); 
            
            let letras_parametro_01 = "";   try{   letras_parametro_01 = transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
            let letras_parametro_02 = "";   try{   letras_parametro_02 = transformar_para_texto(  numeros_parametro_02  )   }catch(Exception){}
            let letras_parametro_03 = "";   try{   letras_parametro_03 = transformar_para_texto(  numeros_parametro_03  )   }catch(Exception){}
            let letras_parametro_04 = "";   try{   letras_parametro_04 = transformar_para_texto(  numeros_parametro_04  )   }catch(Exception){}
            let letras_parametro_05 = "";   try{   letras_parametro_05 = transformar_para_texto(  numeros_parametro_05  )   }catch(Exception){}
            let letras_parametro_06 = "";   try{   letras_parametro_06 = transformar_para_texto(  numeros_parametro_06  )   }catch(Exception){}
            let letras_parametro_07 = "";   try{   letras_parametro_07 = transformar_para_texto(  numeros_parametro_07  )   }catch(Exception){}
            
            // alert(  letras_parametro_01 );
            
            // alert(  numeros_parametro_01 + "\n"  +  letras_parametro_01 ); 
            
            
            let lista_de_parametros = ""; 
            try{  
                
                lista_de_parametros  =  letras_parametro_01.trim() + "&" + letras_parametro_02.trim() + "&" + 
                                        letras_parametro_03.trim() + "&" + letras_parametro_04.trim() + "&" + 
                                        letras_parametro_05.trim() + "&" + 
                                        letras_parametro_06.trim() + "&" + 
                                        letras_parametro_07.trim() ;  
                
                // alert(  "lista_de_parametros = " + lista_de_parametros );
                
                // alert(  encode_parametro_03  );  
                
                // alert(  encode_parametro_04  );  
                
                // alert(  lista_de_parametros  );  
                
            }catch(Exception){}
            
            
            
            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inv?lido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR?O
                        document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML =    //  MODELO GEN?RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "processando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    }, 0);

                    setTimeout(function(){ 
                        try{
                            // URL(ENDERE?O DE ARQUIVO) QUE SER? ENVIADA AO SERVIDOR
                            // COMANDO
                            // SUBCOMANDO
                            // ARGUMENTOS
                            // @ COMANDO @ SUBCOMANDO @ ARGUMENTO_01 & ARGUMENTO_02
                            //const encode = encodeURIComponent(descricao_loja);
                            var url = "@" + COMANDO + "@" + SUBCOMANDO + "@" + id_da_sessao + "@" + lista_de_parametros;
                            $.ajax({
                                url: url,
                                    success: function(data) {
                                        
                                        //alert( "OK - " + data );  
                                        // SE O ARQUIVO N?O EXISTIR NO SERVIDOR 
                                        if( data.trim() === "pagina_nao_encontrada" ){
                                            
                                            try{          
                                                
                                                window.open('../404.html', '_parent');
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                
                                                window.open('../405.html', '_parent');
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P?GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML = data;
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        window.open('../405.html', '_parent');
                                    }
                            });
                        }catch(Exception){}
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){}    
            }

        }catch(Exception){}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 









































function _comunicacao_com_o_servidor_8p( COMANDO, SUBCOMANDO, ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR, 
                                      parametro_01, parametro_02, parametro_03, parametro_04, parametro_05, parametro_06, 
                                      parametro_07, parametro_08 
){        
        try{
            
            /*
             alert(  "numeros_parametro_01 = " + parametro_01 );
             alert(  "numeros_parametro_02 = " + parametro_02 );
             alert(  "numeros_parametro_03 = " + parametro_03 );
             alert(  "numeros_parametro_04 = " + parametro_04 );
             */
            
            let numeros_parametro_01 = "";   try{   numeros_parametro_01 =  transformar_para_numero( parametro_01 );   }catch(Exception){}
            let numeros_parametro_02 = "";   try{   numeros_parametro_02 =  transformar_para_numero( parametro_02 );   }catch(Exception){}
            let numeros_parametro_03 = "";   try{   numeros_parametro_03 =  transformar_para_numero( parametro_03 );   }catch(Exception){}
            let numeros_parametro_04 = "";   try{   numeros_parametro_04 =  transformar_para_numero( parametro_04 );   }catch(Exception){}
            let numeros_parametro_05 = "";   try{   numeros_parametro_05 =  transformar_para_numero( parametro_05 );   }catch(Exception){}
            let numeros_parametro_06 = "";   try{   numeros_parametro_06 =  transformar_para_numero( parametro_06 );   }catch(Exception){}
            let numeros_parametro_07 = "";   try{   numeros_parametro_07 =  transformar_para_numero( parametro_07 );   }catch(Exception){}
            let numeros_parametro_08 = "";   try{   numeros_parametro_08 =  transformar_para_numero( parametro_08 );   }catch(Exception){}
            
            // alert(  numeros_parametro_01 ); 
            
            let letras_parametro_01 = "";   try{   letras_parametro_01 = transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
            let letras_parametro_02 = "";   try{   letras_parametro_02 = transformar_para_texto(  numeros_parametro_02  )   }catch(Exception){}
            let letras_parametro_03 = "";   try{   letras_parametro_03 = transformar_para_texto(  numeros_parametro_03  )   }catch(Exception){}
            let letras_parametro_04 = "";   try{   letras_parametro_04 = transformar_para_texto(  numeros_parametro_04  )   }catch(Exception){}
            let letras_parametro_05 = "";   try{   letras_parametro_05 = transformar_para_texto(  numeros_parametro_05  )   }catch(Exception){}
            let letras_parametro_06 = "";   try{   letras_parametro_06 = transformar_para_texto(  numeros_parametro_06  )   }catch(Exception){}
            let letras_parametro_07 = "";   try{   letras_parametro_07 = transformar_para_texto(  numeros_parametro_07  )   }catch(Exception){}
            let letras_parametro_08 = "";   try{   letras_parametro_08 = transformar_para_texto(  numeros_parametro_08  )   }catch(Exception){}
            
            // alert(  letras_parametro_01 );
            
            // alert(  numeros_parametro_01 + "\n"  +  letras_parametro_01 ); 
            
            
            let lista_de_parametros = ""; 
            try{  
                
                lista_de_parametros  =  letras_parametro_01.trim() + "&" + letras_parametro_02.trim() + "&" + 
                                        letras_parametro_03.trim() + "&" + letras_parametro_04.trim() + "&" + 
                                        letras_parametro_05.trim() + "&" + 
                                        letras_parametro_06.trim() + "&" + 
                                        letras_parametro_07.trim() + "&" +
                                        letras_parametro_08.trim()
                                ;  
                
                // alert(  "lista_de_parametros = " + lista_de_parametros );
                
                // alert(  encode_parametro_03  );  
                
                // alert(  encode_parametro_04  );  
                
                // alert(  lista_de_parametros  );  
                
            }catch(Exception){}
            
            
            
            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inv?lido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR?O
                        document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML =    //  MODELO GEN?RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "processando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    }, 0);

                    setTimeout(function(){ 
                        try{
                            // URL(ENDERE?O DE ARQUIVO) QUE SER? ENVIADA AO SERVIDOR
                            // COMANDO
                            // SUBCOMANDO
                            // ARGUMENTOS
                            // @ COMANDO @ SUBCOMANDO @ ARGUMENTO_01 & ARGUMENTO_02
                            //const encode = encodeURIComponent(descricao_loja);
                            var url = "@" + COMANDO + "@" + SUBCOMANDO + "@" + id_da_sessao + "@" + lista_de_parametros;
                            $.ajax({
                                url: url,
                                    success: function(data) {
                                        
                                        //alert( "OK - " + data );  
                                        // SE O ARQUIVO N?O EXISTIR NO SERVIDOR 
                                        if( data.trim() === "pagina_nao_encontrada" ){
                                            
                                            try{          
                                                
                                                window.open('../404.html', '_parent');
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                
                                                window.open('../405.html', '_parent');
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P?GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML = data;
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        window.open('../405.html', '_parent');
                                    }
                            });
                        }catch(Exception){}
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){}    
            }

        }catch(Exception){}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 
































function _comunicacao_com_o_servidor_9p( COMANDO, SUBCOMANDO, ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR, 
                                      parametro_01, parametro_02, parametro_03, parametro_04, parametro_05, parametro_06, 
                                      parametro_07, parametro_08, parametro_09  
){        
        try{
            
            /*
             alert(  "numeros_parametro_01 = " + parametro_01 );
             alert(  "numeros_parametro_02 = " + parametro_02 );
             alert(  "numeros_parametro_03 = " + parametro_03 );
             alert(  "numeros_parametro_04 = " + parametro_04 );
             */
            
            let numeros_parametro_01 = "";   try{   numeros_parametro_01 =  transformar_para_numero( parametro_01 );   }catch(Exception){}
            let numeros_parametro_02 = "";   try{   numeros_parametro_02 =  transformar_para_numero( parametro_02 );   }catch(Exception){}
            let numeros_parametro_03 = "";   try{   numeros_parametro_03 =  transformar_para_numero( parametro_03 );   }catch(Exception){}
            let numeros_parametro_04 = "";   try{   numeros_parametro_04 =  transformar_para_numero( parametro_04 );   }catch(Exception){}
            let numeros_parametro_05 = "";   try{   numeros_parametro_05 =  transformar_para_numero( parametro_05 );   }catch(Exception){}
            let numeros_parametro_06 = "";   try{   numeros_parametro_06 =  transformar_para_numero( parametro_06 );   }catch(Exception){}
            let numeros_parametro_07 = "";   try{   numeros_parametro_07 =  transformar_para_numero( parametro_07 );   }catch(Exception){}
            let numeros_parametro_08 = "";   try{   numeros_parametro_08 =  transformar_para_numero( parametro_08 );   }catch(Exception){}
            let numeros_parametro_09 = "";   try{   numeros_parametro_09 =  transformar_para_numero( parametro_09 );   }catch(Exception){}
            
            // alert(  numeros_parametro_01 ); 
            
            let letras_parametro_01 = "";   try{   letras_parametro_01 = transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
            let letras_parametro_02 = "";   try{   letras_parametro_02 = transformar_para_texto(  numeros_parametro_02  )   }catch(Exception){}
            let letras_parametro_03 = "";   try{   letras_parametro_03 = transformar_para_texto(  numeros_parametro_03  )   }catch(Exception){}
            let letras_parametro_04 = "";   try{   letras_parametro_04 = transformar_para_texto(  numeros_parametro_04  )   }catch(Exception){}
            let letras_parametro_05 = "";   try{   letras_parametro_05 = transformar_para_texto(  numeros_parametro_05  )   }catch(Exception){}
            let letras_parametro_06 = "";   try{   letras_parametro_06 = transformar_para_texto(  numeros_parametro_06  )   }catch(Exception){}
            let letras_parametro_07 = "";   try{   letras_parametro_07 = transformar_para_texto(  numeros_parametro_07  )   }catch(Exception){}
            let letras_parametro_08 = "";   try{   letras_parametro_08 = transformar_para_texto(  numeros_parametro_08  )   }catch(Exception){}
            let letras_parametro_09 = "";   try{   letras_parametro_09 = transformar_para_texto(  numeros_parametro_09  )   }catch(Exception){}
            
            // alert(  letras_parametro_01 );
            
            // alert(  numeros_parametro_01 + "\n"  +  letras_parametro_01 ); 
            
            
            let lista_de_parametros = ""; 
            try{  
                
                lista_de_parametros  =  letras_parametro_01.trim() + "&" + letras_parametro_02.trim() + "&" + 
                                        letras_parametro_03.trim() + "&" + letras_parametro_04.trim() + "&" + 
                                        letras_parametro_05.trim() + "&" + 
                                        letras_parametro_06.trim() + "&" + 
                                        letras_parametro_07.trim() + "&" +
                                        letras_parametro_08.trim() + "&" +
                                        letras_parametro_09.trim()
                                ;  
                
                // alert(  "lista_de_parametros = " + lista_de_parametros );
                
                // alert(  encode_parametro_03  );  
                
                // alert(  encode_parametro_04  );  
                
                // alert(  lista_de_parametros  );  
                
            }catch(Exception){}
            
            
            
            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inv?lido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR?O
                        document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML =    //  MODELO GEN?RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "processando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    }, 0);

                    setTimeout(function(){ 
                        try{
                            // URL(ENDERE?O DE ARQUIVO) QUE SER? ENVIADA AO SERVIDOR
                            // COMANDO
                            // SUBCOMANDO
                            // ARGUMENTOS
                            // @ COMANDO @ SUBCOMANDO @ ARGUMENTO_01 & ARGUMENTO_02
                            //const encode = encodeURIComponent(descricao_loja);
                            var url = "@" + COMANDO + "@" + SUBCOMANDO + "@" + id_da_sessao + "@" + lista_de_parametros;
                            $.ajax({
                                url: url,
                                    success: function(data) {
                                        
                                        //alert( "OK - " + data );  
                                        // SE O ARQUIVO N?O EXISTIR NO SERVIDOR 
                                        if( data.trim() === "pagina_nao_encontrada" ){
                                            
                                            try{          
                                                
                                                window.open('../404.html', '_parent');
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                
                                                window.open('../405.html', '_parent');
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P?GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML = data;
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        window.open('../405.html', '_parent');
                                    }
                            });
                        }catch(Exception){}
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){}    
            }

        }catch(Exception){}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 





















function _comunicacao_com_o_servidor_10p( COMANDO, SUBCOMANDO, ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR, 
                                      parametro_01, parametro_02, parametro_03, parametro_04, parametro_05, parametro_06, 
                                      parametro_07, parametro_08, parametro_09, parametro_10  
){        
        try{
            
            /*
             alert(  "numeros_parametro_01 = " + parametro_01 );
             alert(  "numeros_parametro_02 = " + parametro_02 );
             alert(  "numeros_parametro_03 = " + parametro_03 );
             alert(  "numeros_parametro_04 = " + parametro_04 );
             */
            
            let numeros_parametro_01 = "";   try{   numeros_parametro_01 =  transformar_para_numero( parametro_01 );   }catch(Exception){}
            let numeros_parametro_02 = "";   try{   numeros_parametro_02 =  transformar_para_numero( parametro_02 );   }catch(Exception){}
            let numeros_parametro_03 = "";   try{   numeros_parametro_03 =  transformar_para_numero( parametro_03 );   }catch(Exception){}
            let numeros_parametro_04 = "";   try{   numeros_parametro_04 =  transformar_para_numero( parametro_04 );   }catch(Exception){}
            let numeros_parametro_05 = "";   try{   numeros_parametro_05 =  transformar_para_numero( parametro_05 );   }catch(Exception){}
            let numeros_parametro_06 = "";   try{   numeros_parametro_06 =  transformar_para_numero( parametro_06 );   }catch(Exception){}
            let numeros_parametro_07 = "";   try{   numeros_parametro_07 =  transformar_para_numero( parametro_07 );   }catch(Exception){}
            let numeros_parametro_08 = "";   try{   numeros_parametro_08 =  transformar_para_numero( parametro_08 );   }catch(Exception){}
            let numeros_parametro_09 = "";   try{   numeros_parametro_09 =  transformar_para_numero( parametro_09 );   }catch(Exception){}
            let numeros_parametro_10 = "";   try{   numeros_parametro_10 =  transformar_para_numero( parametro_10 );   }catch(Exception){}
            
            // alert(  numeros_parametro_01 ); 
            
            let letras_parametro_01 = "";   try{   letras_parametro_01 = transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
            let letras_parametro_02 = "";   try{   letras_parametro_02 = transformar_para_texto(  numeros_parametro_02  )   }catch(Exception){}
            let letras_parametro_03 = "";   try{   letras_parametro_03 = transformar_para_texto(  numeros_parametro_03  )   }catch(Exception){}
            let letras_parametro_04 = "";   try{   letras_parametro_04 = transformar_para_texto(  numeros_parametro_04  )   }catch(Exception){}
            let letras_parametro_05 = "";   try{   letras_parametro_05 = transformar_para_texto(  numeros_parametro_05  )   }catch(Exception){}
            let letras_parametro_06 = "";   try{   letras_parametro_06 = transformar_para_texto(  numeros_parametro_06  )   }catch(Exception){}
            let letras_parametro_07 = "";   try{   letras_parametro_07 = transformar_para_texto(  numeros_parametro_07  )   }catch(Exception){}
            let letras_parametro_08 = "";   try{   letras_parametro_08 = transformar_para_texto(  numeros_parametro_08  )   }catch(Exception){}
            let letras_parametro_09 = "";   try{   letras_parametro_09 = transformar_para_texto(  numeros_parametro_09  )   }catch(Exception){}
            let letras_parametro_10 = "";   try{   letras_parametro_10 = transformar_para_texto(  numeros_parametro_10  )   }catch(Exception){}
            
            // alert(  letras_parametro_01 );
            
            // alert(  numeros_parametro_01 + "\n"  +  letras_parametro_01 ); 
            
            
            let lista_de_parametros = ""; 
            try{  
                
                lista_de_parametros  =  letras_parametro_01.trim() + "&" + letras_parametro_02.trim() + "&" + 
                                        letras_parametro_03.trim() + "&" + letras_parametro_04.trim() + "&" + 
                                        letras_parametro_05.trim() + "&" + 
                                        letras_parametro_06.trim() + "&" + 
                                        letras_parametro_07.trim() + "&" +
                                        letras_parametro_08.trim() + "&" +
                                        letras_parametro_09.trim() + "&" +
                                        letras_parametro_10.trim()
                                ;  
                
                // alert(  "lista_de_parametros = " + lista_de_parametros );
                
                // alert(  encode_parametro_03  );  
                
                // alert(  encode_parametro_04  );  
                
                // alert(  lista_de_parametros  );  
                
            }catch(Exception){}
            
            
            
            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inv?lido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR?O
                        document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML =    //  MODELO GEN?RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "processando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    }, 0);

                    setTimeout(function(){ 
                        try{
                            // URL(ENDERE?O DE ARQUIVO) QUE SER? ENVIADA AO SERVIDOR
                            // COMANDO
                            // SUBCOMANDO
                            // ARGUMENTOS
                            // @ COMANDO @ SUBCOMANDO @ ARGUMENTO_01 & ARGUMENTO_02
                            //const encode = encodeURIComponent(descricao_loja);
                            var url = "@" + COMANDO + "@" + SUBCOMANDO + "@" + id_da_sessao + "@" + lista_de_parametros;
                            $.ajax({
                                url: url,
                                    success: function(data) {
                                        
                                        //alert( "OK - " + data );  
                                        // SE O ARQUIVO N?O EXISTIR NO SERVIDOR 
                                        if( data.trim() === "pagina_nao_encontrada" ){
                                            
                                            try{          
                                                
                                                window.open('../404.html', '_parent');
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                
                                                window.open('../405.html', '_parent');
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P?GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P?GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML = data;
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        window.open('../405.html', '_parent');
                                    }
                            });
                        }catch(Exception){}
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){}    
            }

        }catch(Exception){}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 































// RECEBE TODOS OS PARÂMETROS SEPARADOS POR: |
function _comunicacao_com_o_servidor_generica( COMANDO, SUBCOMANDO, ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR, parametro_01 ){   
    
   ///alert(  parametro_01 ); 
    
    let lista_de_parametros = "";
    let numeros_parametro_01 = ""; 
    try{
            
            
            try{
                
                var divisao_dos_parametros_recebidos = ""; try{  divisao_dos_parametros_recebidos = parametro_01.split("|");   }catch(Exception){}
                
                for( var i = 0; i < divisao_dos_parametros_recebidos.length; i++ ) {          
                    
                    let parte_x = ""; try{ parte_x = divisao_dos_parametros_recebidos[i].trim();  }catch(Exception){}
                    
                    try{ numeros_parametro_01 =  transformar_para_numero( parte_x );  }catch(Exception){}
                
                    let letras_parametro_01 = "";  try{ letras_parametro_01 = transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
                    
                    
                    lista_de_parametros +=  letras_parametro_01 + "&"; 
                }
                
            }catch(Exception){}          //         "|"
            
            //alert(  numeros_parametro_01 + "<br>" +  lista_de_parametros ); 

            // alert(  numeros_parametro_01 ); 
            
            // alert(  letras_parametro_01 );
            
            // alert(  numeros_parametro_01 + "\n"  +  letras_parametro_01 ); 
            
            
            try{  
                
                // alert(  encode_parametro_03  );  
                
                // alert(  encode_parametro_04  );  
                
                // alert(  lista_de_parametros  );  
                
            }catch(Exception){}
            
            
            
            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inválido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR�O
                        document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML =    //  MODELO GEN�RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "processando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    }, 0);

                    setTimeout(function(){ 
                        try{
                            // URL(ENDERE�O DE ARQUIVO) QUE SER� ENVIADA AO SERVIDOR
                            // COMANDO
                            // SUBCOMANDO
                            // ARGUMENTOS
                            // @ COMANDO @ SUBCOMANDO @ ARGUMENTO_01 & ARGUMENTO_02
                            //const encode = encodeURIComponent(descricao_loja);
                            var url = "@" + COMANDO + "@" + SUBCOMANDO + "@" + id_da_sessao + "@" + lista_de_parametros;
                            $.ajax({
                                url: url,
                                    success: function(data) {
                                        
                                        //alert( "OK - " + data );  
                                        // SE O ARQUIVO N�O EXISTIR NO SERVIDOR 
                                        if( data.trim() === "pagina_nao_encontrada" ){
                                            
                                            try{          
                                                
                                                window.open('../404.html', '_parent');
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                
                                                window.open('../405.html', '_parent');
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P�GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P�GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P�GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            document.getElementById( ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR ).innerHTML = data;
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        window.open('../405.html', '_parent');
                                    }
                            });
                        }catch(Exception){}
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){}    
            }

        }catch(Exception){}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 









///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//retira_letra
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function retira_letra(txt, letra_para_retirar){            
            //var sb = [];
            var sb = "";
                                                                
            try{
                                        
                for( var i = 0; i < txt.length; i++ ) {
                    
                    var letra_unicode = String.fromCharCode( txt[i] );
                    
                    if (letra_unicode === letra_para_retirar) {
                        
                        //sb += letra_unicode;
                    }
                    else{
                        
                        sb += letra_unicode;
                    }
                                    
                }
                
                return sb;
                                                
            }catch(Exception){
                
                //document.getElementById("resposta").innerText = "importar_Para_Alfabeto_JM -- " + Exception;
            }                       
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//retira_letra
///////////////////////////////////////////////////////////////////////////////////////////////////////////









///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//exportar_Para_Alfabeto_JM_Sem_Arroba
///////////////////////////////////////////////////////////////////////////////////////////////////////////        
        function transformar_para_numero(argumento){            
            //var sb = [];
            var sb = "";
                                                                
            try{
                                        
                for( var i = 0; i < argumento.length; i++ ) {
                    
                    var decimal_unicode = argumento.charCodeAt(i);
                    
                    if ( decimal_unicode === 10 ){
                        
                        sb += decimal_unicode;
                        sb += "-";
                        
                        // sb += "_";
                    }
                    else{
                        
                        sb += decimal_unicode;
                        sb += "-";
                    }
                                    
                }
                
                return sb;
                                                
            }catch(Exception){
                
                document.getElementById("resposta").innerText = "exportar_Para_Alfabeto_JM_Sem_Arroba -- " + Exception;
            }                       
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//exportar_Para_Alfabeto_JM_Sem_Arroba
///////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//importar_Para_Alfabeto_JM
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function transformar_para_texto(txt){            
            //var sb = [];
            var sb = "";
                                                                
            try{
                
                var argumento = txt.split("-");
                                        
                for( var i = 0; i < argumento.length; i++ ) {
                    
                    
                    if ( argumento[i] > 32 ){
                        
                        var letra_unicode = String.fromCharCode( argumento[i] );             
                            
                        sb += letra_unicode;
                    
                        // alert(   letra_unicode  +  "  @@ " +  argumento[i] );

                    }
                    else   if   (      argumento[i] > 9        ){
                        
                        if   (      argumento[i] < 11       ){
                            
                            sb += "_";
                        }
                    }
                                                        
                }
                
                return sb;
                                                
            }catch(Exception){
                
                document.getElementById("resposta").innerText = "importar_Para_Alfabeto_JM -- " + Exception;
            }                       
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//importar_Para_Alfabeto_JM
///////////////////////////////////////////////////////////////////////////////////////////////////////////  