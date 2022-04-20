import {Request, Response} from 'express';
import Patient from '../models/patientFile';



export const getAllPatient = async (req: Request, res: Response) => {
    try {
        const patient = await Patient.find();
        res.json(patient);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
};

export const getPatientById = async (req: Request, res: Response) => {
    try {
        const patient = await Patient.findById(req.params.id);
        res.json(patient);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
};

export const createPatient = async (req: Request, res: Response) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.status(201).json(patient);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
}


