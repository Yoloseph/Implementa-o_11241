var loadXMLDoc = function (file) {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.open("GET",file,false);
  xhttp.send();

  if (xhttp.readyState === 4 && xhttp.status === 200) {
    return xhttp.responseXML;
  }
  return {error : 'no file'};
}

//var w = $(location).attr("pathname");
console.log(w);

switch(w){
  case "body-rod":
    loadProduto();
  break;
  case"body-laws":
    getLaws();
  break;
}

function loadProduto(){
  
  xmlDoc = loadXMLDoc("xml/fishingRod.xml"),
    testObj = xmlDoc,
    x = testObj.getElementsByTagName("Product");
    for (i=1; i<2; i++) {

    var nome = x[i].getElementsByTagName("name")[0].textContent;
    var desc = x[i].getElementsByTagName("describ")[0].textContent;
    var price = x[i].getElementsByTagName("price")[0].textContent;
    var img = x[i].getElementsByTagName("image")[0].textContent;
    
    var par = '<p>Nome: '+nome+'</p>';
    par += '<p>Descrição: '+desc+'</p>';
    par += '<p>Preço: '+price+'</p>';
    par += '<img src ="'+img+'" style ="width:304px;height:228px;">';
      document.getElementById("product").innerHTML += par;
  }
}

function getNewLaws(){
  
  xmlDoc = loadXMLDoc("xml/laws.xml"),
    testObj = xmlDoc,
    x = testObj.getElementsByTagName("Law");
    for (i=0; i<1; i++) {

    var type = x[i].getElementsByTagName("type")[0].textContent;
    var date = x[i].getElementsByTagName("date")[0].textContent;
    var source = x[i].getElementsByTagName("source")[0].textContent;
    
    var par = '<p>Nome: '+type+'</p>';
    par += '<p>Descrição: '+date+'</p>';
    par += '<p>Source: '+source+'</p>';
      document.getElementById("getLaw").innerHTML += par;
  }
}

function getOldLaws(){
  
  xmlDoc = loadXMLDoc("xml/laws.xml"),
    testObj = xmlDoc,
    x = testObj.getElementsByTagName("Law");
    for (i=1; i<2; i++) {

    var type = x[i].getElementsByTagName("type")[0].textContent;
    var date = x[i].getElementsByTagName("date")[0].textContent;
    var source = x[i].getElementsByTagName("source")[0].textContent;
    
    var par = '<p>Nome: '+type+'</p>';
    par += '<p>Descrição: '+date+'</p>';
    par += '<p>Source: '+source+'</p>';
      document.getElementById("getLaw").innerHTML += par;
  }
}

function getQuestions() {
    var questao = document.getElementById("comment").value;
    var quest ='<p>A sua questão: '+questao+'</p>';
    quest +='<p>Estado de resposta: Não Vista</p>';
    document.getElementById("pergunta").innerHTML = quest;
}