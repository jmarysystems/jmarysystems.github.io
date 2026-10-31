function verificar_se_produto_existe_e_trazer( ARGUMENTO_01_LOJA, ARGUMENTO_02_NUMERO, ARGUMENTO_03_ENDERECO, codigo_ou_descricao_id_campo, tipo   ) {
    
    var var_loja                = "";  try{  var_loja                = ARGUMENTO_01_LOJA;     }catch(Exception){}
    var var_num_inventario      = "";  try{  var_num_inventario      = ARGUMENTO_02_NUMERO;   }catch(Exception){}
    var var_endereco            = "";  try{  var_endereco            = ARGUMENTO_03_ENDERECO;   }catch(Exception){}
    //var var_codigo_ou_descricao = "";  try{  var_codigo_ou_descricao = codigo_ou_descricao;   }catch(Exception){}
    
    var var_codigo_ou_descricao = document.getElementById(    codigo_ou_descricao_id_campo  );
    
    //alert(  "LOJA = " + var_loja + " ## \n"  +   "Nº INVENT. = " + var_num_inventario + " ##\n ALVO = " + var_codigo_ou_descricao   ); 

    
    // Verifica se todos os campos existem
    
    // Verifica se ambos os campos têm valor
    if (  var_loja !== ''   &&  var_num_inventario !== ''      ) {
        
        var COMANDO = "";      try{ COMANDO    = "INVENTARIOS"; }catch(Exception){}
        var SUBCOMANDO = "";   try{ SUBCOMANDO = "WEB_INVENTARIO_CONSULTAR_PRODUTO_POR_INVENTARIO"; }catch(Exception){}
            
        var parametro_01 = "";      
        try{             
            parametro_01    =             
                var_loja +
                "   |   " +
                var_num_inventario +
                "   |   " +
                var_endereco +
                "   |   " +
                var_codigo_ou_descricao.value.trim()
            ; 
                
          //alert(  "LOJA = " + var_loja + " ## \n"  +   "Nº INVENT. = " + var_num_inventario + " ## \n"  +   "ENDER. = " + var_endereco + " ##\n ALVO = " + var_codigo_ou_descricao   ); 
           
           if (  tipo === 'botao'  ) {
               
               _fazer_consulta_pelo_ean_sku_ou_descricao_produto(  COMANDO, SUBCOMANDO, parametro_01  );
           }
           else{
               
               if (  var_codigo_ou_descricao.value.trim().length > 1  ) {
                   
                   // alert(  var_codigo_ou_descricao.value.trim().length   );
                   
                    _fazer_consulta_pelo_ean_sku_ou_descricao_produto(  COMANDO, SUBCOMANDO, parametro_01  );
               }
           }
        }catch(Exception){
            
            alert(  "ERRO = " + Exception   );
        }
        
        ////////////////////////////////////  IR PARA CONSULTAR EAN
    } 
    else {

        //alert(  "## nada ## - " + "LOJA = " + var_loja + " ## \n"  +   "Nº INVENT. = " + var_num_inventario + " ##\n ALVO = " + var_codigo_ou_descricao   ); 
    } 

      
}


















