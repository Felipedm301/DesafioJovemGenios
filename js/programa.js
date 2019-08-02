function resultado(){
    document.getElementById("Resposta").innerHTML = "";
    var numero = Number(document.getElementById("numero"));
    for (let index = 0; index <= numero; index++) {
        if ((index%3 == 0)&&(index%5 == 0)) {
            multiploAmbos();
        } else if(index%3 == 0){
            multiplo3();
        } else if(index%5 == 0){
            multiplo5();
        } else {
            naoMultiplo(index);
        }
    }
}

function multiplo3(){
    var exibir = document.getElementById("Resposta");
    exibir.style.color = "rgb(255,204,0);"
    exibir.innerHTML = "<h3> Jovens</h3>";
}

function multiplo5(){
    var exibir = document.getElementById("Resposta");
    exibir.style.color = "rgb(21,88,88);"
    exibir.innerHTML = "<h3> Gênios</h3>";
}

function multiploAmbos(){
    var exibir = document.getElementById("Resposta");
    exibir.style.color = "rgb(180,255,201);"
    exibir.innerHTML = "<h3> JovensGênios</h3>";
}

function naoMultiplo(numero){
    var exibir = document.getElementById("Resposta");
    exibir.style.color = "rgb(114,0,255);"
    exibir.innerHTML = "<h3>"+" "+ numero +"</h3>";
}