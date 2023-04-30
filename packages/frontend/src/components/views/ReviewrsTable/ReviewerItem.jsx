import { PersonOutline } from '@mui/icons-material';
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { RemoveIconModal } from '../../common/RemoveIconModal';
import { ReviewerContext } from '../../context/ReviewerContext';

// FIXME: Este componente no es responsivo, debería de ser responsivo

const StyledIconBox = styled(Box)({
  position: 'relative',
  justifyContent: 'center',
  display: 'flex',
  background: '#5C5B85',
  borderRadius: 10,
  margin: 8,
  padding: 6,
});
const StyledModalBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',

  padding: 30,
  borderRadius: '8px',
  maxWidth: 400,
  minWidth: 300,
  textAlign: 'center',
});
const ReviewerItem = ({ name, email, members = [] }) => {
  const { onDeletedReviewer } = useContext(ReviewerContext);
  const [open, setOpen] = useState(false);
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
      onDeletedReviewer(reviewers);
    } catch (e) {
      console.log('error on submit ', e);
    }
  };
  return (
    <Grid
      item
      xs={4}
      sx={{
        minHeight: '300px',
      }}
    >
      <StyledIconBox>
        <Typography color="white" variant="h6" textAlign="center">
          {name}
        </Typography>
        {/* FIXME: arreglar botton */}
        <RemoveIconModal name={name} onDelete={onDelete} left={420} top={11} />
      </StyledIconBox>

      <List sx={{ background: 'white', borderRadius: 3, margin: 1 }}>
        {members.map((member) => (
          <ListItem key={member.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutline sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <Grid container>
                <ListItemText primary={member.name} />
              </Grid>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

ReviewerItem.propTypes = {
  name: PropTypes.string.isRequired,
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
