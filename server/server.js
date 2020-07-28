const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);


// app.set('port', process.env.PORT || 3002)

// app.listen(app.get('port'), () => {
//     console.log(`App is running on port ${app.get('port')} `)
// });

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

// Get single shoe
app.get('/api/v1/shoes/:id', async (request, response) => {
    try {
        const shoeId = parseInt(request.params.id);
        const shoe = await database('shoes').where('id', shoeId).select();
        if(!shoe.length) {
            response.status(404).json("This shoe doesn't exist")
        } 
        response.status(200).json(shoe[0]);
    } catch (error) {
        response.status(500).json({error});
    }
});

// get comments
app.get('/api/v1/shoes/:id/comments', async (request, response) => {
    try {
        const shoeId = parseInt(request.params.id);
        const comments = await database('comments').where('shoe_id', shoeId).select();
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json({error});
    }
});

//post comments
app.post('/api/v1/shoes/:id/comments', async (request, response) => {
    const shoeId = parseInt(request.params.id);
    const comment = request.body;

    for (let requiredParam of ['author', 'main_text']) {
        if (!comment[requiredParam]) {
            return response
                .status(422)
                .send({ error: `Expected format: { author: <String>, main_text: <String> }. You're missing a "${requiredParam}" property.` });
        }
    }
    try {
        comment.shoe_id = shoeId;
        const commentData = await database('comments').insert(comment, ['id', 'created_at']);
        comment.id = commentData[0].id;
        comment.created_at = commentData[0].created_at;
        return response
            .status(200)
            .json(comment);
    } catch (error) {
        response.status(500).json({error});
    }
});

module.exports = app