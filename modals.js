// modals.js

// Generate modal HTML dynamically
function createModal(id, title, description, skills, tools) {
  return `
    <div id="${id}" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal('${id}')">&times;</span>
        <h2>${title}</h2>
        <p>${description}</p>
        <ul>
          <li><strong>Skills:</strong> ${skills.join(', ')}</li>
          <li><strong>Tools:</strong> ${tools.join(', ')}</li>
        </ul>
      </div>
    </div>
  `;
}

// Load all modals into the container
function loadModals() {
  const container = document.getElementById('modal-container');
  container.innerHTML = `
    ${createModal(
      'modal1',
      'Local Economic Indicator Tracker',
      'This project uses public datasets to track local economic indicators such as inflation, unemployment, and consumer spending.',
      ['Econometrics', 'Forecasting'],
      ['Python', 'pandas']
    )}
    <!-- Add more createModal() calls here for other projects -->
  `;
}