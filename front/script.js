// Ajuste apenas o endereço da API caso a porta exibida no terminal seja diferente.
const API_URL = "http://localhost:5224/api/Atividades";

// O desenvolvimento das funcionalidades será realizado durante a prova.

formularioGet.addEventListener("click", function (){
    mostrarMensagem(statusGet, "Buscando dados...");


    fetch("http://localhost:5224/api/Atividades")
    evento.preventDefault();


    .then(function(resposta){
        if (!resposta.ok){
            throw new Error("Não foi possivel a consulta")
        }


        return resposta.json();
    })
    .then(function(dados){
        saidaGet.textContent = JSON.string(dados, null);
        mostrarMensagem(statusGet, "ocorreu um erro :^");
    });
})

function destacarMensagem(texto, validacao) {
    texto.ClassList.remove("is-valid", "is-invalid");

    texto.
    texto.ClassList.add(validacao? "is-valid" : "is-invalid");
}

function mudarMensagem(texto, tipo){
    texto.TextContent = texto;

    texto.ClassList()
    
}
//POST
AtividadePost.addEventListener("submit", function (evento) {
  evento.preventDefault();


  const titulo = AtividadeTitulo.value.trim();
  const conteudo = conteudoAtividade.value.trim();
  const tituloValido = titulo !== "";
  const conteudoValido = conteudo !== "";


  marcarAtividade (AtividadeTitulo, tituloValido);
  marcarAtividade (conteudoAtividade, conteudoValido);


  if(!tituloValido || !conteudoValido){
    mostrarMensagem(startusPost, "Está vazio...");
    return;
  }


  const novaAtividade = {
    title: titulo,
    body: conteudo,
    userId: 1,
  };


  featch("http://localhost:5224/api/Atividades"){
    method: "POST",
    headers: {"Content-type":"application/json; charset=UTF-8"} 
    
  body: JSON.stringify(novaAtividade),
  },


  .then(Function(resposta){
    if(!resposta.ok){


        throw new Error("Nao foi possovel enviar o POST")
    }


    return resposta.jason();
  })
})


//GET


formularioGet.addEventListener("click", function ()){
    mostrarMensagem(statusGet, "Buscando dados...");


    fetch("http://localhost:5224/api/Atividades")
    evento.preventDefault();


    .then(function(resposta){
        if (!resposta.ok){
            throw new Error("Não foi possivel a consulta")
        }


        return resposta.json();
    })
    .then(function(dados){
        saidaGet.textContent = JSON.string(dados, null);
        mostrarMensagem(statusGet, "ocorreu um erro :^");
    });
}

//POST
AtividadePost.addEventListener("submit", function (evento) {
  evento.preventDefault();


  const titulo = AtividadeTitulo.value.trim();
  const conteudo = conteudoAtividade.value.trim();
  const tituloValido = titulo !== "";
  const conteudoValido = conteudo !== "";


  marcarAtividade (AtividadeTitulo, tituloValido);
  marcarAtividade (conteudoAtividade, conteudoValido);


  if(!tituloValido || !conteudoValido){
    mostrarMensagem(startusPost, "Está vazio...");
    return;
  }


  const novaAtividade = {
    title: titulo,
    body: conteudo,
    userId: 1,
  };


  featch("http://localhost:5224/api/Atividades",{
    method: "POST",
    headers: 
    {"Content-type":"application/json; charset=UTF-8", },
    
  body: JSON.stringify(novaAtividade)
  }),


  .then(Function(resposta){
    if(!resposta.ok){
        throw new Error("Nao foi possovel enviar o POST")
    }


    return resposta.json();
  })
})

const botaoForm = document.querySelector("#");
const saida = document.querySelector("#");
const status = document.querySelector("#status");
const campoTitulo = document.querySelector("#");
const campoAno = document.querySelector("#");

botao.AddEventListener("submit", function(evento) {
    evento.preventDefault();

    const dadosAtualizados = {

    }
    fetch(API_URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json";
        }
        body: JSON.stringify(dadosAtualizados)
    })
    .then(function(resposta){
        if(!resposta.ok)  throw new Error("Não foi possível consultar a API");
        
        return resposta.JSON();
    })
    .then(function(dados){
        saida.TextContent = JSON.stringify(dados, null, 2);
        status.TextContent = "PUT realizado com sucesso!";
        status.ClassName = "alert alert-success mt-3";
    })
    .catch(function(erro){
        saida.textContent = erro.message;
        status.TextContent = "Ocorreu um ERRO na API.";
        status.ClassName = "alert alert-danger mt-3";
    })
})


const campoId = document.querySelector("#")
botaoDeletar.AddEventListener("submit", function(evento){
    evento.preventDefault();

    Id = campoId.ariaValueMax.trim();

    fetch(`http://localhost:5224/api/Atividades/${Id}`, {
        method: "DELETE"
    })
    .then(function(resposta){
        if(!resposta.ok)  throw new Error("Não foi possível consultar a API");
        
        return resposta.JSON();
    })
    .then(function(dados){
        status.TextContent = "DELETE realizado com sucesso!";
        status.ClassName = "alert alert-success mt-3";
    })
    .catch(function(erro){
        saida.textContent = erro.message;
        status.TextContent = "Ocorreu um ERRO na API.";
        status.ClassName = "alert alert-danger mt-3";
    })
})
