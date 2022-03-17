console.log("--------------------SISTEMA OMMA---------------------");
console.log("------------------ SEJA BEM VINDO!!!-----------------");

const listaDeReceitas = [{
        id: 1,
        titulo: "Cachorro-Quente",
        difuculdade: "Simples",
        ingredientes: ["1 pão", "1 salsicha", "maionese a gosto", "catchup a gosto"],
        preparo: "dfjsidfjoijsdlspçogiwspokgv",
        link: "youtube.com",
        vegano: false
    }

]

console.log(listaDeReceitas)
console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-")


//exercicio 4 - cadastrar receita

const cadastrarReceita = (id, titulo, dificuldade, ingredientes, preparo, link, vegano) => {
    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano,
    };


    listaDeReceitas.push(novaReceita);

    console.log(`Receita ${titulo} foi adicionada com sucesso`);
};

//---------------------------------------------

cadastrarReceita(2, "Batata-frita", "simples", ["batata", "óleo", "sal"], "jfkdsafahwoienf", "youtube.com", true);

cadastrarReceita(3, "panqueca de banana", "simples", ["1 banana", "1 ovo", "3 colheres de aveia"], "jhfsdfjpsdojkjdfpg", "youtube.com", false)

cadastrarReceita(4, "ijfdoijai", "simples", ["dfsdf", "dfsdf"], "dfsdfgsd", " youtube.com", false);
//-------------------------------------------------

console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-")

console.log(listaDeReceitas)

console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");

//exercicio para exibir receitas

const exibirReceita = (receita) => {
    const Resultado = listaDeReceitas.filter((receita) => {
        console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");
        console.log(`Receita:\n ${receita.titulo}\n`);
        console.log(`Os ingredientes são:\n ${receita.ingredientes.join('\n')}\n`);
        console.log(`Ela é vegana?\n ${receita.vegano}\n`);
    })
}
exibirReceita()
console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");

//deletar receitas

// const deletarReceita = (id) => {
//     const listaResutado = listaDeReceitas.filter(
//         (receita) => receita != id
//     );

//     if (listaResutado.length == listaDeReceitas.length) {
//         return console.log("Receita não encontrada.")
//     }
//     listaDeReceitas = listaResutado;
//     console.log("Receita deletada com sucesso")

// }

function deletarReceita(id) {
    for (let i = 0; i < listaDeReceitas.length; i++) {
        if (id === listaDeReceitas[i].id) {
            listaDeReceitas.splice(i, 1);
            return console.log("Receita deletada")

        }
    }
    console.log("Receita não encontrada")
}

deletarReceita(4)

console.log(listaDeReceitas)

console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");

//--------------------EXERCICIO  BUSCAR RECEITA-----------------------

const buscaReceita = (valorBuscado) => {
    const resultadoBusca = listaDeReceitas.filter((receita) =>
        receita.titulo.toLowerCase().includes(valorBuscado.toLowerCase()))

    if (!resultadoBusca.length) {
        console.log("Receita não encontrada");
    }

    return console.log(resultadoBusca);
};
buscaReceita("cachorro")