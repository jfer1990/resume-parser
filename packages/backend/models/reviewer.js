import { Schema, model } from 'mongoose';

const ReviewerSchema = Schema({
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
ReviewerSchema.methods.toJSON = function () {
  const { __v, ...reviewerRest } = this.toObject();
  return reviewerRest;
};

export default model('Reviewer', ReviewerSchema);
