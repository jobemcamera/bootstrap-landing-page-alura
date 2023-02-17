const cardReceita = document.querySelector('#lista-receitas');

receitas.forEach(receita => {
    cardReceita.innerHTML += `
                    <article class="card borda-cor-especial card-largura p-0 m-4 col-12 col-sm-4">
                        <img class="card-img-top imagem-card" src="${receita.imagem}" alt="${receita.alternativo}">
                        <div class="card-body">
                            <h4 class="card-title">${receita.titulo}</h4>
                            <p class="card-text">${receita.texto}</p>
                            <a href="#" class="btn botao-cor-especial">Veja a receita</a>
                        </div>
                    </article>
    `
});