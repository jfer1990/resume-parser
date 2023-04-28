import { getAllMembers, getAllReviewers } from '../helpers/getters.js';
import Revision from '../models/revision.js';

const getTodayRevision = async (req, res = response) => {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  const { members } = await getAllMembers();
  const { reviewers } = await getAllReviewers();
  if (members === undefined || members === null || members.length === 0) {
    return res.json({
      msg: 'Get random assignments API - No members to assign - controller',
      assignments: {},
    });
  }
  if (reviewers === undefined || reviewers === null || reviewers.length === 0) {
    return res.json({
      msg: 'Get random assignments API - No reviewers to assign - controller',
      assignments: {},
    });
  }
  const candidatesPerReviewer = members.length / reviewers.length;
  const candidatesOffset = members.length % reviewers.length;

  shuffle(members);
  // shuffle(reviewers);

  // getAssingationRule();

  let candidatesFrom = 0;
  let candidatesTo = candidatesPerReviewer;
  const assignments = await Promise.all(
    reviewers.map(async (reviewer) => {
      if (candidatesOffset > 0) {
        const candidatesToAssign = members.slice(candidatesFrom, candidatesTo + 1);
        candidatesFrom += candidatesPerReviewer + 1;
        candidatesTo += candidatesPerReviewer + 1;
        const isSaved = await saveAssignments(candidatesToAssign, reviewer.id, reviewer);
        if (isSaved) {
          return {
            reviewer: {
              ...reviewer,
              assigned_students: candidatesToAssign,
            },
          };
        }
      }
      const candidatesToAssign = members.slice(candidatesFrom, candidatesTo);
      candidatesFrom += candidatesPerReviewer;
      candidatesTo += candidatesPerReviewer;
      const isSaved = await saveAssignments(candidatesToAssign, reviewer.id, reviewer);
      if (isSaved) {
        return {
          reviewer: {
            ...reviewer,
            assigned_students: candidatesToAssign,
          },
        };
      }
      const today = moment().startOf('day').toDate();
      const { members: cands } = await Revision.findOne({
        reviewerID: new mongoose.Types.ObjectId(reviewer.id),
        date: today,
      }).exec();
      const assignedCandidates = cands.map((cand) => ({ id: cand.id, name: cand.name, email: cand.email }));
      return {
        reviewer: {
          ...reviewer,
          assigned_students: assignedCandidates,
        },
      };
    })
  );

  res.json({
    msg: 'Get random assignments API - controller',
    assignments,
  });
};

const postTodayRevision = async (req, res = response) => {};

const putAssignments = (req, res) => {};

export { putAssignments, getTodayRevision, postTodayRevision };
