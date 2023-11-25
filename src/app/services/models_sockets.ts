import { Models } from "../types";
import WebSocketServer from "./socket";
import { io } from "socket.io-client"


class ModelsSockets extends WebSocketServer<Models>{

    constructor() {
        super();
        this.socket = io('http://localhost:1002/?username=koderx23641$', { transports: ['websocket'] });
    }

    getAll = (setModel: React.Dispatch<React.SetStateAction<Models[]>>): void => {
        this.socket.on("server:models", (data) => {
            setModel(data.models)
        })
    }

    create = (model: Models): void => {

    }
}

export default ModelsSockets;