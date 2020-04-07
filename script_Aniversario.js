function dataExemplo() {
  var dt = prompt("Digite a data completa do seu aniversário");
  if (dt.length < 10 && dt.length > 10) {
    alert("Use o formato dd/mm/aaaa");
  } else {
    var dia = dt.substring(0, 2);
    var mes = dt.substring(3, 5);
    var ano = dt.substring(6, 10);

    switch (mes) {
      case "01":
        mes = "Janeiro";
        break;
      case "02":
        mes = "Fevereiro";
        break;
      case "03":
        mes = "Março";
        break;
      case "04":
        mes = "Abril";
        break;
      case "05":
        mes = "Maio";
        break;
      case "06":
        mes = "Junho";
        break;
      case "07":
        mes = "Julho";
        break;
      case "08":
        mes = "Agosto";
        break;
      case "09":
        mes = "Setembro";
        break;
      case "10":
        mes = "Outubro";
        break;
      case "11":
        mes = "Novembro";
        break;
      case "12":
        mes = "Dezembro";
        break;
      default:
        mes = "inexistente";
        break;
    }
    alert("Você nasceu em " + dia + " de " + mes + " de " + ano);
  }
}
