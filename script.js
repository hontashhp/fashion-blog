/* Reset some default styles */
body, h1, p, ul {
    margin: 0;
    padding: 0;
}

/* Set a background color and center the header image */
header {
    background-color: #f4f4f4;
    text-align: center;
}
header img {
    width: 100%;
    max-width: 100%;
    height: auto;
}

/* Create a two-column card layout */
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    margin: 20px auto;
    max-width: 1200px;
}

.card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: calc(50% - 20px);
    margin-bottom: 20px;
    padding: 20px;
    box-sizing: border-box;
}

/* Style for card content */
.card h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.card p {
    font-size: 16px;
}
