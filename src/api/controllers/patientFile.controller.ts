import {Request, Response} from 'express';
import Patient from '../models/patientFile';
import Cnam from "../models/cnam";


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


export const checkFileAndSendMain = async (req: Request, res: Response) => {
    try {
        const patient = await Patient.findById(req.params.id).populate("medicine");
        if (!patient) return res.status(404).json({message: 'Patient not found'});

        const cnam = await Cnam.find();
        if (!cnam) return res.status(404).json({message: 'Cnam not found'});

        // get the object medicine array inside patient object
        const patientMedicine = patient["medicine"];
        // get the object cnam array inside cnam object

        res.json({medicine :patientMedicine});


    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
}

