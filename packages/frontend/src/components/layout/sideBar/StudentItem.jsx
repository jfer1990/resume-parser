import { PersonOutline } from '@mui/icons-material';
import { Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { RemoveIconModal } from '../../common/RemoveIconModal';
import { ReviewerContext } from '../../context/ReviewerContext';

const StudentItem = ({ name, email }) => {
  // FIXME: Es inseguro settear todos los usuarios es mejor que hubiera una función solo para añadir un nuevo estudiante
  const { onDeletedStudent } = useContext(ReviewerContext);

  const onDelete = async () => {
    try {
      const path = import.meta.env.VITE_REACT_APP_REST_API + '/students';
      const response = await fetch(path, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      // FIXME: BE-FIX Este endpoint esta mal diseñado debería devolver un 200 si todo salio bien y ya y si acaso regresar el estudiante eliminado
      const data = await response.json();
      const { candidates } = data;

      // FIXME: solo se debería eliminar el usuario que se elimino del array de estudiante del contexto
      onDeletedStudent(candidates);
    } catch (e) {
      console.log('error on submit ', e);
    }
  };

  return (
    <ListItem key={name} disablePadding>
      {/* TODO: Debería haber una ventana modal que te pregunte si estas seguro de eliminar al estudiante ya que no queremos eliminar estudiantes por error esta acción no debería ser fácil*/}
      <ListItemIcon sx={{ margin: 2 }}>
        <PersonOutline />
      </ListItemIcon>
      {/* FIXME: arreglar botton */}
      <RemoveIconModal name={name} onDelete={onDelete} left={230} top={17} />
      <Grid container>
        <ListItemText primary={name} />

        {/* <ListItemText secondary={email} /> */}
      </Grid>
    </ListItem>
  );
};

StudentItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export { StudentItem };
