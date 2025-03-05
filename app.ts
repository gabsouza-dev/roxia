// app.ts
function sendMessage(): void {
    const input = document.getElementById("userInput") as HTMLInputElement;
    const messages = document.getElementById("messages") as HTMLDivElement;
    const messageText: string = input.value.trim();

    if (messageText === "") return;

    // Mensagem do usuário
    const userMessage: HTMLDivElement = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = messageText;
    messages.appendChild(userMessage);

    // Resposta da IA
    const aiMessage: HTMLDivElement = document.createElement("div");
    aiMessage.className = "message ai";
    aiMessage.textContent = "Oi! Eu sou a IA Roxa. Como posso te ajudar hoje?";
    messages.appendChild(aiMessage);

    // Limpar input e rolar pra última mensagem
    input.value = "";
    messages.scrollTop = messages.scrollHeight;
}

// Adicionar evento de Enter
document.getElementById("userInput")?.addEventListener("keypress", (e: KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
});