function avancar_para_proximo_campo(event, quantidade_id_campo, ean_id_campo, ARGUMENTO_01_LOJA, ARGUMENTO_02_NUMERO, ENDERECO   ) {
    
    const quantidade_proximoCampo = document.getElementById(    quantidade_id_campo  );
    const ean_anteriorCampo       = document.getElementById(    ean_id_campo         );
    
    // Se for evento de tecla
    if ( event.type === 'keydown' ) {
        // Se for TAB, previne e mantém foco se vazio
        if ( event.key === 'Tab' ) {
            if ( ean_anteriorCampo.value.trim() === '' ) {
                event.preventDefault();
                ean_anteriorCampo.focus();
                // Feedback visual
                ean_anteriorCampo.style.borderColor = '#ff4444';
                ean_anteriorCampo.style.boxShadow = '0 0 10px rgba(255,68,68,0.5)';
                setTimeout(() => {
                    ean_anteriorCampo.style.borderColor = '';
                    ean_anteriorCampo.style.boxShadow = '';
                }, 2000);
                return;
            }
            return; // Deixa o TAB funcionar normalmente se tiver conteúdo
        }
        
        // Se não for Enter, ignora
        if ( event.key !== 'Enter' ) {
            return;
        }
        
        event.preventDefault();
    }
    
    // Para Enter ou blur
    if (  quantidade_proximoCampo  &&  ean_anteriorCampo  ) {
        if ( ean_anteriorCampo.value.trim() !== '' ) {
            
            quantidade_proximoCampo.focus();
                     
            var COMANDO = "";      try{ COMANDO    = "INVENTARIOS"; }catch(Exception){}
            var SUBCOMANDO = "";   try{ SUBCOMANDO = "WEB_INVENTARIO_CONSULTAR_EAN_E_NOME_DO_PRODUTO"; }catch(Exception){}
            
            var parametro_01 = "";      
            try{             
                parametro_01    =             
                    ean_anteriorCampo.value.trim() +
                    "   |   " +
                    quantidade_proximoCampo.value.trim() +
                    "   |   " +
                    ARGUMENTO_01_LOJA + "_" + ARGUMENTO_02_NUMERO + "_" + ENDERECO  
                ; 
                
                _buscar_ean_comunicacao_com_o_servidor(  COMANDO, SUBCOMANDO, parametro_01  );
            }catch(Exception){}
    
        
            
        } else {
            
            // Feedback visual mais suave
            ean_anteriorCampo.style.border = '2px solid #FF6B6B';
            ean_anteriorCampo.style.backgroundColor = '#4a2a2a';
            ean_anteriorCampo.style.transition = 'all 0.3s ease';
            
            // Mostra mensagem temporária (opcional)
            const placeholderOriginal = ean_anteriorCampo.placeholder;
            ean_anteriorCampo.placeholder = '⚠️ Campo obrigatório!';
            
            //*
            setTimeout(() => {
                ean_anteriorCampo.style.border = '';
                ean_anteriorCampo.style.backgroundColor = '#3A3A3A';
                //ean_anteriorCampo.placeholder = placeholderOriginal;
                ean_anteriorCampo.placeholder = '';
            }, 2000);
            //*/
            
            // Mantém foco no campo atual
            ean_anteriorCampo.focus();
            
        }
    }
}













