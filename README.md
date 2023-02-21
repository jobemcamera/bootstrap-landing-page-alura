# Bootstrap Landing Page - Alura

Curso de Bootstrap 4 - Criando uma Landing Page - Alura

<!--ts-->
   * [O Projeto](#O-Projeto)
   * [Screenshots](#Screenshots)
      * [Desktop](#Desktop)
      * [Mobile](#Mobile)
      * [Modal](#Modal)
  * [O que eu aprendi](#O-que-eu-aprendi)
  * [O que eu fiz além do curso](#O-que-eu-fiz-além-do-curso)
<!--te-->


## O Projeto

Meu primeiro contato com o Bootstrap veio com a criação da Landing Page Fruta e Fruto. É uma página que contém as seguintes aplicações:

- Navbar;
- Carrossel;
- Cards;
- Modal.


## Screenshots

### Desktop

![image](https://user-images.githubusercontent.com/109925623/220343801-823e5d08-e6a4-40b2-8047-2d1de32a1a5c.png)

### Mobile

![image](https://user-images.githubusercontent.com/109925623/220344148-16c8803c-502a-484b-b32b-5c8eec359103.png)

### Modal

![image](https://user-images.githubusercontent.com/109925623/220346921-5852df6a-9238-4a32-bd59-f143238757fb.png)


## O que eu aprendi

O Bootstrap é um framework fantástico. Com ele você utilizar estruturas já prontas e customizar da maneira que quiser, fazendo com que economizemos tempo ao construir essas mesmas estruturas de maneira convencional.
Além disso, o que para mim foi fundamental descobrir, é que as classes padrões do Bootstrap já são responsivas, ou seja, se adaptam a qualquer tipo de tela. Isso é maravilhoso!

## O que eu fiz além do curso

Além do conteúdo do curso, fiz uma importante adaptação. 

Como forma didática, foi apresentado os cards contendo as informações das receitas de maneira fixa, ou seja, inseridos diretamente no HTML, o que torna o código pesado e repetitivo.

De maneira a resolver esta situação, fiz com que todos os cards fossem inseridos dinamicamente com o JavaScript.

1 - Criei um arquivo para armazenar todas as informações pertinentes as receitas como: título, texto, URL da imagem e seu texto alternativo.

``` js
const receitas = [
    {
        "titulo": "Tigela de abacate",
        "texto": "Receita refrescante e cheia de vitaminas para o seu café da manhã!",
        "imagem": "src/img/receita-abacate.jpg",
        "alternativo": "tigela de mingau com kiwi, vista superior"
    },
    {
        "titulo": "Salada de kiwi",
        "texto": "Receita refrescante e cheia de vitaminas para o seu café da manhã!",
        "imagem": "src/img/receita-kiwi.jpg",
        "alternativo:": "tigela de mingau com kiwi, vista superior"   
    },
    {
        "titulo": "Mix de vegetais",
        "texto": "Receita refrescante e cheia de vitaminas para o seu café da manhã!",
        "imagem": "src/img/receita-mix.jpg",
        "alternativo:": "prato com mix de vegetais e mão de pessoa adicionando azeite, vista superior"   
    },
    {
        "titulo": "Pimentões à Juliana",
        "texto": "Receita refrescante e cheia de vitaminas para o seu café da manhã!",
        "imagem": "src/img/receita-pimentoes.jpg",
        "alternativo:": "prato de salada de pimentões com alguns ingredientes ao lado, vista superior"
    },
    {
        "titulo": "Prato oriental",
        "texto": "Receita refrescante e cheia de vitaminas para o seu café da manhã!",
        "imagem": "src/img/receita-oriental.jpg",
        "alternativo:": "tigela com salada de vegetais estilo oriental, vista de cima"
    },
    {
        "titulo": "Beterrabas assadas",
        "texto": "Receita refrescante e cheia de vitaminas para o seu café da manhã!",
        "imagem": "src/img/receita-beterrabas.jpg",
        "alternativo:": "tigela com beterrabas e dentes de alho assados em primeiro plano, com ingredientes ao fundo"
    }
]
```

2 - Criei um arquivo que manipula o DOM mostrando todas as receitas na tela de maneira dinâmica.

```js
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
```

Agora para qualquer receita nova, basta adicionar um novo objeto dentro do array receitas.

