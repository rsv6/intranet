const App = function(){
    const express = require("express");
    const session = require("express-session");
    const app = express();
    const bodyParser = require("body-parser");
    const path = require("path");
    
    
    //const port = process.env.PORT || 80 // for use network local
    const port = 8080; // for use localhost:

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    const server = app.listen(port, () => {
        console.log(`Server rodando na porta ${port}`);
    });

    const io = require('socket.io').listen(server);

    app.set('views', './app/views');
    app.set('view engine', 'pug');

    app.use('/static', express.static('app/public'));
    
    //app.set('trust proxy', 1) // trust first proxy
    app.use(session({
        secret: 'config.session.secret',
        saveUninitialized: false,
        resave: false
    }));

    app.use('/', require('./routes'));

    let messages = [];

    io.on('connection', socket => {

        console.log(`Socket conectado: ${socket.id}`);

        socket.emit('previousMessages', messages);

        // Recebendo message pelo nome: 'sendMessage':
        socket.on('sendMessage', data => {
	    console.log(`Mensagem enviada, id:${socket.id}`);
            console.log(data);
            messages.push(data);    //Adicionado message ao array de messages

            // 'emit', enviar exclusivamente resposta para o 'socket':
            // 'broadcast.emit', envia para todos os 'sockets' online:
            socket.broadcast.emit('receivedMessage', data);
        })
    })

}


module.exports = App;
