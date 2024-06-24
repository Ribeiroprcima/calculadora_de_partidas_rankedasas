process.stdout.write("Quantidade de vitórias do herói: ");

let vitorias;
let derrotas;

function calcularRankeadas(vitoriasPartida, derrotasPartida){
    let resultadoRankeadas = vitoriasPartida - derrotasPartida;
    let nivel;
    let mensagem;

    if(!vitoriasPartida || !derrotasPartida){
        mensagem = "Os valores informados são inválidos para realização do cálculo!";
    } else{
        if(resultadoRankeadas <= 10){
            nivel = "Ferro";
        } else if(resultadoRankeadas <= 20){
            nivel = "Bronze";
        } else if(resultadoRankeadas <= 50){
            nivel = "Prata";
        } else if(resultadoRankeadas <= 80){
            nivel = "Ouro";
        } else if(resultadoRankeadas <= 90){
            nivel = "Diamante";
        } else if(resultadoRankeadas <= 100){
            nivel = "Lendário";
        } else{
            nivel = "Imortal";
        }

        mensagem = `O herói tem um saldo de ${resultadoRankeadas}, está no nível de ${nivel}.`;
    }

    console.log(mensagem); 
    process.exit();
}

process.stdin.on("data", (data) => {
    if (!vitorias) {
        vitorias = parseInt(data.toString().trim());
        if (isNaN(vitorias)) {
            process.stdout.write("Valor não informado corretamente! Quantidade de vitórias do herói: ");
            return;
        }
        process.stdout.write("Quantidade de derrotas do herói: ");
    } else if (!derrotas) {
        derrotas = parseInt(data.toString().trim());
        if (isNaN(derrotas)) {
            process.stdout.write("Valor não informado corretamente! Quantidade de derrotas do herói: ");
            return;
        }
        calcularRankeadas(vitorias, derrotas);
    }
});
