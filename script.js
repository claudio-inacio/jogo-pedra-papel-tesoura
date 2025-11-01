const buttons = document.querySelectorAll(".choice-btn");
const pcChoiceDisplay = document.getElementById("pcChoiceDisplay");
const mensagemResultado = document.getElementById("mensagemResultado");
const vitElement = document.getElementById("vit");
const derElement = document.getElementById("der");
const empateElement = document.getElementById("empate");
const resetButton = document.getElementById("reset");

let vitorias = 0;
let derrotas = 0;
let empates = 0;

const icones = {
  pedra: "✊",
  papel: "📄",
  tesoura: "✂️",
};


function jogar(escolhaUsuario) {
  const opcoes = ["pedra", "papel", "tesoura"];
  const escolhaPc = opcoes[Math.floor(Math.random() * opcoes.length)];


  pcChoiceDisplay.textContent = icones[escolhaPc];


  if (escolhaUsuario === escolhaPc) {
    empates++;
    mensagemResultado.textContent = "😐 Empate! Tente novamente.";
  } else if (
    (escolhaUsuario === "pedra" && escolhaPc === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaPc === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaPc === "papel")
  ) {
    vitorias++;
    mensagemResultado.textContent = "🏆 Vitória! Boa escolha!";
  } else {
    derrotas++;
    mensagemResultado.textContent = "💀 Derrota! O computador venceu.";
  }

  vitElement.textContent = vitorias;
  derElement.textContent = derrotas;
  empateElement.textContent = empates;
}


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const escolha = btn.dataset.choice;
    jogar(escolha);
  });
});

resetButton.addEventListener("click", () => {
  vitorias = 0;
  derrotas = 0;
  empates = 0;
  vitElement.textContent = 0;
  derElement.textContent = 0;
  empateElement.textContent = 0;
  pcChoiceDisplay.textContent = "❔";
  mensagemResultado.textContent = "Faça sua escolha para começar!";
});