function verificar_se_ean_existe_trazer_nome( event, quantidade_id_campo, ean_id_campo, quantidade_por_embalagem_id_campo, 
                                                                                        ARGUMENTO_01_LOJA, ARGUMENTO_02_NUMERO, ENDERECO   ) {
    
    //alert(  ean_id_campo + " - " + quantidade_id_campo + " - " + quantidade_por_embalagem_id_campo ); 
    
    // Verifica se é Enter
    if ( event.key !== 'Enter' ) {
        return; // Ignora outras teclas
    }
    
    // Previne comportamento padrão se for Enter
    if ( event.key === 'Enter' ) {
        event.preventDefault();
    }
    
    const quantidade               = document.getElementById( quantidade_id_campo );
    const ean                      = document.getElementById( ean_id_campo );
    const quantidade_por_embalagem = document.getElementById( quantidade_por_embalagem_id_campo );
    
    // Verifica se todos os campos existem
    if (!quantidade || !ean  ) {
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                 //ean_e_nome_do_produto.value = 'Campos não encontrados';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
        return;
    }
    
    // Verifica se ambos os campos têm valor
    if (  ean.value.trim() !== ''   &&  quantidade.value.trim() !== ''   &&  quantidade_por_embalagem.value.trim() !== ''   ) {
        
        var COMANDO = "";      try{ COMANDO    = "INVENTARIOS"; }catch(Exception){}
        var SUBCOMANDO = "";   try{ SUBCOMANDO = "WEB_INVENTARIO_CONSULTAR_EAN_E_QUANTIDADE"; }catch(Exception){}
            
        var parametro_01 = "";      
        try{             
            parametro_01    =             
                ean.value.trim() +
                "   |   " +
                quantidade.value.trim() +
                "   |   " +
                quantidade_por_embalagem.value.trim() +
                "   |   " +
                ARGUMENTO_01_LOJA + "_" + ARGUMENTO_02_NUMERO + "_" + ENDERECO  
            ; 
                
            _buscar_ean_quantidade_comunicacao_com_o_servidor(  COMANDO, SUBCOMANDO, parametro_01  );
        }catch(Exception){}
        
        ////////////////////////////////////  IR PARA CONSULTAR EAN
        //quantidade.innerText     = "⚠️ " + ean.value.trim();
        //quantidade.style.color   = '#4CAF50'; // Verde
        //quantidade.style.border  = '2px solid #4CAF50';
        //quantidade.style.display = 'block';
    } 
    else if (  ean.value.trim() === ''   ) {
        
        // Feedback visual mais suave
            ean.style.border = '2px solid #FF6B6B';
            ean.style.backgroundColor = '#4a2a2a';
            ean.style.transition = 'all 0.3s ease';
            
            // Mostra mensagem temporária (opcional)
            const placeholderOriginal = ean.placeholder;
            ean.placeholder = '⚠️ Campo obrigatório!';
            
            //*
            setTimeout(() => {
                ean.style.border = '';
                ean.style.backgroundColor = '#3A3A3A';
                //ean.placeholder = placeholderOriginal;
                ean.placeholder = '';
            }, 2000);
            //*/
            
            // Mantém foco no campo atual
            // ean.focus();
    } 
    else if (   quantidade.value.trim() === ''     ) {
        
        // Feedback visual mais suave
            quantidade.style.border = '2px solid #FF6B6B';
            quantidade.style.backgroundColor = '#4a2a2a';
            quantidade.style.transition = 'all 0.3s ease';
            
            // Mostra mensagem temporária (opcional)
            const placeholderOriginal = quantidade.placeholder;
            quantidade.placeholder = '⚠️ Campo obrigatório!';
            
            //*
            setTimeout(() => {
                quantidade.style.border = '';
                quantidade.style.backgroundColor = '#3A3A3A';
                //quantidade.placeholder = placeholderOriginal;
                quantidade.placeholder = '';
            }, 2000);
            //*/
            
            // Mantém foco no campo atual
            // quantidade.focus();
    } 
    else if (   quantidade_por_embalagem.value.trim() === ''     ) {
        
        // Feedback visual mais suave
            quantidade_por_embalagem.style.border = '2px solid #FF6B6B';
            quantidade_por_embalagem.style.backgroundColor = '#4a2a2a';
            quantidade_por_embalagem.style.transition = 'all 0.3s ease';
            
            // Mostra mensagem temporária (opcional)
            const placeholderOriginal = quantidade_por_embalagem.placeholder;
            quantidade_por_embalagem.placeholder = '⚠️ Campo obrigatório!';
            
            //*
            setTimeout(() => {
                quantidade_por_embalagem.style.border = '';
                quantidade_por_embalagem.style.backgroundColor = '#3A3A3A';
                //quantidade_por_embalagem.placeholder = placeholderOriginal;
                quantidade_por_embalagem.placeholder = '';
            }, 2000);
            //*/
            
            // Mantém foco no campo atual
            // quantidade_por_embalagem.focus();
    }
      
}




































