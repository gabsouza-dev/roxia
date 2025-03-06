
interface ResponseMap { [key: string]: string; }

const localResponses: ResponseMap = {
    "oi": "Oi, tudo bem? Como posso te ajudar hoje?",
    "como você está": "Eu sou uma IA, então estou sempre bem! E você?",
    "tchau": "Até mais, foi legal conversar com você!",
    "default": "Hmm, não sei o que dizer sobre isso. Quer tentar outra coisa?"
};

async function sendMessage(): Promise<void> {
    const input = document.getElementById("userInput") as HTMLInputElement;
    const messages = document.getElementById("messages") as HTMLDivElement;
    const messageText: string = input.value.trim().toLowerCase();

    if (messageText === "") return;

    const userMessage: HTMLDivElement = document.createElement("div");
    
    userMessage.className = "message user";
    userMessage.textContent = messageText;
    messages.appendChild(userMessage);

    let aiResponse: string;
    
    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: messageText })
        });
        
        const data = await response.json();
        
        aiResponse = data.reply;
    } catch (error) { aiResponse = localResponses[messageText] || localResponses["default"]; }

    const aiMessage: HTMLDivElement = document.createElement("div");
    
    aiMessage.className = "message ai";
    aiMessage.textContent = aiResponse;
    messages.appendChild(aiMessage);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
}

document.getElementById("userInput")?.addEventListener("keypress", (e: KeyboardEvent) => { if (e.key === "Enter") sendMessage(); });
