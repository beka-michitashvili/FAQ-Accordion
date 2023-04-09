'use strict';

// JavaScript code to show only one answer at a time
const accordion = document.getElementsByClassName('content-container');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    // Hide all other answers
    const allAnswers = document.querySelectorAll('.answer');
    for (let j = 0; j < allAnswers.length; j++) {
      if (allAnswers[j] !== this.children[1]) {
        allAnswers[j].style.display = 'none';
        allAnswers[j].parentNode.classList.remove('active');
      }
    }

    // Toggle the clicked answer
    this.children[1].style.display = 'block';
    this.classList.toggle('active');
  });
}
