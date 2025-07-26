document.addEventListener('DOMContentLoaded', function() {
    const curiosidades = [
        "O Parque Estadual de Ilhabela abriga mais de 1.200 espécies de plantas.",
        "É um dos melhores lugares do Brasil para avistar aves endêmicas da Mata Atlântica.",
        "O Pico do Baepi, com 1.048 metros de altitude, oferece uma vista incrível do arquipélago.",
        "O parque possui mais de 360 cachoeiras catalogadas.",
        "Ilhabela é famosa por suas trilhas ecológicas e praias paradisíacas.",
        "A fauna do parque inclui espécies raras como o tucano-de-bico-verde e o macaco-prego.",
        "A Trilha do Bonete é considerada uma das mais bonitas do Brasil.",
        "A Praia de Castelhanos já foi eleita uma das mais belas do país.",
        "O acesso a algumas trilhas só é permitido com guias credenciados para preservar o ecossistema.",
        "O parque protege cerca de 85% do território da ilha."
    ];
    const btn = document.getElementById('btn-curiosidade');
    const curiosidadeDiv = document.getElementById('curiosidade');
    let ultimaCuriosidade = -1;

    if (btn && curiosidadeDiv) {
        btn.addEventListener('click', function() {
            let index;
            do {
                index = Math.floor(Math.random() * curiosidades.length);
            } while (index === ultimaCuriosidade && curiosidades.length > 1);
            curiosidadeDiv.textContent = curiosidades[index];
            ultimaCuriosidade = index;
        });

        // Exibe uma curiosidade aleatória ao carregar a página
        const index = Math.floor(Math.random() * curiosidades.length);
        curiosidadeDiv.textContent = curiosidades[index];
        ultimaCuriosidade = index;
    }
});