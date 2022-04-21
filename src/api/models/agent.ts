import mongoose from 'mongoose';

export interface Agent {
    email: string;
    password: string;
}


export const AgentSchema = new mongoose.Schema(
    {
        email: {
            type: String,
        },
        password: {
            type: String,
        }

    },
    {timestamps: true}
);

const AgentModel = mongoose.model<Agent>('Agent', AgentSchema);


export default AgentModel;