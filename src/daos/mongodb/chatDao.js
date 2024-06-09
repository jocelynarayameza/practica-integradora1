import { ChatsModel } from "./models/chatModel.js";

export default class MessageManager{

    getMessages = async () => {
        try{
            const messages = await ChatsModel.find()
            return messages
        }catch(error){
            console.error('No hay mensajes para leer',error.message); 
            return error
        }
    }
    addMessages = async (message) => {
        try{
            return await ChatsModel.create(message);
        }catch(error){
            console.error('No se pudo entregar el mensaje',error.message);
            return error;
        }
    }
}


