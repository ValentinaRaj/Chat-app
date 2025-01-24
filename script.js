// Global variables
const signInSection = document.getElementById('signInSection');
const chatSection = document.getElementById('chatSection');
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const chatBox = document.getElementById('chatBox');
const emojiBtn = document.getElementById('emojiBtn');
const emojiPicker = document.getElementById('emojiPicker');
const fileInput = document.getElementById('fileInput');
const chatUsername = document.getElementById('chatUsername');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');


const emojis = ['😀', '😂', '😊', '😍', '😎', '😢', '😡', '👍', '🙏', '🎉', '❤️', '🎈'];


function loadEmojis() {
    emojis.forEach((emoji) => {
        const emojiButton = document.createElement('button');
        emojiButton.textContent = emoji;
        emojiButton.className = 'text-xl p-2 hover:bg-gray-100 rounded';
        emojiButton.onclick = () => {
            messageInput.value += emoji;
            emojiPicker.classList.add('hidden'); k
        };
        emojiPicker.appendChild(emojiButton);
    });
}


signInBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = document.getElementById('passwordInput').value.trim();

   
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return; 
    }

    if (name && email && password) {
        signInSection.style.display = 'none';
        chatSection.style.display = 'flex';
        chatUsername.textContent = `Welcome, ${name}`; 
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle sign-out
signOutBtn.addEventListener('click', () => {
    nameInput.value = '';
    emailInput.value = '';
    document.getElementById('passwordInput').value = '';
    signInSection.style.display = 'flex';
    chatSection.style.display = 'none';
});


sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        const messageBubble = document.createElement('div');
        messageBubble.textContent = message;
        messageBubble.className = 'p-2 bg-blue-500 text-white rounded-lg max-w-xs self-end shadow-md';
        chatBox.appendChild(messageBubble);
        chatBox.scrollTop = chatBox.scrollHeight; 
        messageInput.value = '';
    } else {
        alert('Please type a message.');
    }
});


fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileBubble = document.createElement('div');
        fileBubble.textContent = `📎 ${file.name}`;
        fileBubble.className = 'p-2 bg-gray-200 text-gray-700 rounded-lg max-w-xs self-end shadow-md';
        chatBox.appendChild(fileBubble);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});


emojiBtn.addEventListener('click', () => {
    emojiPicker.classList.toggle('hidden');
});


document.addEventListener('DOMContentLoaded', loadEmojis);
