let firstCard = null;
let secondCard = null;
let lockBoard = false;
let flips = 0;
let matches = 0;

const cards = document.querySelectorAll('.card');

// Event listener for each card
cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

function flipCard() {
    if (lockBoard) return; // Prevent flipping while waiting for the second card
    if (this === firstCard) return; // Prevent flipping the same card again

    this.classList.add('flipped'); // Flip the clicked card
    flips++;
    document.getElementById('flips').innerText = flips; // Update flips count

    // If this is the first card flipped
    if (!firstCard) {
        firstCard = this; // Store the first card
        return;
    }

    secondCard = this; // Store the second card

    // Check for match based on specific pairs
    checkForSpecificMatch();
}

function checkForSpecificMatch() {
    const matchConditions = {
        "card1": "card7",
        "card2": "card14",
        "card3": "card8",
        "card4": "card6",
        "card5": "card15",
        "card9": "card16",
        "card10": "card13",
        "card11": "card12",
        "card14": "card2",
        "card7": "card1",
        "card8": "card3",
        "card6": "card4",
        "card15": "card5",
        "card16": "card9",
        "card13": "card10",
        "card12": "card11",
    };

    // Check if the second card matches the expected pair for the first card
    if (matchConditions[firstCard.id] === secondCard.id) {
        // It's a match
        matches++;
        document.getElementById('matches').innerText = matches; // Update matches count
        resetCards();
    } else {
        // Not a match
        lockBoard = true; // Lock the board
        setTimeout(() => {
            firstCard.classList.remove('flipped'); // Flip back the first card
            secondCard.classList.remove('flipped'); // Flip back the second card
            resetCards();
        }, 500); // Delay before flipping back
    }
}

function resetCards() {
    [firstCard, secondCard, lockBoard] = [null, null, false]; // Reset variables
}


// Function to change the background image
function changeBackground() {
    // Set the new background image
    document.body.style.backgroundImage = "url('../Assets/Images/25176002-57d1-4342-b155-08f7fb9841b8.webp')";
    document.body.style.backgroundSize = "cover"; // Ensure the image covers the entire background
    document.body.style.backgroundPosition = "center"; // Center the image
}

// Attach the function to the button
document.getElementById('changeBackgroundButton').addEventListener('click', changeBackground);




