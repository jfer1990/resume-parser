import Candidate from '../models/candidate.js';
import Reviewer from '../models/reviewer.js';

const existCandidateEmail = async (email = '') => {
  const existEmail = await Candidate.findOne({ email }).exec();
  if (existEmail) throw new Error(`el correo ${email} ya está registrado`);
};
const existReviewerEmail = async (email = '') => {
  const existEmail = await Reviewer.findOne({ email }).exec();
  if (existEmail) throw new Error(`el correo ${email} ya está registrado`);
};

export { existCandidateEmail, existReviewerEmail };
