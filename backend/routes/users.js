import express from 'express'
import {getUsers, addUser, loginUser} from "../controlles/user.js"

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.post("/login", loginUser);

export default router;