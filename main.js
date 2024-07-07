// function showMessage(message) {
//     const messageElement = document.createElement('div');
//     messageElement.className = 'message';
//     messageElement.textContent = message;
//     document.body.appendChild(messageElement);

//     setTimeout(() => {
//         messageElement.remove();
//     }, 2000);
// }



// let answered = false;

// function checkAnswer(button) {
//     if (answered) {
//         return; 
//     }

//     answered = true;
//     const correctAnswer = "Jasprit Bumrah"; 
//     const selectedAnswer = button.textContent.trim();

//     if (selectedAnswer === correctAnswer) {
//         displayResult("Congrats, your answer is right!");
//     } else {
//         displayResult("Your answer is incorrect.");
//     }

//     const options = document.querySelectorAll('#options li');
//     options.forEach(option => {
//         if (option.querySelector('button') !== button) {
//             option.style.display = 'none';
//         }
//     });
// }

// function displayResult(message) {
//     const resultElement = document.getElementById('result');
//     resultElement.textContent = message;
// }
function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.textContent = message;
    document.body.appendChild(messageElement);

    setTimeout(() => {
        messageElement.remove();
    }, 2000);
}

let answered = false;

function checkAnswer(button) {
    if (answered) {
        return; 
    }

    answered = true;
    const correctAnswer = "Jasprit Bumrah"; 
    const selectedAnswer = button.textContent.trim();

    if (selectedAnswer === correctAnswer) {
        displayResult("Congrats, your answer is right!");
    } else {
        displayResult("Your answer is incorrect.");
    }

    const options = document.querySelectorAll('#options li');
    options.forEach(option => {
        if (option.querySelector('button') !== button) {
            option.style.display = 'none';
        }
    });
}

function displayResult(message) {
    const resultElement = document.getElementById('result');
    console.log('Result Element:', resultElement); // Debugging line
    resultElement.textContent = message;
    console.log('Message:', message); // Debugging line
}

// Optional: Remove these debugging lines after fixing the issue
console.log('JS Loaded'); // Ensure the JS is loaded



