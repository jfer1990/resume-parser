import { response } from 'express';
import Candidate from '../models/candidate.js';

const getCandidate = (req, res = response) => {
  const query = req.query;
  res.json({
    msg: 'get API - controller',
    query,
  });
};

const postCandidate = async (req, res = response) => {
  try {
    const { name, email } = req.body;
    const candidate = new Candidate({ name, email });

    await candidate.save();
    res.json({
      msg: 'post API user - controller',
      candidate,
    });
  } catch (e) {
    console.log(e);
  }
};

const putCandidate = async (req, res = response) => {
  const { id } = req.params;
  const { _id, email, ...rest } = req.body;

  const user = await Candidate.findByIdAndUpdate(id, rest).exec();

  res.json({
    msg: 'put API user - controller',
    user,
  });
};

const deleteCandidate = async (req, res = response) => {
  try {
    const { email } = req.body;
    await Candidate.findOneAndDelete({ email });
    const candidates = await Candidate.find();
    res.json({
      msg: 'delete API user / return all the remaining students - controller',
      candidates,
    });
  } catch (e) {
    console.log('error in delete reviewer', e);
  }
};

const getAll = async (req, res = response) => {
  const candidatesResult = await Candidate.find();
  const students = [...candidatesResult].map((cand) => {
    const { _id, name, email } = cand;
    const id = _id.toString();
    return { name, email, id };
  });
  res.json({
    msg: 'get all API candidates - controller',
    students,
  });
};
export { getCandidate, getAll, postCandidate, putCandidate, deleteCandidate };
