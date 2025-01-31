const chatbox = document.getElementById("chatbox");
const currentCount = document.getElementById("currentCount");
const maxCount = document.getElementById("maxCount");
const charCount = document.getElementById("charCount");

const maxCharacters = 250; // Updated max characters to 250

chatbox.addEventListener('input', function() {
    let textLength = chatbox.value.length;

    // Update the current character count
    currentCount.textContent = textLength;

    // If the max characters are reached or exceeded, toggle the error class
    if (textLength >= maxCharacters) {
        // Add the 'error' class and remove the 'noerror' class
        chatbox.classList.add('error');
        chatbox.classList.remove('noerror');
        
        // Change the color of the whole #charCount to red
        charCount.style.color = 'red';

        // Prevent the user from typing more than max characters
        chatbox.value = chatbox.value.substring(0, maxCharacters); // Truncate the input
    } else {
        // Add the 'noerror' class and remove the 'error' class
        chatbox.classList.add('noerror');
        chatbox.classList.remove('error');
        
        // Reset the counter color to black
        charCount.style.color = 'black';
    }
});
