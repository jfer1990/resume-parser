import { AddOutlined, Autorenew } from '@mui/icons-material';
import { Box, Grid, IconButton, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { ComponentButton } from '../../common/ComponentButton';
import ReviewerItem from './ReviewerItem';

const StyledBox = styled(Box)({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  minHeight: 'calc(100vh - 110px)',
  backgroundColor: '#262254',
  borderRadius: 15,
});
const StyledIconButton = styled(IconButton)({
  color: 'white',
  backgroundColor: '#32CD32',
  ':hover': { backgroundColor: '#32CD32', opacity: 0.5 },
  position: 'absolute',
  right: 37,
  top: 100,
});
const StyledGrid = styled(Grid)({
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 250px))',
  margin: '40px',
  overflow: 'hidden',
});

export const ReviewersTable = () => {
  const [reviewItems, setReviewItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const assignmentsPath = import.meta.env.VITE_REACT_APP_REST_API + '/reviewers/getTodayAssignation';
        const response = await fetch(assignmentsPath);
        const { assignments } = await response.json();
        const reviewers = assignments
          .map((assignment) => ({
            id: assignment.reviewer.id,
            name: assignment.reviewer.name,
            email: assignment.reviewer.email,
            members: assignment.reviewer.assigned_students,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
        setReviewItems(reviewers);
      } catch (e) {
        console.log('error', e);
      }
    })();
  }, []);

  return (
    <StyledBox>
      <StyledGrid container>
        {reviewItems.map((reviewer) => (
          <ReviewerItem key={reviewer.id} name={reviewer.name} email={reviewer.email} members={reviewer.members} />
        ))}

        <ComponentButton route={'/add-reviewer'} right={50} bottom={40}>
          <AddOutlined sx={{ fontSize: 30 }} />
        </ComponentButton>
        <StyledIconButton size="large">
          <Autorenew />
        </StyledIconButton>
      </StyledGrid>
    </StyledBox>
  );
};
