// ===== NOVA VERSÃO COM SCANNER ANIMADO =====

let scanner = null;
let scanTimeout = null;
let isScanning = false;

function html5_abrir_camera_para_ler_o_codigo_de_barras(  ARGUMENTO_01_LOJA,  ARGUMENTO_02_NUMERO,  ENDERECO  ) {
    /*
    alert(  
            "LOJA     == " + ARGUMENTO_01_LOJA + "<br>" + 
            "Nº INV.: == " + ARGUMENTO_02_NUMERO + "<br>" + 
            "ENDEREÇO == " + ENDERECO 
    ); 
    */
    
    // Remove scanner anterior se existir
    if (scanner) {
        try {
            scanner.stop();
            scanner.clear();
        } catch(e) {}
        scanner = null;
    }

    const videoElement = document.querySelector('#camera');
    const overlayElement = document.getElementById('scanner-overlay');

    // Cria overlay para a linha vermelha se não existir
    if (!overlayElement) {
        const overlay = document.createElement('div');
        overlay.id = 'scanner-overlay';
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 10;
        `;
        
        // Linha vermelha animada
        const scanLine = document.createElement('div');
        scanLine.id = 'scan-line';
        scanLine.style.cssText = `
            position: absolute;
            left: 10%;
            width: 80%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #ff0000, #ff4444, #ff0000, transparent);
            box-shadow: 0 0 20px rgba(255,0,0,0.8), 0 0 60px rgba(255,0,0,0.4);
            animation: scanAnimation 2s ease-in-out infinite;
            top: 20%;
            border-radius: 50%;
        `;
        
        overlay.appendChild(scanLine);
        
        // Adiciona bordas de canto para enquadramento
        const corners = document.createElement('div');
        corners.style.cssText = `
            position: absolute;
            top: 15%;
            left: 10%;
            width: 80%;
            height: 70%;
            border: 2px solid rgba(255,0,0,0.3);
            border-radius: 10px;
            box-shadow: 0 0 30px rgba(255,0,0,0.1);
        `;
        overlay.appendChild(corners);
        
        videoElement.parentElement.style.position = 'relative';
        videoElement.parentElement.appendChild(overlay);
    }

    // Estilos para animação
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        @keyframes scanAnimation {
            0% { top: 15%; opacity: 0; }
            10% { opacity: 1; }
            50% { top: 75%; }
            90% { opacity: 1; }
            100% { top: 15%; opacity: 0; }
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 20px rgba(255,0,0,0.8); }
            50% { box-shadow: 0 0 40px rgba(255,0,0,0.4); }
            100% { box-shadow: 0 0 20px rgba(255,0,0,0.8); }
        }
        
        #scan-line {
            animation: scanAnimation 2.5s ease-in-out infinite !important;
        }
    `;
    document.head.appendChild(styleSheet);

    // Configura o scanner
    scanner = new Html5Qrcode("camera");
    
    const config = {
        fps: 30, // Mais frames por segundo para leitura mais rápida
        qrbox: { width: 350, height: 200 },
        aspectRatio: 1.0,
        formatsToSupport: [
            Html5QrcodeSupportedFormats.EAN_13,
            Html5QrcodeSupportedFormats.EAN_8,
            Html5QrcodeSupportedFormats.UPC_A,
            Html5QrcodeSupportedFormats.CODE_128,
            Html5QrcodeSupportedFormats.CODE_39
        ]
    };

    // Inicia a câmera
    scanner.start(
        { facingMode: "environment" },
        config,
        onScanSuccess,
        onScanError
    ).catch(err => {
        console.error("Erro ao iniciar câmera:", err);
        document.getElementById("camera_titulo").innerHTML = 
            `<div style='text-align:center; padding:20px;'>
                <p><strong>Erro ao acessar a câmera</strong></p>
                <p>${err.message || 'Verifique as permissões'}</p>
                <p style='margin-top:20px;'>
                    <img src='../../arquivos/imagens/003_login/nuvem.gif' width='160' height='200' alt='Erro'>
                </p>
                <p>Clique em Cancelar e digite o EAN manualmente</p>
            </div>`;
    });

    // Feedback visual com vibração
    function onScanSuccess(decodedText, decodedResult) {
        if (isScanning) return;
        isScanning = true;

        console.log("Código detectado:", decodedText);
        
        // Vibração do dispositivo (se suportado)
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }

        // Feedback visual - pisca a linha
        const scanLine = document.getElementById('scan-line');
        if (scanLine) {
            scanLine.style.animation = 'none';
            scanLine.style.background = 'linear-gradient(90deg, transparent, #00ff00, #00ff44, #00ff00, transparent)';
            scanLine.style.boxShadow = '0 0 30px rgba(0,255,0,0.9)';
            setTimeout(() => {
                scanLine.style.animation = 'scanAnimation 2.5s ease-in-out infinite';
                scanLine.style.background = 'linear-gradient(90deg, transparent, #ff0000, #ff4444, #ff0000, transparent)';
                scanLine.style.boxShadow = '0 0 20px rgba(255,0,0,0.8)';
            }, 300);
        }

        // Atualiza campo
        document.querySelector('#form_ean').value = decodedText;
        
        //document.getElementById(  'form_ean'  ).focus();
        //document.getElementById(  'form_ean'  ).click();
        
        // Beep
        const audio = document.getElementById('audio_beep1');
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(() => {});
        }

        // Fecha scanner após breve delay
        setTimeout(() => {
            fechar_camera();
            document.getElementById('controle_camera').style.display = 'none';
            document.getElementById('div_consultar_produto').style.display = 'block';
            document.getElementById('camera_titulo').style.display = 'block';
            isScanning = false;
            
            try{
                
                receber_ean_da_camera( decodedText, ARGUMENTO_01_LOJA, ARGUMENTO_02_NUMERO, ENDERECO   );
                
            } catch(e) {}
            
        }, 300);        
        
        
        try{
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        }catch(e){}
        
    }

    function onScanError(err) {
        // Ignora erros de leitura (faz parte do processo)
        // Só loga se for erro crítico
        if (err && err.includes && err.includes('NotFoundException')) {
            // Não faz nada - é normal não encontrar código em alguns frames
            return;
        }
        // console.warn("Erro de escaneamento:", err);
    }
}

