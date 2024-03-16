// objetivo - quando clicarmos na aba que mostra o conteudo da aba que foi clicado pelo usuario e esconder o conteudo da aba anterior.. sempre analisar o que for fazer para nao ter problema no codigo e nao demorar semanas para fazer algo que pode ser feito em horas. OBS, sempre quando for fazer o codigo coloque console.log para verificar se esta dando certo


// passo 1 - dar um jeito de pegar os elementos que representa as abas no html


//  atraves do document da pra fazer varias coisas console.log(document);


const abas = (document.querySelectorAll(".aba"));
// console.log(abas)


// para cada elemento.
abas.forEach(aba => {
    // console.log(aba)


    // passo 2 - dar um jeito de identificar o clique no elemento da aba

    aba.addEventListener("click", function () {
        // quando for ver esse console, click na aba para ver se funcionou. console.log("clicou na aba", aba)
        if (aba.classList.contains("selecionado")) {
            return;//nao retorna nada.. ex se a class ja tiver o selecionado nao vai ficar executando sem necessidade, por ex se vc nao colocar isso sempre que a pessoa clicar no mesmo elemento ele vai ficar colocando a class selecionada mesmo ela ja tendo sido adicionada.
        }

        selecionarAba(aba);
        mostrarInformacoesDaAba(aba)

    });


});

function selecionarAba(aba) {
    // passo 3- quando o ususario clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");

    // console.log(abaSelecionada)

    abaSelecionada.classList.remove("selecionado");

    // passo 4 -marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {

    // passo 5- enconder o conteudo anterior

    const informacaoSelecionada = document.querySelector(".informacao.selecionado");

    informacaoSelecionada.classList.remove("selecionado");

    // passo 6- mostrar o conteudo selecionado

    // esse idDoElementoDeInformacoesDaAba essa concatenando o elemento da informacao com o id de um outro elemento que tem um elemento parecido. ex a aba esta minhas-redes. a parte de informacao esta informacao-minhas-redes, entao eles estao se conectando nessa forma, pois id nao pode ser o mesmo entao vc faz dessa maneira

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);


    informacaoASerMostrada.classList.add("selecionado");


}