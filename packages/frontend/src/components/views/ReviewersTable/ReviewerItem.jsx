import { PersonOutline } from '@mui/icons-material';
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { RemoveIconModal } from '../../common/RemoveIconModal';
import { ReviewerContext } from '../../context/ReviewerContext';

const StyledIconBox = styled(Box)({
  position: 'relative',
  justifyContent: 'center',
  display: 'flex',
  background: '#5C5B85',
  borderRadius: 10,
  margin: 8,
  padding: 6,
  ':hover .MuiBox-root': { backgroundColor: 'red', width: '50px', transition: 'all 0.5s ease' },
  overflow: 'hidden',
});

const ReviewerItem = ({ name, email, members = [] }) => {
  const { deletedReviewer } = useContext(ReviewerContext);

  const onDelete = async () => {
    try {
      const path = import.meta.env.VITE_REACT_APP_REST_API + '/reviewers';
      const response = await fetch(path, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      // FIXME: BE-FIX Este endpoint esta mal diseñado debería devolver un 200 si todo salio bien y ya y si acaso regresar el estudiante eliminado
      const data = await response.json();
      const { reviewers } = data;
      deletedReviewer(reviewers);
    } catch (e) {
      console.log('error on submit ', e);
    }
  };
  return (
    <Grid
      item
      xs={4}
      sx={{
        minWidth: '245px',
        minHeight: '140px',
      }}
    >
      <StyledIconBox>
        <Typography color="white" variant="h6" textAlign="center">
          {name}
        </Typography>

        <RemoveIconModal name={name} onDelete={onDelete} />
      </StyledIconBox>

      <List sx={{ background: 'white', borderRadius: 3, margin: 1 }}>
        {members.map((member) => (
          <ListItem key={member.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutline sx={{ color: 'primary.main' }} />
              </ListItemIcon>

              <ListItemText primary={member.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

ReviewerItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};

ReviewerItem.defaultProps = {
  members: [],
};

export default ReviewerItem;
