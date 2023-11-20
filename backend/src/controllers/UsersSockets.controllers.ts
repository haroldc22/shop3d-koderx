import ConnectMysql from "../connection/connectMysql";
import { user } from "../interfaces/users";
import Socket from "./Socket.controllers";
import {Express} from "express"

class UsersSockets extends Socket{
    connectmsql: ConnectMysql;
    constructor(app: Express){
        super(app);
        this.connectmsql = new ConnectMysql();
    }

    SendAll = () =>{
        this.connectmsql.connect.execute(`SELECT * FROM user`, (err, result: Array<user>)=>{
            if(err){
                console.log(err);
                throw err;
            }
           this.socket.emit('server:users', {users: result}); 
        })
    }

    Create = (): void => {
        this.socket.on('client:user', (useri: user)=>{
            this.connectmsql.connect.execute(`INSERT INTO user(name, email, cell, key_stripe) VALUES (${useri.name}, ${useri.email}, ${useri.cell}, ${useri.key_stripe})`, (err, result)=>{
                if(err){
                    console.log(err);
                    throw err;
                }
    
                this.SendAll();
            })
        })
    }
}

export default UsersSockets;