const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-conteiner")
 
let userText = null;

const createElement = (html, className) => {
    // Create new div and apply chat, apecified class and set html content of div
    const ChatDiv = document.createElement("div");
    ChatDiv.classList.add("chat", className);
    ChatDiv.innerHTML = html;
    return ChatDiv // Return the create chat div
}


const showTypingAnimation = () => {
    userText = chatInput.value.trim(); // Get chatInput value and remove extra spaces
    const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="images/chatbot.jpg" alt="chatbot-img">
                        <div class="typing-animation">
                            <div class="typing-dot" style="--delay: 0.2s"></div>
                            <div class="typing-dot" style="--delay: 0.3s"></div>
                            <div class="typing-dot" style="--delay: 0.4s"></div>
                        </div>
                    </div>
                    <span class="material-symbols-rounded">content_copy</span>
                  </div>`;
    // Create an incoming chat div with typing animation and append it to chat container
    const incomingChatDiv = createElement(html, "incoming");
    chatContainer.appendChild(incomingChatDiv);
    getChatResponse();
}

const handleOutgoingChat = () => {
    userText = chatInput.value.trim(); // Get chatInput value and remove extra spaces
    const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="images/user.jpg" alt="user-img">
                        <p>${userText}</p>
                    </div>
                  </div>`;
    // Create an outgoing chat div with user's mesage and append it to chat container
    const outgoingChatDiv = createElement(html, "outgoing");
    chatContainer.appendChild(outgoingChatDiv);
    setTimeout(showTypingAnimation, 500);
}

sendButton.addEventListener("click", handleOutgoingChat);
