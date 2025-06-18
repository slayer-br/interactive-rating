const buttons = document.querySelectorAll(".number");
const submitBtn = document.querySelector(".submit-btn");
const backBtn = document.querySelector(".back-btn");
const startSection = document.querySelector(".start");
const resultSection = document.querySelector(".result");
const resultText = document.querySelector(".result-text");

let selectedValue = null;

// Função para remover seleção dos botões
function clearSelection() {
  buttons.forEach((btn) => btn.classList.remove("selected"));
  selectedValue = null;
}

// Função para selecionar um botão
function selectButton(button) {
  clearSelection();
  button.classList.add("selected");
  selectedValue = button.textContent;
}

// Função para mostrar uma seção e esconder outra
function toggleSections(showEl, hideEl) {
  hideEl.classList.remove("show");
  hideEl.classList.add("hide");
  showEl.classList.remove("hide");
  showEl.classList.add("show");
}

// Função para atualizar o texto do resultado
function updateResultText() {
  const total = buttons.length;
  resultText.textContent = `You selected ${selectedValue} out of ${total}`;
}

// Eventos
buttons.forEach((button) => {
  button.addEventListener("click", () => selectButton(button));
});

submitBtn.addEventListener("click", () => {
  if (selectedValue) {
    updateResultText();
    toggleSections(resultSection, startSection);
  } else {
    alert("Please select a rating first.");
  }
});

backBtn.addEventListener("click", () => {
  toggleSections(startSection, resultSection);
  clearSelection();
});
