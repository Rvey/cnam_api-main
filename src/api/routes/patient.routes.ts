import express from 'express';
import {
    checkFileAndSendMain,
    createPatient,
    getAllPatient,
    getPatientById,
} from "../controllers/patientFile.controller";


const Prouter = express.Router();


Prouter.get('/all', getAllPatient);
Prouter.post('/create', createPatient);
// router.delete('/delete/:id', patientFileController.deletePatient);
Prouter.get('/one/:id', getPatientById);
Prouter.post('/checkFile/:id', checkFileAndSendMain)


export default Prouter;