function focar_elemento_e_transformar_quantidade_negativa( quantidade_id_campo, ean_id_campo   ) {
    
   // alert(  ean_id_campo + " - " + quantidade_id_campo   ); 
        
    const quantidade               = document.getElementById( quantidade_id_campo );
    const ean                      = document.getElementById( ean_id_campo );
    
    //alert(  ean_id_campo + " - " + ean + " ### " + quantidade_id_campo + " - " + quantidade );
    
    // Verifica se todos os campos existem
    if (!quantidade || !ean  ) {
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                 //ean_e_nome_do_produto.value = 'Campos não encontrados';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
        return;
    }
    
    // Verifica se ambos os campos têm valor
    if (  ean.value.trim() !== ''   &&  quantidade.value.trim() !== ''    ) {
        
        //alert(  ean_id_campo + " - " + ean.value.trim() + " ### " + quantidade_id_campo + " - " + quantidade.value.trim() );
  
        try{  
            
            if (  quantidade.value.trim() > 0  ) {
                
                //alert(  " MAIOR ### " + ean_id_campo + " = " + ean.value.trim() + " ### " + quantidade_id_campo + " = " + quantidade.value.trim() );
            
                // ✅ Número válido e maior que zero
                quantidade.style.border = '2px solid #FF6B6B';
                quantidade.value = '-' + quantidade.value.trim();
                
                quantidade.focus({ preventScroll: true });
                quantidade.scrollIntoView({
                    behavior: 'smooth',   // rolagem suave
                    block: 'center',      // 'start' | 'center' | 'end' | 'nearest'
                    inline: 'nearest'     // 'start' | 'center' | 'end' | 'nearest'
                });
            }
            else{
                
                //alert(  " MENOR ### " + ean_id_campo + " = " + ean.value.trim() + " ### " + quantidade_id_campo + " = " + quantidade.value.trim() );
                
                var quantidade_positiva = 0;   try{ quantidade_positiva = ( quantidade.value.trim() * -1 ); }catch(Exception){}
                
                quantidade.focus({ preventScroll: true });
                quantidade.scrollIntoView({
                    behavior: 'smooth',   // rolagem suave
                    block: 'center',      // 'start' | 'center' | 'end' | 'nearest'
                    inline: 'nearest'     // 'start' | 'center' | 'end' | 'nearest'
                });
                
                // quantidade.value = quantidade_positiva;
                // ❌ É número, mas é zero ou negativo
                
                
                // Feedback visual mais suave
                quantidade.style.border = '2px solid #FF6B6B';
                quantidade.style.backgroundColor = '#4a2a2a';
                quantidade.style.transition = 'all 0.3s ease';
                            
                // Mostra mensagem temporária (opcional)
                const placeholderOriginal = quantidade.placeholder;
                quantidade.placeholder = '✅️ Quantidade Negativa!';
            
                //*
                setTimeout(() => {
                    quantidade.style.border = '';
                    quantidade.style.backgroundColor = '#3A3A3A';
                   //quantidade.placeholder = placeholderOriginal;
                    quantidade.placeholder = '';
                    
                    quantidade.value = quantidade.value.trim();

                }, 2000);
                //*/                    
            }
            
        }catch(Exception){}
        
        ////////////////////////////////////  IR PARA CONSULTAR EAN
        //quantidade.innerText     = "⚠️ " + ean.value.trim();
        //quantidade.style.color   = '#4CAF50'; // Verde
        //quantidade.style.border  = '2px solid #4CAF50';
        //quantidade.style.display = 'block';
    } 
    else if (  ean.value.trim() === ''   ) {
        
        ean.focus({ preventScroll: true });
                ean.scrollIntoView({
                    behavior: 'smooth',   // rolagem suave
                    block: 'center',      // 'start' | 'center' | 'end' | 'nearest'
                    inline: 'nearest'     // 'start' | 'center' | 'end' | 'nearest'
                });
        
        // Feedback visual mais suave
            ean.style.border = '2px solid #FF6B6B';
            ean.style.backgroundColor = '#4a2a2a';
            ean.style.transition = 'all 0.3s ease';
            
            // Mostra mensagem temporária (opcional)
            const placeholderOriginal = ean.placeholder;
            ean.placeholder = '⚠️ Campo obrigatório!';
            
            //*
            setTimeout(() => {
                ean.style.border = '';
                ean.style.backgroundColor = '#3A3A3A';
                //ean.placeholder = placeholderOriginal;
                ean.placeholder = '';
            }, 2000);
            //*/
            
            // Mantém foco no campo atual
            // ean.focus();
    } 
    else if (   quantidade.value.trim() === ''     ) {
        
        quantidade.focus({ preventScroll: true });
        quantidade.scrollIntoView({
                behavior: 'smooth',   // rolagem suave
                block: 'center',      // 'start' | 'center' | 'end' | 'nearest'
                inline: 'nearest'     // 'start' | 'center' | 'end' | 'nearest'
        });
        
        quantidade.value = '-';
        // Feedback visual mais suave
            quantidade.style.border = '2px solid #FF6B6B';
            quantidade.style.backgroundColor = '#4a2a2a';
            quantidade.style.transition = 'all 0.3s ease';
            
            // Mostra mensagem temporária (opcional)
            const placeholderOriginal = quantidade.placeholder;
            //quantidade.placeholder = '✅️ Quantidade Negativa!';
            quantidade.placeholder = '❌ Informe uma Quantidade!';
            
            //*
            setTimeout(() => {
                quantidade.style.border = '';
                quantidade.style.backgroundColor = '#3A3A3A';
                //quantidade.placeholder = placeholderOriginal;
                quantidade.placeholder = '';
                
                //quantidade.value = '-';
                quantidade.focus();
            }, 2000);
            //*/
            
            // Mantém foco no campo atual
            // quantidade.focus();
            
            //quantidade.value = '-';
    } 

      
}




















