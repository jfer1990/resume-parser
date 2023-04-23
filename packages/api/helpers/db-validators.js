import Candidate from '../models/candidate.js';
import Reviewer from '../models/candidate.js';

const existCandidateEmail = async (email = '') => {
  const existEmail = await Candidate.findOne({ email: email }).exec();
  if (existEmail) throw new Error(`el correo ${email} ya está registrado`);
};
const existReviewerEmail = async (email = '') => {
  const existEmail = await Reviewer.findOne({ email: email }).exec();
  if (existEmail) throw new Error(`el correo ${email} ya está registrado`);
};

export { existCandidateEmail, existReviewerEmail };
