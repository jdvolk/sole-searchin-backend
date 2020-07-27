const app = require('../server/server')

app.set('port', process.env.PORT || 3002)

app.listen(app.get('port'), () => {
    console.log(`App is running on port ${app.get('port')} `)
});