// RECEBE TODOS OS PARÂMETROS SEPARADOS POR: |         
function _buscar_ean_comunicacao_com_o_servidor(  COMANDO, SUBCOMANDO,  parametro_01  ){   
    
   //lert(  parametro_01 ); 
    
    let lista_de_parametros = "";
    let numeros_parametro_01 = ""; 
    try{
            
            
            try{
                
                var divisao_dos_parametros_recebidos = ""; try{  divisao_dos_parametros_recebidos = parametro_01.split("|");   }catch(Exception){}
                
                for( var i = 0; i < divisao_dos_parametros_recebidos.length; i++ ) {          
                    
                    let parte_x = ""; try{ parte_x = divisao_dos_parametros_recebidos[i].trim();  }catch(Exception){}
                    
                    try{ numeros_parametro_01 =  utilitario_transformar_para_numero( parte_x );  }catch(Exception){}
                
                    let letras_parametro_01 = "";  try{ letras_parametro_01 = utilitario_transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
                    
                    
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
            
            
            
            var ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR = ""; try{ ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR = document.getElementById ('ean_e_nome_do_produto').value; }catch(Exception){}
            
            const ONDE_RETORNAR_HISTORICO_DO_SERVIDOR = document.getElementById('div_consultar_ean_e_historico');

            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inválido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.style.display = 'block';
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR�O
                        ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML =    //  MODELO GEN�RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%; '> " + "Procurando EAN..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%; '> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
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
                                                //alert( "pagina_nao_encontrada - " + data ); 
                                                //window.open('../404.html', '_parent');
                                                
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = '⚠️ pagina_nao_encontrada';
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.color = '#FF6B6B'; // Vermelho
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.border = '2px solid #FF6B6B';
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                                
                                                //////////////
                                                ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.style.display = 'block';
                                                ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML = '';
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                //alert( "O_USUARIO_NAO_ESTA_LOGADO - " + data ); 
                                                //window.open('../405.html', '_parent');
                                                
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = '⚠️ O_USUARIO_NAO_ESTA_LOGADO';
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.color = '#FF6B6B'; // Vermelho
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.border = '2px solid #FF6B6B';
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                                
                                                //////////////
                                                ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.style.display = 'block';
                                                ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML = '';
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            //alert( "O COMANDO FOI ACEITO PELO SERVIDOR - " + data ); 
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P�GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P�GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P�GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML = 
                                                    //" <HR SIZE=3 WIDTH=100% NOSHADE >" +
                                                    data;
                                                    
                                            // Tudo preenchido - mostra o EAN         
                                            /*
                                            ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = "⚠️ " + data;
                                            ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.color = '#4CAF50'; // Verde
                                            ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.border = '2px solid #4CAF50';
                                            ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                            
                                            //////////////
                                            ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.style.display = 'block';
                                            ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML = '';
                                            */
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        //window.open('../405.html', '_parent');

                                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = '⚠️ ' + "ERROR - " + error;
                                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.color = '#FF6B6B'; // Vermelho
                                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.border = '2px solid #FF6B6B';
                                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                        
                                        //////////////
                                        ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.style.display = 'block';
                                        ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML =    //  MODELO GEN�RICO
                                        //" <HR SIZE=3 WIDTH=100% NOSHADE >" +
                                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Erro!" + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/aviso_ean2.png' style='cursor: pointer; 'width='400' height='150'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                                    }
                            });
                        }catch(Exception){ alert("Erro 01"); }
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){alert("Erro 02");}    
            }

        }catch(Exception){alert("Erro 03");}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 
























