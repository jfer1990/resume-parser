import { PersonOutline } from '@mui/icons-material';
import { Grid, ListItem, ListItemIcon, ListItemText, styled } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { RemoveIconModal } from '../../common/RemoveIconModal';
import { ReviewerContext } from '../../context/ReviewerContext';

const StyledListItem = styled(ListItem)({
  overflow: 'hidden',
  ':hover .MuiBox-root': {
    backgroundColor: 'red',
    width: '50px',
    transition: 'all 0.5s ease',
  },
});

const MemberItem = ({ name, email }) => {
  const { deletedMember } = useContext(ReviewerContext);

  const onDelete = async () => {
    try {
      const path = import.meta.env.VITE_REACT_APP_REST_API + '/students'; //cambiar por member
      const response = await fetch(path, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      // FIXME: BE-FIX Este endpoint esta mal diseñado debería devolver un 200 si todo salio bien y ya y si acaso regresar el estudiante eliminado
      const data = await response.json();
      const { name } = data;

      if (response.status === 200) {
        deletedMember(name);
      } else {
        throw new Error(`Hubo un problema al agregar el member`);
      }
      // FIXME: solo se debería eliminar el usuario que se elimino del array de estudiante del contexto
    } catch (e) {
      console.log('error on submit ', e);
    }
  };

  return (
    <StyledListItem key={name} disablePadding>
      {/* TODO: Debería haber una ventana modal que te pregunte si estas seguro de eliminar al estudiante ya que no queremos eliminar estudiantes por error esta acción no debería ser fácil*/}
      <ListItemIcon sx={{ minWidth: '37px', margin: '12px' }}>
        <PersonOutline />
      </ListItemIcon>

      <RemoveIconModal name={name} onDelete={onDelete} />
      <Grid container>
        <ListItemText primary={name} />
      </Grid>
    </StyledListItem>
  );
};

MemberItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export { MemberItem };
