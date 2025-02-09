import express from "express";
import { loginUser, registerUser } from "../contollers/auth.controller";
import { authTokenMiddleware } from "../middlewares/authToken";

const authRouter = express.Router();

authRouter.post('/login', loginUser);
authRouter.post('/register', registerUser);

export default authRouter;