// Função melhorada para fechar a câmera
function fechar_camera() {
    if (scanner) {
        try {
            scanner.stop().then(() => {
                scanner.clear();
            }).catch(() => {});
        } catch(e) {}
        scanner = null;
    }
    
    // Remove overlay
    const overlay = document.getElementById('scanner-overlay');
    if (overlay) {
        overlay.parentElement.removeChild(overlay);
    }
    
    isScanning = false;
}

// Função melhorada para fechar a câmera ao clicar no botão cancelar
function fechar_camera_ao_cancelar() {

    try {
        fechar_camera();
        
        document.getElementById('controle_camera').style.display = 'none';
        document.getElementById('div_consultar_produto').style.display = 'block';
        document.getElementById('camera_titulo').style.display = 'block';

    } catch(e) {}
}


// ===== INSTRUÇÕES DE INSTALAÇÃO =====
/*
1. Adicione a biblioteca no HTML:
<script src="https://unpkg.com/html5-qrcode"></script>

2. No HTML da câmera, mantenha:
<div id="camera" style="width: 100%; max-width: 500px; margin: 0 auto;"></div>

3. Use a função normalmente:
abrir_camera_para_ler_o_codigo_de_barras();

VANTAGENS DESTA VERSÃO:
✅ Linha vermelha animada estilo scanner profissional
✅ Leitura MUITO mais rápida (30fps)
✅ Feedback visual ao ler (linha fica verde)
✅ Vibração do dispositivo ao ler
✅ Bordas de enquadramento para ajudar o usuário
✅ Suporte a múltiplos formatos de código de barras
✅ Interface mais intuitiva
*/







////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function receber_ean_da_camera( ean_da_camera, ARGUMENTO_01_LOJA, ARGUMENTO_02_NUMERO, ENDERECO   ) {
    /*
    alert(  "EAN      == " + ean_da_camera + "<br>" + 
            "LOJA     == " + ARGUMENTO_01_LOJA + "<br>" + 
            "Nº INV.: == " + ARGUMENTO_02_NUMERO + "<br>" + 
            "ENDEREÇO == " + ENDERECO 
    ); 
    */

    const quantidade_proximoCampo = document.getElementById(    'form_quantidade'  );
    const ean_anteriorCampo       = document.getElementById(    'form_ean'         );
    
    if ( ean_da_camera.trim() !== '') {
        
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
                
            _camera_buscar_ean_comunicacao_com_o_servidor(  COMANDO, SUBCOMANDO, parametro_01  );
        }catch(Exception){}
    }
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// RECEBE TODOS OS PARÂMETROS SEPARADOS POR: |         
function _camera_buscar_ean_comunicacao_com_o_servidor(  COMANDO, SUBCOMANDO,  parametro_01  ){   
    
   //alert(  COMANDO + "<br>" + SUBCOMANDO + "<br>" + parametro_01 + "<br>" ); 
    
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
                            //alert(url);  
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