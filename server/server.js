const express = require('express');
const app = express();


app.set('port', process.env.PORT || 3002)

app.listen(app.get('port'), () => {
    console.log(`App is running on port ${app.get('port')} `)
});

app.get('/', (request, response) => {
    response.send('SOLE SEARCHIN')
});