import mongoose from "mongoose";
import db from "../config/db.js"

const patientSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: [true, "Email can't be empty"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    name: {
        type: String,
        required: true
    },
    refreshToken: [String],
    socketId: {
        type: String
    },
    phoneNumber: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    otp:{
        type:String
    }
}, { timestamps: true });




const patientModel = db.model('patient', patientSchema)
export default patientModel