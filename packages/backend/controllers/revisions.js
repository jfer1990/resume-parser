import moment from 'moment';
import { getAllMembers } from '../helpers/getters.js';
import Member from '../models/member.js';
import Reviewer from '../models/reviewer.js';
import Revision from '../models/revision.js';

const getTodayRevision = async (req, res = response) => {
  const revisions = await Revision.find().populate('reviewer').populate('members'); // populate the members array
  console.log('revisions', revisions);
  res.json({
    msg: 'Get random assignments API - controller',
    revisions,
  });
};

const putAssignments = async (req, res = response) => {
  const { assignments } = req.body;

  let totalMembers = 0;
  assignments.forEach((assignment) => {
    console.log('loger', assignment.membersToAssign.length);
    totalMembers += assignment.membersToAssign.length;
  });
  const { members: membersInDb } = await getAllMembers();
  console.log('membersInDb', membersInDb);
  if (membersInDb.length !== totalMembers)
    return res.status(422).send({
      msg: 'Mismatch Error: The total members to assign is different than the total members to be reviewed',
    });

  for (const assignment of assignments) {
    const { membersToAssign, reviewerEmail } = assignment;

    const membersID = await Promise.all(
      membersToAssign.map(async (email) => {
        const member = await Member.findOne({ email });
        console.log('line37 member', member._id.toString());
        return member._id.toString();
      })
    );

    const { _id: reviewerID } = await Reviewer.findOne({ email: reviewerEmail });
    console.log('line43 reviewerID', reviewerID.toString());
    const date = moment().startOf('day').toDate();
    const revision = await Revision.findOneAndUpdate({ date, reviewer: reviewerID.toString() }, { members: membersID });
    res.status(200).send({
      msg: 'Your revission has been updated',
      revision,
    });
  }
};

export { putAssignments, getTodayRevision };
