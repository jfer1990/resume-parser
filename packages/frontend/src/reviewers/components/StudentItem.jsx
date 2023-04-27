import { PersonOutline } from '@mui/icons-material';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ReviewerContext } from './context/ReviewerContext';

// FIXME: Este componente debería estar en la carpeta de layout dentro la carpeta de sidebar
// FIXME: Ver el TODO numero 3 de la raíz del proyecto
// FIXME: No debería ser necesario settear el studentEmail = '' ya que es seguro que el componente padre le va a pasar un email del BE aun asi es innecesario mostrar el email del miembro
const StudentItem = ({ student, studentEmail = '' }) => {
  // FIXME: Es inseguro settear todos los usuarios es mejor que hubiera una función solo para añadir un nuevo estudiante
  const { setStudents } = useContext(ReviewerContext);

  const onDelete = async (event) => {
    try {
      // FIXME: Que estas previniendo? Que acción quieres prevenir? No hay ningún evento que prevengas
      event.preventDefault();

      // FIXME: leer el todo numero 2 de la raíz del proyecto
      // FIXME: '/students/'; por que hay un dash al final? No debería ser '/students'?
      const path = import.meta.env.VITE_REACT_APP_REST_API + '/students/';
      const response = await fetch(path, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: studentEmail }),
      });
      // FIXME: BE-FIX Este endpoint esta mal diseñado debería devolver un 200 si todo salio bien y ya y si acaso regresar el estudiante eliminado
      const data = await response.json();
      const { candidates } = data;
      // FIXME: Es inseguro settear todos los usuarios es mejor que hubiera una función solo para añadir un nuevo estudiante
      // FIXME: solo se debería eliminar el usuario que se elimino del array de estudiante del contexto
      setStudents(candidates);
    } catch (e) {
      console.log('error on submit ', e);
    }
  };
  return (
    // FIXME: Es innecesario el fragmento <> </> ya que el componente ListItem ya es un fragmento
    <>
      <ListItem key={student} disablePadding>
        {/* FIXME: Por que si le das click a todo el elemento eliminas al estudiante esto es una acción sumamente peligrosa */}
        {/* TODO: Debería haber una ventana modal que te pregunte si estas seguro de eliminar al estudiante ya que no queremos eliminar estudiantes por error esta acción no debería ser fácil*/}
        <ListItemButton onClick={onDelete}>
          <ListItemIcon>
            <PersonOutline />
            {/* FIXME: Hay que priorizar tratar de usar styled components en vez de usar sx. Si son mas de 3 propiedades de sx que se usan o se usan selectores complejos*/}
            {/* FIXME: Este botón es sumamente feo y deforme deberíamos hacer que aparezca de la derecha si el usuario deja presionado el ListItem y con estilos mas bonitos*/}
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
            {/* FIXME: Es innecesario mostrar el email del estudiante */}
            <ListItemText secondary={studentEmail} />
          </Grid>
        </ListItemButton>
      </ListItem>
    </>
  );
};

StudentItem.propTypes = {
  student: PropTypes.string.isRequired,
  // FIXME: Es innecesario mostrar el email del estudiante
  studentEmail: PropTypes.string.isRequired,
};

export { StudentItem };
