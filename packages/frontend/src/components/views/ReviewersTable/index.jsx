import { AddOutlined } from '@mui/icons-material';
import { Box, Grid, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { ComponentButton } from '../../common/ComponentButton';
import ReviewerItem from './ReviewerItem';
import { RollMembers } from './RollMembers';

const StyledBox = styled(Box)({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  minHeight: 'calc(100vh - 110px)',
  backgroundColor: '#262254',
  borderRadius: 15,
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
            members: assignment.reviewer.assigned_students, //cambiar por members
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

        <ComponentButton route={'/add-reviewer'} right={20} bottom={37}>
          <AddOutlined sx={{ fontSize: 30 }} />
        </ComponentButton>
        <RollMembers />
      </StyledGrid>
    </StyledBox>
  );
};
