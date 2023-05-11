import { AddOutlined } from '@mui/icons-material';
import { Box, Grid, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchReviewers } from '../../../utils/fetch';
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

  const { data, status } = useQuery(['reviewers'], fetchReviewers);

  useEffect(() => {
    if (data && data.revisions) {
      const reviewers = data.revisions
        .map(({ reviewer, members }) => ({
          id: reviewer.id,
          name: reviewer.name,
          email: reviewer.email,
          members: members,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
      setReviewItems(reviewers);
    }
  }, [data]);

  if (status === 'loading') {
    return <div className="loader">Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error al cargar los datos de los reviewers</div>;
  }

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
