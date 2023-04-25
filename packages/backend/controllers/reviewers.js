import { response } from 'express';
import moment from 'moment/moment.js';
import mongoose from 'mongoose';
import { getAllCandidates, getAllReviewers, getAssingationRule } from '../helpers/getters.js';
import Reviewer from '../models/reviewer.js';
import Revision from '../models/revision.js';

const getReviewer = (req, res = response) => {
  const query = req.query;
  res.json({
    msg: 'get API - controller',
    query,
  });
};

const postReviewer = async (req, res = response) => {
  try {
    const { name, email } = req.body;
    const reviewer = new Reviewer({ name, email });

    await reviewer.save();
    res.json({
      msg: 'post API user - controller',
      reviewer,
    });
  } catch (e) {
    console.log(e);
  }
};

const putReviewer = async (req, res = response) => {
  const { id } = req.params;
  const { _id, email, ...rest } = req.body;

  const reviewer = await Reviewer.findByIdAndUpdate(id, rest).exec();

  res.json({
    msg: 'put API user - controller',
    reviewer,
  });
};

const deleteReviewer = (req, res = response) => {
  res.json({
    msg: 'delete API user - controller',
  });
};

const getAll = async (req, res = response) => {
  const allReviewers = await Reviewer.find();
  const reviewers = [...allReviewers].map((reviewer) => {
    const { email, name, _id } = reviewer;
    const id = _id.toString();
    return { email, name, id };
  });

  res.json({
    msg: 'get all reviewes API - controller',
    reviewers,
  });
};

const getCandidates = async (req, res = response) => {
  const { id: reviewerID } = req.params;

  // const reviewer = await Reviewer.findById(reviewerID).exec();
  const allRevisions = await Revision.find(); // findall no funciona
  const candidates = [...allRevisions].find((revision) => {
    const { reviewer, candidates } = revision;
    if (reviewer.toString() === reviewerID) return candidates;
    return false;
  });

  res.json({
    msg: 'get all reviewes API - controller',
    candidates,
  });
};

const getAllAsigns = async (req, res = response) => {
  const allReviewers = await Reviewer.find();
  const reviewers = [...allReviewers].map((reviewer) => {
    const { email, name, _id } = reviewer;
    const id = _id.toString();
    return { email, name, id };
  });

  res.json({
    msg: 'get all reviewes API - controller',
    reviewers,
  });
};

const saveAssignments = async (candidates, reviewerID, reviewerObject) => {
  // esto es parte del controlador? o es un helper?
  try {
    if (!candidates || !reviewerID) return;
    // Checa si el reviewerID ya tiene un documento para el día de hoy
    const today = moment().startOf('day').toDate();
    const reviewer = new mongoose.Types.ObjectId(reviewerID);
    const existAssignment = await Revision.findOne({ reviewerID: reviewer, date: today }).exec();

    if (existAssignment) return false;
    // const candidatesID = candidates.map(id=>new mongoose.Types.ObjectId(id));

    const revision = new Revision({ date: today, reviewerID: reviewer, candidates, reviewer: reviewerObject });

    await revision.save();
    return true;
  } catch (e) {
    console.log('error', e);
  }
};

const getTodayRevision = async (req, res = response) => {
  function shuffle(array) {
    // saca esta función de aquí!!! aumenta complejidad ciclomática
    array.sort(() => Math.random() - 0.5);
  }

  const { candidates } = await getAllCandidates();
  const { reviewers } = await getAllReviewers();

  const candidatesPerReviewer = candidates.length / reviewers.length;
  const candidatesOffset = candidates.length % reviewers.length;

  shuffle(candidates);
  shuffle(reviewers);

  getAssingationRule();

  let candidatesFrom = 0;
  let candidatesTo = candidatesPerReviewer;
  // refactorizar-> modularizar y bajar complejidad ciclomática y de comprensión.
  const assignments = await Promise.all(
    reviewers.map(async (reviewer) => {
      if (candidatesOffset > 0) {
        const candidatesToAssign = candidates.slice(candidatesFrom, candidatesTo + 1);
        candidatesFrom += candidatesPerReviewer + 1;
        candidatesTo += candidatesPerReviewer + 1;
        const isSaved = await saveAssignments(candidatesToAssign, reviewer.id, reviewer);
        if (isSaved) {
          return {
            reviewer: {
              ...reviewer,
              assigned_candidates: candidatesToAssign,
            },
          };
        }
      }
      const candidatesToAssign = candidates.slice(candidatesFrom, candidatesTo);
      candidatesFrom += candidatesPerReviewer;
      candidatesTo += candidatesPerReviewer;
      const isSaved = await saveAssignments(candidatesToAssign, reviewer.id, reviewer);
      if (isSaved) {
        return {
          reviewer: {
            ...reviewer,
            assigned_candidates: candidatesToAssign,
          },
        };
      }
      const today = moment().startOf('day').toDate();
      const { candidates: cands } = await Revision.findOne({
        reviewerID: new mongoose.Types.ObjectId(reviewer.id),
        date: today,
      }).exec();
      const assignedCandidates = cands.map((cand) => ({ id: cand.id, name: cand.name, email: cand.email }));
      return {
        reviewer: {
          ...reviewer,
          assigned_candidates: assignedCandidates,
        },
      };
    })
  );

  res.json({
    msg: 'Get random assignments API - controller',
    assignments,
  });
};
export { getReviewer, getCandidates, getAllAsigns, getTodayRevision, getAll, postReviewer, putReviewer, deleteReviewer };
