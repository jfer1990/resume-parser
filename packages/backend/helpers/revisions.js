import { getAllMembers, getAllReviewers } from './getters.js';

const reviewerConfigAssignment = {
  email: 'josh@mail.com',
  membersConfig: {
    emails: ['member1@mail.com'],
    assignOnlyProvided: true,
  },
  memberToAssign: 1,
};
const configExample = {
  configs: [],
  random: true,
};

const randomSort = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const assignNewRevisions = async (config = null) => {
  const { reviewers: reviersData } = await getAllReviewers();
  const { members } = await getAllMembers();

  const reviewers = reviersData.map(({ name, email } = data) => ({ name, email, members: [] }));

  //   if (!config) {
  //     //TODO the hard algorithm
  //     return;
  //   }

  //   console.log('reviewers', reviewers);
  //   console.log('members', members);

  randomSort(members);
  const seeVal = JSON.stringify(distributeMembers(reviewers, members));
  console.log(seeVal);
};

const distributeMembers = (reviewers, members) => {
  const revisions = [];
  let remainingMembers = [...members];

  // Loop through all members and assign them to reviewers
  for (const reviewer of reviewers) {
    const quota = Math.ceil(remainingMembers.length / (reviewers.length - revisions.length));

    reviewer.members = remainingMembers.splice(0, quota);

    revisions.push({
      reviewerName: reviewer.name,
      reviewerEmail: reviewer.email,
      membersToReview: reviewer.members.map(({ name, email } = member) => ({ name, email })),
    });

    // If all members have been assigned, break out of the loop
    if (remainingMembers.length === 0) {
      break;
    }
  }

  // Return the revisions array
  return revisions;
};

export { assignNewRevisions };
