import messageManager from "../daos/mongodb/chatDao";

const chatDao = new messageManager();

export const getMessages = async () => {
    try {
        return await chatDao.getMessages();
    } catch (error) {
        throw new Error(error);
    }
}

export const addMessages = async (messages) => {
    try {
        return await chatDao.addMessages(messages);
    } catch (error) {
        throw new Error(error);
    }
};
