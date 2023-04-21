
import { Schema, model } from "mongoose";

const CandidateSchema = Schema({
    name: {
        type:String, 
        required: [true,'El nombre es obligatorio']
    }, 
    email:{
        type:String, 
        required:[true, 'El correo es obligatorio'], 
        unique:true
    },
}); 

//Return the whole object but the  __v attributes
CandidateSchema.methods.toJSON = function(){
    const {__v, ...candidate_rest} = this.toObject();
    return candidate_rest;  
}

export default model('Candidate', CandidateSchema); 