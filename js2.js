const paragraphs = document.querySelectorAll('p');
let currentIndex = 0;

function showParagraph(index) {
    paragraphs.forEach((p, i) => {
        if (i === index) {
            p.classList.add('active');
        } else {
            p.classList.remove('active');
        }
    });
}

function showNextParagraph() {
    showParagraph(currentIndex);
    currentIndex = (currentIndex + 1) % paragraphs.length;
}

// Show the first paragraph immediately
showNextParagraph();

// Use a timer to show subsequent paragraphs with a delay
setInterval(showNextParagraph, 5000); // Adjust the delay as needed
