import { Router } from "express";
import { verifyToken } from "../utils/tokenManager.js";
import { validate } from "../utils/validators.js";
import { chatCompletionValidator } from "../utils/validators.js";
import { deleteChats, generateChatCompletion, sendChatsToUser } from "../controllers/chatControllers.js";
//protected API
const chatRoutes = Router();
chatRoutes.post("/new", validate(chatCompletionValidator), verifyToken, generateChatCompletion);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
chatRoutes.delete("/all-chats", verifyToken, deleteChats);
export default chatRoutes;
//# sourceMappingURL=chatRoutes.js.map