// RECEBE TODOS OS PARÂMETROS SEPARADOS POR: |         
function _buscar_ean_quantidade_comunicacao_com_o_servidor(  COMANDO, SUBCOMANDO,  parametro_01  ){   
    
   //alert(  parametro_01 ); 
    
    let lista_de_parametros = "";
    let numeros_parametro_01 = ""; 
    try{
            
            
            try{
                
                var divisao_dos_parametros_recebidos = ""; try{  divisao_dos_parametros_recebidos = parametro_01.split("|");   }catch(Exception){}
                
                for( var i = 0; i < divisao_dos_parametros_recebidos.length; i++ ) {          
                    
                    let parte_x = ""; try{ parte_x = divisao_dos_parametros_recebidos[i].trim();  }catch(Exception){}
                    
                    try{ numeros_parametro_01 =  utilitario_transformar_para_numero( parte_x );  }catch(Exception){}
                
                    let letras_parametro_01 = "";  try{ letras_parametro_01 = utilitario_transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
                    
                    
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
            
            
            
            var ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR = ""; try{ ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR = document.getElementById ('ean_e_nome_do_produto').value; }catch(Exception){}
            
            const ONDE_RETORNAR_HISTORICO_DO_SERVIDOR = document.getElementById('div_consultar_ean_e_historico');

            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inválido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.style.display = 'block';
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR�O
                        ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML =    //  MODELO GEN�RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%; '> " + "Procurando EAN..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%; '> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
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
                                                //alert( "pagina_nao_encontrada - " + data ); 
                                                //window.open('../404.html', '_parent');
                                                
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = '⚠️ pagina_nao_encontrada';
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.color = '#FF6B6B'; // Vermelho
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.border = '2px solid #FF6B6B';
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                                
                                                //////////////
                                                ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.style.display = 'block';
                                                ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML = '';
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                //alert( "O_USUARIO_NAO_ESTA_LOGADO - " + data ); 
                                                //window.open('../405.html', '_parent');
                                                
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = '⚠️ O_USUARIO_NAO_ESTA_LOGADO';
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.color = '#FF6B6B'; // Vermelho
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.border = '2px solid #FF6B6B';
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                                
                                                //////////////
                                                ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.style.display = 'block';
                                                ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML = '';
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            //alert( "O COMANDO FOI ACEITO PELO SERVIDOR - " + data ); 
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P�GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P�GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P�GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            const CAMPO_EAN                      = document.getElementById('form_ean');
                                            const CAMPO_QUANTIDADE               = document.getElementById('form_quantidade');
                                            const CAMPO_QUANTIDADE_POR_EMBALAGEM = document.getElementById('form_quantidade_por_embalagem');
                                            
                                            CAMPO_EAN.value  = '';
                                            CAMPO_QUANTIDADE.value  = '';
                                            CAMPO_QUANTIDADE_POR_EMBALAGEM.value  = '1';
                                            
                                            CAMPO_EAN.focus();
                                            
                                            ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML = 
                                                    //" <HR SIZE=3 WIDTH=100% NOSHADE >" +
                                                    data;
                                                    
                                            // Tudo preenchido - mostra o EAN         
                                            /*
                                            ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = "⚠️ " + data;
                                            ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.color = '#4CAF50'; // Verde
                                            ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.border = '2px solid #4CAF50';
                                            ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                            
                                            //////////////
                                            ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.style.display = 'block';
                                            ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML = '';
                                            */
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        //window.open('../405.html', '_parent');

                                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = '⚠️ ' + "ERROR - " + error;
                                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.color = '#FF6B6B'; // Vermelho
                                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.border = '2px solid #FF6B6B';
                                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                        
                                        //////////////
                                        ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.style.display = 'block';
                                        ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML =    //  MODELO GEN�RICO
                                        //" <HR SIZE=3 WIDTH=100% NOSHADE >" +
                                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Erro!" + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/aviso_ean2.png' style='cursor: pointer; 'width='400' height='150'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                                    }
                            });
                        }catch(Exception){ alert("Erro 01"); }
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){alert("Erro 02");}    
            }

        }catch(Exception){alert("Erro 03");}
