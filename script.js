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

function nextQuestion(answer) {
    // Hide the current question page
    const questionContainer = document.getElementById("questionContainer");
    questionContainer.style.display = 'none'; // Hide current question

    // Determine the appropriate GIF based on the answer
    let gifUrl;
    if (answer === 'yes') {
        gifUrl = yesGifs[currentQuestion]; // Get the appropriate "Yes" GIF based on the question
    } else {
        gifUrl = noGif; // Use the "No" GIF for all questions
    }

    // Show the GIF page
    showGifPage(gifUrl);

    // Wait for 2.5 seconds before showing the next question
    setTimeout(() => {
        currentQuestion++;

        // After 2.5 sec, show the next question or the final page
        if (currentQuestion < questions.length) {
            document.getElementById("question").textContent = questions[currentQuestion];
            questionContainer.style.display = 'block'; // Show next question
        } else {
            displayFinalMessage(); // Show final message after all questions
        }
    }, 2000); // Show GIF for 2.5 seconds
}

function showGifPage(gifUrl) {
    // Create a new page for the GIF
    const gifPage = document.createElement('div');
    gifPage.classList.add('gifPage');

    // Add the GIF element
    const gifElement = document.createElement('img');
    gifElement.src = gifUrl;
    gifElement.alt = "Answer GIF";
    gifElement.classList.add('gifImage'); // Add class for styling
    gifPage.appendChild(gifElement);
    
    // Append to body
    document.body.appendChild(gifPage);

    // Remove the GIF page after 2.5 seconds
    setTimeout(() => {
        gifPage.remove();
    }, 2000);
}

function displayFinalMessage() {
    const finalMessage = document.createElement("div");
    finalMessage.classList.add("finalMessage");
    finalMessage.innerHTML = "<p>💖 You’ve captured my heart! Will you be mine forever?</p>";

    // Display before proposal GIF
    const surpriseGif = document.createElement("img");
    surpriseGif.src = beforeProposalGif;
    surpriseGif.alt = "Proposal GIF";
    surpriseGif.classList.add("finalGif");

    finalMessage.appendChild(surpriseGif);
    document.body.appendChild(finalMessage);
}
