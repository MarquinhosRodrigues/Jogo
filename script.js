$(document).ready(function() {
    $("#nao").mouseover(function() {
        // Gera coordenadas aleatórias dentro da janela
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);

        // Define a nova posição do botão
        $(this).css({
            'position': 'absolute',
            'left': x,
            'top': y
        });
    });

    // Adiciona um evento de clique ao botão "Sim"
    $("#sim").click(function() {
        alert("Ótima Escolha! Vamos Jogar oq então madame?");
    });
});