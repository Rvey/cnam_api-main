import mongoose from 'mongoose';




// export interface CnamDocument extends patientFile, mongoose.Document {
//     createdAt: Date;
//     updatedAt: Date;
// }

export const patientSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: Number,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        medicine:[{
            ref: {
                type: String,
            }
        }],

    },
    {timestamps: true}
);

const PatientModel = mongoose.model('PatientFile', patientSchema);


export default PatientModel;