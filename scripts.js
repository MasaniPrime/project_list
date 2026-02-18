// scripts.js

// Open modal
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

// Close modal
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Close modal when clicking outside content
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Project Category Button(s) Functionality
let activeCategory = null;

function filterProjects(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('nav button');

    // If the same category is clicked again, reset to show all
    if (activeCategory === category) {
        cards.forEach(card => card.style.display = 'block');
        activeCategory = null;

        // Remove active styling from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        return;
    }

    // Otherwise filter by category
    cards.forEach(card => {
        if (card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Update active category
    activeCategory = category;

    // Update button styling
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase().replace(/\s+/g, '') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}
