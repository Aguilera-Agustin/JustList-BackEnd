const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.paths={
            auth:'/api/auth'
        }
        //Init all of middlewares
        this.middlewares();
        
        //Init all of routes
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'))
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running on port', this.port );
        });
    }

}

module.exports = Server;
