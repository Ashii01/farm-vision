document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
  
    const responses = {
      "hello": "Hi there! How can I assist you today?",
      "help": "Sure, I'm here to help. What do you need assistance with?",
      "bye": "Goodbye! Have a great day!",
      // Add more predefined questions and responses as needed
    };
  
    userInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter' && userInput.value.trim() !== '') {
        const userMessage = userInput.value.trim().toLowerCase();
        appendMessage('user', userMessage);
        userInput.value = '';
        setTimeout(() => {
          const botResponse = responses[userMessage] || "I'm sorry, I don't understand that.";
          appendMessage('bot', botResponse);
        }, 500);
      }
    });
  
    function appendMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('p-2', 'rounded-lg', 'max-w-xs', 'w-fit');
      if (sender === 'user') {
        messageElement.classList.add('bg-blue-500', 'text-white', 'self-end');
      } else {
        messageElement.classList.add('bg-gray-300', 'text-black', 'self-start');
      }
      messageElement.textContent = message;
      chatContainer.appendChild(messageElement);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  });
  