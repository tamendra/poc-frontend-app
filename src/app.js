const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const apiKey = process.env.MY_SECRET_KEY;
console.log(apiKey); // Use the API key securely

app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});