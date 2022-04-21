import Agent from '../models/agent';
import {Request, Response} from 'express';

export const AgentRegister = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    const agent = new Agent({name, email, password});
    try {
        await agent.save();
        res.status(201).send({message: 'Agent registered successfully'});
    } catch (error) {
        res.status(400).send(error);
    }
};
