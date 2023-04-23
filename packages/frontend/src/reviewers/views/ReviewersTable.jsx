import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { ReviewerItem } from '../components/ReviewerItem';

export const ReviewersTable = () => {
  const [reviewItems, setReviewItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const assignmentsPath = 'http://localhost:8080' + '/api/reviewers/getTodayCandidates';
        const response = await fetch(assignmentsPath);
        const { assignments } = await response.json();
        console.log('assignments', assignments);
        setReviewItems((prev) => [
          ...assignments.map((assignment) => ({
            name: assignment.reviewer.name,
            members: assignment.reviewer.assigned_candidates,
          })),
        ]); // change for students
      } catch (e) {
        console.log('error', e);
      }
    })();
  }, []);
  return (
    <Box
      display="flex"
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 3,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns="repeat(auto-fit, minmax(160px, 250px))"
        // grid-template-columns repeat(auto-fit, minmax(160px, 250px));
        sx={{
          // backgroundColor: "white",
          borderRadius: 3,
          margin: '40px',
          overflow: 'hidden',
        }}
      >
        {reviewItems.map((reviewer) => (
          <ReviewerItem key={JSON.stringify(reviewer)} reviewer={reviewer.name} members={reviewer.members} />
        ))}
      </Grid>
    </Box>
  );
};
