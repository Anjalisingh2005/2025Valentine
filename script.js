let currentQuestion = 0;
const questions = [
    "Is it love at first sight?",
    "Do you believe in destiny?",
    "Will you spend this Valentine's Day with me?",
    "Do you think we'll make amazing memories?",
    "Will you be my Valentine?"
];

// Store GIF URLs for Yes answers (each question has its own GIF)
const yesGifs = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnc1MDRnbTc0NHY3c3BoOGc5bWZscTJlNTFtYnQ0eWJiYmlkdWZhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BSiEuA9dvmUy4nQiJ7/giphy.gif", // Question 1
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxiOXVtaHF0bmFyeDVyeXNocXJiNXYzMzF2YTkzZnhzcHo1NWg1cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYOzHsY6M2Bbjck/giphy.gif", // Question 2
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG94a3U5NjZvbGI5MW9xN3FmcXQzYmVqcHprY3k4Y3U4azc3OTM5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l49JFIqAYshRSD6tq/giphy.gif", // Question 3
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTI1aWUxeG9kcThmYTh1ZGMwbjQ1YmM1ZDM4ZnNxanBkY29yZXhqcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kLh4a3zmbKwthaSEzy/giphy.gif", // Question 4
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzhlbjVweTQydXRiZWlrazM0MTNwazZhamx4cDBpb3Eyd3l4bGx3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26DNbGHpjisiBmdPi/giphy.gif"  // Question 5
];

// Store GIF URLs for No answers (same for all questions)
const noGif = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjd1Z291b3l5bHcybWI5aHQzbW50anF5aW9ia3M2bzl1bG1kODQ0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1KVaj5UcbHwrBMqI/giphy.gif";

// Store the link for before the proposal page
const beforeProposalGif = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJqMWs1bTJrOWVxNnZ4OHR1cnFtbXNjNXdjcXNzdDRkcmh3cDBjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gW3ecy6IOI4abgmDdR/giphy.gif";

const heartContainer = document.getElementById("heartContainer");

function createHeart(gifUrl) {
    const heart = document.createElement("img");
    heart.classList.add("heart");
    heart.src = gifUrl;
    heart.alt = "Floating heart GIF";
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000); // Remove heart after 3 seconds
}

function nextQuestion(answer) {
    currentQuestion++;

    // Use the correct GIF for "Yes" or "No" answer
    let gifUrl;
    if (answer === 'yes') {
        gifUrl = yesGifs[currentQuestion - 1]; // Get the appropriate "Yes" GIF based on the question
    } else {
        gifUrl = noGif; // Use the "No" GIF for all questions
    }

    createHeart(gifUrl); // Display GIF when answering

    // Show the next question or final page if all questions are answered
    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion];
        document.getElementById("responseMessage").textContent = `You answered: ${answer.toUpperCase()}`;
    } else {
        document.getElementById("questionContainer").innerHTML = ""; // Remove any previous content
        document.getElementById("responseMessage").innerHTML = ""; // Remove any previous response message
        displayFinalMessage();
    }
}

function displayFinalMessage() {
    const finalMessage = document.createElement("div");
    finalMessage.classList.add("finalMessage");
    finalMessage.innerHTML = "<p>💖 You’ve captured my heart! Will you be mine forever?</p>"; // Keep only the final message

    // Display before proposal GIF
    const surpriseGif = document.createElement("img");
    surpriseGif.src = beforeProposalGif;
    surpriseGif.alt = "Proposal GIF";
    surpriseGif.classList.add("finalGif");

    finalMessage.appendChild(surpriseGif);

    document.body.appendChild(finalMessage); // Append the final message with GIF
}
