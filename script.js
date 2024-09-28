// LocalStorage'dan xabarlarni yuklash
window.onload = function() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(displayMessage);
};

// Xabarlarni LocalStorage'ga qo'shish va saqlash
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value;
    if (message.trim() !== '') {
        const msgObject = { name: 'Foydalanuvchi', message: message };
        displayMessage(msgObject);

        // Xabarlarni saqlash
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(msgObject);
        localStorage.setItem('messages', JSON.stringify(messages));

        input.value = '';
    }
}

function displayMessage(msg) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${msg.name}:</strong> ${msg.message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
