// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-01-13
// @description  try to take over the world!
// @author       You
// @match        https://docs.google.com/forms/d/e/your_form_id/viewform*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const names = [/* Fill with names */];

    function submitRandomForm() {
        // Select a random Indian name
        const randomName = names[Math.floor(Math.random() * indianNames.length)];

        // Fill out the name field
        const nameField = document.querySelector('input[type="text"]');
        nameField.value = randomName;

        // Dispatch an input event
        let event = new Event('input', {
            bubbles: true,
            cancelable: true,
        });
        nameField.dispatchEvent(event);

        // Get all multiple choice questions
        const multipleChoiceQuestions = document.querySelectorAll('div[data-params]');

        multipleChoiceQuestions.forEach((question, index) => {
            // Delay the execution of this code
            setTimeout(() => {
                // Get all options for this question
                const options = question.querySelectorAll('div[role="radio"]');

                // Select a random option
                if (options.length > 0) {
                    const randomOptionIndex = Math.floor(Math.random() * options.length);
                    options[randomOptionIndex].click();
                }
            }, index * 1000); // Delay of 1 second
        });

        // Delay the submission of the form
        setTimeout(() => {
            // Submit the form
            document.querySelector('div[role="button"][jsname="M2UYVd"]').click();
        }, multipleChoiceQuestions.length * 1000); // Delay of 1 second per question

    }

    // This don't work ig lol
    function goBackToForm() {
        // Delay the navigation back to the form page
        setTimeout(() => {
            // Replace with your form URL
            window.location.href = 'https://docs.google.com/forms/d/e/your_form_id/viewform';
        }, 5000); // Delay of 2 seconds
    }

    if (window.location.pathname.endsWith('/formResponse')) { // If we're on the "submitted" page
        goBackToForm();
    } else if (window.location.pathname.indexOf('/forms/d') === 0) { // If we're on the form page
        submitRandomForm();
    }
})();
