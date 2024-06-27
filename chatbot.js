document.addEventListener('DOMContentLoaded', function() {
    function initializeChatbot(chatbotUrl, buttonText, buttonColor) {
        // Create Chatbot Button
        var chatbotButton = document.createElement('button');
        chatbotButton.id = 'chatbot-button';
        chatbotButton.innerText = buttonText || 'Chat with us';
        chatbotButton.style.position = 'fixed';
        chatbotButton.style.bottom = '20px';
        chatbotButton.style.right = '20px';
        chatbotButton.style.zIndex = '1000';
        chatbotButton.style.padding = '10px 20px';
        chatbotButton.style.backgroundColor = buttonColor || '#007bff';
        chatbotButton.style.color = 'white';
        chatbotButton.style.border = 'none';
        chatbotButton.style.borderRadius = '5px';
        chatbotButton.style.cursor = 'pointer';
        document.body.appendChild(chatbotButton);

        // Create Chatbot Container
        var chatbotContainer = document.createElement('div');
        chatbotContainer.id = 'chatbot-container';
        chatbotContainer.style.display = 'none';
        chatbotContainer.style.position = 'fixed';
        chatbotContainer.style.bottom = '70px';
        chatbotContainer.style.right = '20px';
        chatbotContainer.style.zIndex = '1000';
        chatbotContainer.style.border = '1px solid #ccc';
        chatbotContainer.style.borderRadius = '5px';
        chatbotContainer.style.overflow = 'hidden';
        chatbotContainer.style.transition = 'all 0.3s ease';
        chatbotContainer.style.transform = 'translateY(20px)';
        chatbotContainer.style.opacity = '0';
        document.body.appendChild(chatbotContainer);

        // Create Chatbot Iframe
        var chatbotIframe = document.createElement('iframe');
        chatbotIframe.id = 'chatbot-iframe';
        chatbotIframe.src = chatbotUrl;
        chatbotIframe.width = '350';
        chatbotIframe.height = '500';
        chatbotIframe.style.border = 'none';
        chatbotContainer.appendChild(chatbotIframe);

        // Toggle Chatbot Visibility
        chatbotButton.addEventListener('click', function() {
            if (chatbotContainer.style.display === 'none' || chatbotContainer.style.opacity === '0') {
                chatbotContainer.style.display = 'block';
                setTimeout(function() {
                    chatbotContainer.style.transform = 'translateY(0)';
                    chatbotContainer.style.opacity = '1';
                }, 10);
                chatbotButton.innerText = 'X';
            } else {
                chatbotContainer.style.transform = 'translateY(20px)';
                chatbotContainer.style.opacity = '0';
                setTimeout(function() {
                    chatbotContainer.style.display = 'none';
                }, 300);
                chatbotButton.innerText = buttonText || 'Chat with us';
            }
        });
    }

    var scriptTag = document.getElementById('chatbot-script');
    var chatbotUrl = scriptTag.getAttribute('data-chatbot-url');
    var buttonText = scriptTag.getAttribute('data-button-text');
    var buttonColor = scriptTag.getAttribute('data-button-color');
    initializeChatbot(chatbotUrl, buttonText, buttonColor);
});
