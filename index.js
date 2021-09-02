const express = require('express');
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/rick', (req, res) => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
    .then(dogData => {
        if (dogData.ok) {
            console.log('Teste');
        }
        return dogData.json();
    })
    .then((value) => {
        console.log(value.message);
        res.send(value.message);
    })
    .catch(error => {
        console.log(error.message);
    })
});

app.get('/morty', (req, res) => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    console.log('teste 1');

    fetch(url)
    .then((place) => {
        if (!place.ok) {
            console.log(place);
            res.send(place);
        }

        console.log('teste 2');

        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log('teste 3');
                const array = [5, 12, 8, 130, 44];
                const valorResultado = array.filter((value) => value === 12);

                console.log('teste 4');
                
                resolve(valorResultado);
            }, 1000);
        });
    }).then((parecer) => {
        console.log('teste 5');
        console.log(parecer);
        res.send(parecer);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});