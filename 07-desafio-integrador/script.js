const produto = "Caderno de estudos";
const preco = 24.9;
const quantidade = 2;
const total = preco * quantidade;

const resumo = `Pedido: ${quantidade}x ${produto}. Total: R$ ${total.toFixed(2)}.`;
console.log(resumo);

if (total >= 40) {
  console.log("Frete grátis para este pedido.");
} else {
  console.log("O pedido ainda não atingiu o valor para frete grátis.");
}

// Desafio final: crie uma condição de desconto para pedidos acima de R$ 80.
