function sendMessage(): void {
    const input = document.getElementById("userInput") as HTMLInputElement;
    const messages = document.getElementById("messages") as HTMLDivElement;
    const messageText: string = input.value.trim();

    if (messageText === "") return;

    const userMessage: HTMLDivElement = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = messageText;
    messages.appendChild(userMessage);

    const aiMessage: HTMLDivElement = document.createElement("div");
    aiMessage.className = "message ai";
    aiMessage.textContent = "Oi! Eu sou a RoxIA. Como posso te ajudar hoje?";
    messages.appendChild(aiMessage);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
}

document.getElementById("userInput")?.addEventListener("keypress", (e: KeyboardEvent) => { 
   if (e.key === "Enter") sendMessage();
});
