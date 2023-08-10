{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Function to fetch and load JSON data into the card-container\
function loadCards() \{\
    fetch('data.json')\
        .then(response => response.json())\
        .then(data => \{\
            const cardContainer = document.querySelector('.card-container');\
\
            data.forEach(item => \{\
                const card = document.createElement('div');\
                card.classList.add('card');\
\
                const title = document.createElement('h2');\
                title.textContent = item.title;\
\
                const content = document.createElement('p');\
                content.textContent = item.content;\
\
                card.appendChild(title);\
                card.appendChild(content);\
                cardContainer.appendChild(card);\
            \});\
        \})\
        .catch(error => console.error('Error loading JSON data:', error));\
\}\
\
// Call the loadCards function when the page is loaded\
window.addEventListener('load', loadCards);\
}