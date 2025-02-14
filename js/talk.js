function sendMessage() {
    const inputField = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    const message = inputField.value.trim();
    if (message === "") return;
    
    // ユーザーメッセージを追加
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);
    
    // 簡単な応答を追加
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        botMessage.textContent = "いいね！";
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
    
    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}