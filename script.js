document.addEventListener("DOMContentLoaded", function() {
    // Aqui você pode adicionar qualquer funcionalidade adicional após o carregamento
    // Por exemplo, redirecionar para outra página ou ocultar a tela de carregamento
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
    }, 8000); // Tempo simulado de carregamento de 5 segundos
});
