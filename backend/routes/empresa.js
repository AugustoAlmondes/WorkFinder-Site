import express from 'express'
import {getEmpresa, addEmpresa, addVacany, getVacany} from "../controlles/empresa.js"

const router = express.Router();

router.get("/", getEmpresa);
router.post("/", addEmpresa);
router.post("/vacany", addVacany);
router.get("/vacany", getVacany);

export default router;