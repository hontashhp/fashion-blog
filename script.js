// Function to fetch and load JSON data into the card-container
function loadCards() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.querySelector('.card-container');

            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

                const title = document.createElement('h2');
                title.textContent = item.title;

                const content = document.createElement('p');
                content.textContent = item.content;

                card.appendChild(title);
                card.appendChild(content);
                cardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading JSON data:', error));
}

// Call the loadCards function when the page is loaded
window.addEventListener('load', loadCards);
