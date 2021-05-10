const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.paths={
            auth:'/api/auth',
            notes:'/api/notes'
        }
        //Init all of middlewares
        this.middlewares();
        
        //Init all of routes
        this.routes();

        //Init DB connection
        this.connectDb();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.notes, require('../routes/notes'));
        
    }

    async connectDb(){
        await dbConnection();
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running on port', this.port );
        });
    }


}

module.exports = Server;
