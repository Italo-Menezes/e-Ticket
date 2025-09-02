let ingressos = []


function comprar() {
// Pega a ingresso que vai receber os produtos
let ingressoSelecionados = document.getElementById('tipo-ingresso');
let ingresso = ingressoSelecionados.value;

let quantidade = parseInt(document.getElementById(`qtd`).value)
if (isNaN(quantidade) || quantidade == 0) {
alert(`Prencha a quantidade`) ;
return; 
};

ingressos.push ({
local:ingresso,
qntd:quantidade
});

console.log(ingressos)

atualizar(); 
ingressos = [];
    

};


function atualizar() {
    let superiorSelecinado = document.getElementById(`qtd-superior`);
    let superior= parseInt(superiorSelecinado.innerText);

    let inferiorSelecionado = document.getElementById(`qtd-inferior`) ;
    let inferior= parseInt(inferiorSelecionado.innerText);

    let pistaSelecionado = document.getElementById(`qtd-pista`) ;
    let pista= parseInt(pistaSelecionado.innerText);

    ingressos.forEach(item => {

        if (item.local === `superior`) {
            superior-= item.qntd ;
            if (superior < 0) {
            alert("Ingressos SUPERIOR esgotados!");}
            superiorSelecinado.innerText = superior;


        } else if (item.local === `inferior`){
            inferior-= item.qntd 
            if (inferior < 0) {
            inferior = 0;
            alert("Ingressos INFERIOR esgotados!");}
            inferiorSelecionado.innerText =inferior;


        } else if (item.local === `pista`) {
             pista-= item.qntd 
            if (pista < 0) {
            pista = 0;
            alert("Ingressos PISTA esgotados!");}
             pistaSelecionado.innerText =pista;
        }
    });

   

}

