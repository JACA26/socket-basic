const {io} = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    
    //enviar un mensaje de bienvenida al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido!'
    });
    
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    
    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        
        
        client.broadcast.emit('enviarMensaje', data);
        /* if(data.usuario){
            callback({
                resp: "Usuario recibido"
            });
        }else {
            callback({
                resp: "User Not found"
            });
        } */
    });
})