//////////////////////////////////////////////////////////////////////////////////////////////////      
     }
////////////////////////////////////////////////////////////////////////////////////////////////// 







































// RECEBE TODOS OS PARÂMETROS SEPARADOS POR: |         
function _fazer_consulta_pelo_ean_sku_ou_descricao_produto(  COMANDO, SUBCOMANDO,  parametro_01  ){   
    
   //alert( "## 01 ## - " + parametro_01 ); 
    
    let lista_de_parametros = "";
    let numeros_parametro_01 = ""; 
    try{
            
            
            try{
                
                var divisao_dos_parametros_recebidos = ""; try{  divisao_dos_parametros_recebidos = parametro_01.split("|");   }catch(Exception){}
                
                for( var i = 0; i < divisao_dos_parametros_recebidos.length; i++ ) {          
                    
                    let parte_x = ""; try{ parte_x = divisao_dos_parametros_recebidos[i].trim();  }catch(Exception){}
                    
                    try{ numeros_parametro_01 =  utilitario_transformar_para_numero( parte_x );  }catch(Exception){}
                
                    let letras_parametro_01 = "";  try{ letras_parametro_01 = utilitario_transformar_para_texto(  numeros_parametro_01  )   }catch(Exception){}
                    
                    
                    lista_de_parametros +=  letras_parametro_01 + "&"; 
                }
                
            }catch(Exception){}          //         "|"
            
            // alert(  numeros_parametro_01 + "\n" +  lista_de_parametros ); 

            // alert(  numeros_parametro_01 ); 
            
            // alert(  letras_parametro_01 );
            
            // alert(  numeros_parametro_01 + "\n"  +  letras_parametro_01 ); 
            
            
            try{  
                
                // alert(  encode_parametro_03  );  
                
                // alert(  encode_parametro_04  );  
                
                // alert(  lista_de_parametros  );  
                
            }catch(Exception){}
            
            
            
            var ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR = ""; try{ ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR = document.getElementById ('div_consultar_lista_de_produtos'); }catch(Exception){}
            
            //const ONDE_RETORNAR_HISTORICO_DO_SERVIDOR = document.getElementById('div_consultar_ean_e_historico');

            var id_da_sessao = ""; try{ id_da_sessao = document.getElementById ('form_login_id_da_sessao').value; }catch(Exception){}
            
            
            if ( typeof SUBCOMANDO === 'undefined'  ||  SUBCOMANDO === null  ||  SUBCOMANDO === '' ) {                 
                alert("Subcomando Inválido");                       
            }   
            else {                 
                try{  
                    setTimeout(function(){ 
                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                        //  document.getElementById("resposta").innerHTML =                   //  MODELO PADR�O
                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML =    //  MODELO GEN�RICO
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%; '> " + "Procurando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%; '> <img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor: pointer; 'width='200' height='300'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
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
                                                //alert( "pagina_nao_encontrada - " + data ); 
                                                //window.open('../404.html', '_parent');
                                                
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = '⚠️ pagina_nao_encontrada';
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                                
                                                //////////////
                                                
                                            }catch(Exception){}
                                        }
                                        else if( data.trim() === "O_USUARIO_NAO_ESTA_LOGADO" ){
                                            // O_USUARIO_NAO_ESTA_LOGADO 
                                            
                                            try{          
                                                //alert( "O_USUARIO_NAO_ESTA_LOGADO - " + data ); 
                                                //window.open('../405.html', '_parent');
                                                
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = '⚠️ O_USUARIO_NAO_ESTA_LOGADO';
                                                ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                                
                                                //////////////
                                                
                                            }catch(Exception){}
                                        
                                        }else{
                                            //alert( "O COMANDO FOI ACEITO PELO SERVIDOR - " + data ); 
                                            // SE O COMANDO FOR ACEITO PELO SERVIDOR  ?
                                            
                                            // O SERVIDOR PODE ENVIAR UM LINK DA P�GINA GERADA 
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P�GINA ATUAL
                                            // O SERVIDOR PODE ENVIAR UMA STRING HTML PARA SER COLOCADO NO CORPO/RESPOSTA DA P�GINA ATUAL(form interno - com link)
                                            // <!-- target="_parent"   target="centro" -- target="_blank" -->   
                                            //window.open( url, '_parent');
                                            
                                            // 1) Insere o HTML recebido <--> SUBSTITUI TUDO ANTERIOR
                                            jQuery('#div_consultar_lista_de_produtos').html(data);

                                                    
                                            // Tudo preenchido - mostra o EAN         
                                            /*
                                            ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = "⚠️ " + data;
                                            ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                            
                                            //////////////
                                            ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.style.display = 'block';
                                            ONDE_RETORNAR_HISTORICO_DO_SERVIDOR.innerHTML = '';
                                            */
                                        }
                                    },
                                    error : function(error) {                                    
                                        //alert( "ERROR - " + error );
                                        //window.open('../405.html', '_parent');

                                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML = '⚠️ ' + "ERROR - " + error;
                                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.style.display = 'block';
                                        
                                        //////////////
                                        ONDE_RETORNAR_RESPOSTA_DO_SERVIDOR.innerHTML =    //  MODELO GEN�RICO
                                        //" <HR SIZE=3 WIDTH=100% NOSHADE >" +
                                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Erro!" + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                                        "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../../arquivos/imagens/003_login/aviso_ean2.png' style='cursor: pointer; 'width='400' height='150'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                                    }
                            });
                        }catch(Exception){ alert("Erro 01"); }
                    }, 0);
                    //*/
                    ///////////////////////////////////////////////////////////////////////////

                    
                }catch(Exception){alert("Erro 02");}    
            }

        }catch(Exception){alert("Erro 03");}
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
        function utilitario_transformar_para_numero(argumento){            
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
        function utilitario_transformar_para_texto(txt){            
            //var sb = [];
            var sb = "";
                                                                
            try{
                
                var argumento = txt.split("-");
                                        
                for( var i = 0; i < argumento.length; i++ ) {
                    
                    
                    if ( argumento[i] >= 32 ){
                        
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















///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//  TABELA ONMOUSEOVER
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function propriedade_da_tabela_ao_mouse_passar( id_linha_tr, cor_do_backgroundColor_Original, nova_cor, comando ){            

            var campo_linha_tr = document.getElementById( id_linha_tr );
                                                                
            try{
                
                if (  comando === 'onmouseover' ) {
                    
                    if ( !campo_linha_tr.classList.contains('linha_selecionada') ) { // SE A LINHA NÃO ESTIVER AZUL
                        
                        campo_linha_tr.style.backgroundColor = nova_cor;
                    }
                    
                } else if (  comando === 'onmouseout' ) {
                    
                    if ( !campo_linha_tr.classList.contains('linha_selecionada') ) { // SE A LINHA NÃO ESTIVER AZUL
                        
                        campo_linha_tr.style.backgroundColor = cor_do_backgroundColor_Original;
                    }
                    
                } else if (  comando === 'onclick' ) {
                 
                    if ( !campo_linha_tr.classList.contains('linha_selecionada') ) { // SE A LINHA NÃO ESTIVER AZUL
                        
                        campo_linha_tr.classList.add('linha_selecionada');
                        campo_linha_tr.style.backgroundColor = nova_cor;
                    }
                    else{
                        
                        campo_linha_tr.classList.remove('linha_selecionada');
                        campo_linha_tr.style.backgroundColor = cor_do_backgroundColor_Original;
                    }
                }
                           
            }catch( e ){
                
                //alert( "Erro --> " + Exception );
                console.error("Erro em propriedade_da_tabela_ao_mouse_passar:", e );
            }                       
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//  TABELA ONMOUSEOVER
///////////////////////////////////////////////////////////////////////////////////////////////////////////





