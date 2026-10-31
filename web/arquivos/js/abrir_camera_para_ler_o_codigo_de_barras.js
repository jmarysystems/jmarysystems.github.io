/* global Quagga */

function abrir_camera_para_ler_o_codigo_de_barras() {
    
    // Remove listeners anteriores para evitar duplicação
    Quagga.offDetected();
    
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#camera'),
            constraints: {
                facingMode: "environment" // Usa câmera traseira em dispositivos móveis
            }
        },
        decoder: {
            readers: [
                "ean_reader",        // EAN-13
                "ean_8_reader",      // EAN-8
                "upc_reader",        // UPC-A
                "code_128_reader"    // Código 128 (fallback)
            ]
        },
        locate: true // Tenta localizar o código na imagem
    }, function (err) {
        if (err) {
            console.error("Erro no Quagga:", err);
            
            // Mostra mensagem amigável de erro
            document.getElementById("camera_titulo").innerHTML = 
                "<div style='text-align:center; padding:20px;'>" +
                "<p><strong>Erro ao tentar acessar a câmera</strong></p>" +
                "<p>Por favor, verifique se a câmera está disponível e você concedeu permissão.</p>" +
                "<p style='margin-top:20px;'><img src='../../arquivos/imagens/003_login/nuvem.gif' style='cursor:pointer;' width='160' height='200' alt='Erro'></p>" +
                "<p>Clique em Cancelar e digite o EAN manualmente</p>" +
                "<p style='color:#666; font-size:12px; margin-top:10px;'>Erro técnico: " + err.message + "</p>" +
                "</div>";
            
            return;
        }
        
        console.log("Inicialização concluída. Pronto para iniciar.");
        Quagga.start();
    });

    // Quando um código é detectado
    Quagga.onDetected(function (data) {
        // Previne múltiplos disparos
        if (document.getElementById('div_consultar_produto').style.display === 'block') {
            return;
        }
        
        var codigo = data.codeResult.code;
        console.log("Código detectado:", codigo);
        
        // Atualiza o campo do formulário
        document.querySelector('#form_ean').value = codigo;
        
        // Esconde a câmera e mostra a consulta
        document.getElementById('controle_camera').style.display = 'none';
        document.getElementById('div_consultar_produto').style.display = 'block';
        document.getElementById('camera_titulo').style.display = 'block';
        
        // Toca o som de beep
        var audio = document.getElementById('audio_beep1');
        if (audio) {
            audio.play().catch(function(e) {
                console.warn("Não foi possível tocar o beep:", e);
            });
        }
        
        // Para a câmera para economizar recursos
        Quagga.stop();
    });
    
    // Opcional: Desenha o retângulo ao redor do código detectado
    Quagga.onProcessed(function(resultado) {
        var ctx = Quagga.canvas.ctx.overlay;
        var canvas = Quagga.canvas.dom.overlay;
        
        if (resultado) {
            // Limpa o canvas
            ctx.clearRect(0, 0, parseInt(canvas.getAttribute('width')), parseInt(canvas.getAttribute('height')));
            
            if (resultado.boxes) {
                resultado.boxes.filter(function (box) {
                    return box !== resultado.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, ctx, {color: 'green', lineWidth: 2});
                });
            }
            
            if (resultado.box) {
                Quagga.ImageDebug.drawPath(resultado.box, {x: 0, y: 1}, ctx, {color: '#00F', lineWidth: 2});
            }
            
            if (resultado.codeResult && resultado.codeResult.code) {
                Quagga.ImageDebug.drawPath(resultado.line, {x: 'x', y: 'y'}, ctx, {color: 'red', lineWidth: 5});
            }
        }
    });
}

// Função para fechar a câmera (chame quando necessário)
function fechar_camera() {
    Quagga.offDetected();
    Quagga.offProcessed();
    Quagga.stop();
    
    // Limpa o campo se necessário
    // document.querySelector('#form_ean').value = '';
}