let currentQuestion = 0;
const questions = [
    "Is it love at first sight?",
    "Do you believe in destiny?",
    "Will you spend this Valentine's Day with me?",
    "Do you think we'll make amazing memories?",
    "Will you be my Valentine?"
];

const heartContainer = document.getElementById("heartContainer");

function createHeart() {
    const heart = document.createElement("img");
    heart.classList.add("heart");
    heart.src = "https://media.giphy.com/media/9t3YYpQyDiEpo/giphy.gif"; // You can replace this with your own heart GIF
    heart.alt = "Floating heart GIF";
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000); // Remove heart after 3 seconds
}

function nextQuestion(answer) {
    currentQuestion++;

    if (answer === 'yes') {
        createHeart(); // Display floating heart GIF when "Yes" is clicked
    }

    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion];
        document.getElementById("responseMessage").textContent = `You answered: ${answer.toUpperCase()}`;
    } else {
        document.getElementById("questionContainer").innerHTML = "<p>Yay! Here's the big reveal...</p>";
        document.getElementById("responseMessage").innerHTML = "<p>💘 You said YES to every question! Now, will you be mine?</p>";
        displayFinalMessage();
    }
}

function displayFinalMessage() {
    const finalMessage = document.createElement("div");
    finalMessage.classList.add("finalMessage");
    finalMessage.innerHTML = "<p>💖 You’ve captured my heart! Will you be mine forever?</p>";
    
    // Add final surprise GIF (e.g., celebration GIF)
    const surpriseGif = document.createElement("img");
    surpriseGif.src = "https://media.giphy.com/media/26tPojvLvIuYpA5QY/giphy.gif"; // Replace with your desired surprise GIF
    surpriseGif.alt = "Celebration GIF";
    surpriseGif.classList.add("finalGif");

    finalMessage.appendChild(surpriseGif);

    // Surprise link for gift or proposal
    const surpriseLink = document.createElement("a");
    surpriseLink.href = "#"; // Replace with actual link to a surprise or proposal page
    surpriseLink.classList.add("surpriseLink");
    surpriseLink.textContent = "Click here for a surprise gift 🎁";
    
    finalMessage.appendChild(surpriseLink);
    document.body.appendChild(finalMessage);
}

function createHeart() {
    const heart = document.createElement("img");
    heart.classList.add("heart");
    heart.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxiOXVtaHF0bmFyeDVyeXNocXJiNXYzMzF2YTkzZnhzcHo1NWg1cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYOzHsY6M2Bbjck/giphy.gif"; // Updated heart GIF URL
    heart.alt = "Floating heart GIF";
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000); // Remove heart after 3 seconds
}

function displayFinalMessage() {
    const finalMessage = document.createElement("div");
    finalMessage.classList.add("finalMessage");
    finalMessage.innerHTML = "<p>💖 You’ve captured my heart! Will you be mine forever?</p>";

    // Add final surprise GIF (e.g., celebration GIF)
    const surpriseGif = document.createElement("img");
    surpriseGif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxiOXVtaHF0bmFyeDVyeXNocXJiNXYzMzF2YTkzZnhzcHo1NWg1cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYOzHsY6M2Bbjck/giphy.gif"; // Updated surprise GIF URL
    surpriseGif.alt = "Celebration GIF";
    surpriseGif.classList.add("finalGif");

    finalMessage.appendChild(surpriseGif);

    // Surprise link for gift or proposal
    const surpriseLink = document.createElement("a");
    surpriseLink.href = "#"; // Replace with actual link to a surprise or proposal page
    surpriseLink.classList.add("surpriseLink");
    surpriseLink.textContent = "Click here for a surprise gift 🎁";
    
    finalMessage.appendChild(surpriseLink);
    document.body.appendChild(finalMessage);
}

