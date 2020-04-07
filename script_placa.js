function placa() {
  var nr = prompt("Digite Aqui sua placa");
  dia = "";

  if (nr.length > 8) {
    alert("Valor Inválido!");
  } else {
    if (nr) dia = prompt("Adicione o dia da semana");
    switch (dia) {
      case "segunda":
        alert("não está liberado");
        break;
      case "terça":
        alert("Está Liberado");
        break;
      case "quarta":
        alert("Não Está Liberado");
        break;
      case "quinta":
        alert("Está Liberado");
        break;
      case "sexta":
        alert("Não Está liberado");
        break;
      case "sábado":
        alert("Está Liberado");
        break;
      case "domingo":
        alert("Não Está Liberado");
        break;
    }
  }
}
