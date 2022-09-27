let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let remover = "";

let pergunta = "sim";
while (pergunta != "não") {
  if (
    frutas.length === 0 &&
    laticinios.length === 0 &&
    doces.length === 0 &&
    congelados.length === 0
  ) {
    pergunta = prompt(
      "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'."
    );
  } else {
    pergunta = prompt(
      "Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'."
    );
  }

  while (pergunta != "sim" && pergunta != "não" && pergunta != "remover") {
    alert(`Operação não reconhecida!`);
    pergunta = prompt(
      "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'."
    );
  }

  if (pergunta === "não") {
    break;
  }

  if (pergunta === "sim") {
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt(
      "Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?"
    );
    if (categoria === "frutas") {
      frutas.push(comida);
    } else if (categoria === "laticínios") {
      laticinios.push(comida);
    } else if (categoria === "doces") {
      doces.push(comida);
    } else if (categoria === "congelados") {
      congelados.push(comida);
    } else {
      alert("Essa categoria não foi pré-definida.");
    }
  } else if (pergunta === "remover") {
    if (
      frutas.length === 0 &&
      laticinios.length === 0 &&
      doces.length === 0 &&
      congelados.length === 0
    ) {
      //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
      alert(`A lista está vazia!`);
    } else {
      //se a lista não estiver vazia
      remover = prompt(
        `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`
      );
      if (frutas.indexOf(remover) != -1) {
        frutas.splice(frutas.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (laticinios.indexOf(remover) != -1) {
        laticinios.splice(laticinios.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (doces.indexOf(remover) != -1) {
        doces.splice(doces.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (congelados.indexOf(remover) != -1) {
        congelados.splice(congelados.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else {
        alert(`Não foi possível encontrar o item dentro da lista!`);
      }
    }
  }
}
alert(
  `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`
);