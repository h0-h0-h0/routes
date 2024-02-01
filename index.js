const express = require('express');
const app = express();

const articles = [{title: 'Example' }, {title: 'Example2' }];

app.set( 'port', process.env.PORT || 3000 )

// app.get('/articles', (req, res, next) => {
app.get('/', (req, res, next) => {  
    res.send(articles);
});

app.post('/articles', (req, res, next) => {
    res.send('OK');
});

app.get('/articles/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('Fetching:', id);    
    res.send(articles[id]);
});

app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('Deleting:', id);
    delete articles[id];    
    res.send({ message: 'Deleted' });
    res.send(articles[id]);
});

app.listen(app.get('port'), () => {
    console.log('App started on port', app.get('port'));
});

module.exports = app;


/*
app.????( , (,) => {
    ;
});
*/
