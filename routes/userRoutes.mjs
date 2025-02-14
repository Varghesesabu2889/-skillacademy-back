import express from "express";
import { forgotPassword, loginUser, myProfile, register, resetPassword, verifyUser } from "../controllers/userController.mjs";
import { isAuth } from "../middlewares/isAuth.mjs";


const router = express.Router()


router.post('/user/register',register)
router.post("/user/verify",verifyUser)
router.post("/user/login",loginUser)
router.get("/user/me",isAuth,myProfile)
router.post("/user/forgot",forgotPassword)
router.post("/user/reset",resetPassword)


export default router