import { PersonOutline } from '@mui/icons-material';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ReviewerContext } from './context/Reviewercontext';

const StudentItem = ({ student, studentEmail = '' }) => {
  const { setStudents } = useContext(ReviewerContext);

  const onDelete = async (event) => {
    try {
      event.preventDefault();

      const path = import.meta.env.VITE_REACT_APP_REST_API + '/students/';
      const response = await fetch(path, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: studentEmail }),
      });
      const data = await response.json();
      const { candidates } = data;
      // console.log(candidates);
      setStudents(candidates);
    } catch (e) {
      console.log('error on submit ', e);
    }
  };
  return (
    <>
      <ListItem key={student} disablePadding>
        <ListItemButton onClick={onDelete}>
          <ListItemIcon>
            <PersonOutline />
            <RemoveIcon
              sx={{
                color: 'white',
                position: 'absolute',
                opacity: '0',

                '&:hover': {
                  opacity: '100%',
                  backgroundColor: 'red', // Color de fondo en hover
                  width: '30px',
                  borderRadius: '50%',
                  transform: 'scale(1.5)',

                  // height: '300px'
                },
              }}
            />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={student} />
            <ListItemText secondary={studentEmail} />
          </Grid>
        </ListItemButton>
      </ListItem>
    </>
  );
};

StudentItem.propTypes = {
  student: PropTypes.string.isRequired,
  studentEmail: PropTypes.string.isRequired,
};

export { StudentItem };
