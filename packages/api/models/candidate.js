import { Schema, model } from 'mongoose';

const CandidateSchema = Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true,
  },
});

// Return the whole object but the  __v attributes
CandidateSchema.methods.toJSON = function () {
  const { ...candidateRest } = this.toObject();
  return candidateRest;
};

export default model('Candidate', CandidateSchema);
