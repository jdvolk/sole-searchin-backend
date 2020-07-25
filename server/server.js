const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);


app.set('port', process.env.PORT || 3002)

app.listen(app.get('port'), () => {
    console.log(`App is running on port ${app.get('port')} `)
});

app.get('/', (request, response) => {
    response.send('SOLE SEARCHIN')
});

app.get('/api/v1/shoes', async (request, response) => {
    try {
        const shoes = await database('shoes').select();
        response.status(200).json(shoes);
    } catch (error) {
        response.status(500).json({
            error
        });
    }
});