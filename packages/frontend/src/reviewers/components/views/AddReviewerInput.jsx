import { SaveOutlined } from '@mui/icons-material';
import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReviewerContext } from '../context/ReviewerContext';

// TODO: Donde están las validaciones de los datos en los inputs?
// FIXME: Como rayos salgo de aquí si entro por error y quiero regresar al home??
// FIXME: Este componente es muy parecido a AddStudentInput.jsx, se puede hacer un componente reutilizable que reciba los datos que cambian por props
export const AddReviewerInput = () => {
  // FIXME: Es inseguro settear todos los usuarios es mejor que hubiera una función solo para añadir un nuevo reviewer
  const { setReviewers } = useContext(ReviewerContext);
  const [form, setForm] = useState({ name: '', email: '' });

  const OnInputChange = ({ target: { name, value } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    // FIXME: Que estas previniendo? Que acción quieres prevenir? No hay ningún evento que prevengas
    event.preventDefault();
    try {
      // FIXME: 2 veces? preventDefault
      event.preventDefault();
      // FIXME: leer el todo numero 2 de la raíz del proyecto
      // FIXME: '/reviewers/'; por que hay un dash al final? No debería ser '/reviewers'?
      const path = import.meta.env.VITE_REACT_APP_REST_API + '/reviewers/';
      // FIXME: hay que validar los datos antes de enviarlos al backend que pasa si están vacíos o tienen mal formato como puros números o espacios?
      // FIXME: hay que validar que la llamada regrese un código 200.
      await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      // FIXME: Es inseguro settear todos los usuarios es mejor que hubiera una función solo para añadir un nuevo reviewer
      setReviewers((reviewers) => [...reviewers, form]);
      navigate('/');
    } catch (e) {
      console.log('error on submit ', e);
    }
  };
  const navigate = useNavigate();
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
      {/* FIXME: Es necesario envolverlo en este componente realmente cual es la función de Grid item? */}
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          Agregar Reviewer:
        </Typography>
      </Grid>
      {/* FIXME: Es necesario envolverlo en este componente realmente cual es la función de Grid container? */}
      <Grid container>
        <form onSubmit={onSubmit}>
          {/* FIXME: FormControl esta mal usado */}
          <FormControl fullWidth>
            <TextField
              name="name"
              type="text"
              variant="filled"
              fullWidth
              placeholder="Ingrese un nombre"
              label="nombre:"
              value={form.name}
              onChange={OnInputChange}
              sx={{ border: 'none', mb: 3, mt: 3 }}
            />
            <TextField
              name="email"
              type="text"
              variant="filled"
              fullWidth
              placeholder="Ingrese un correo"
              label="correo:"
              value={form.email}
              onChange={OnInputChange}
              sx={{ border: 'none', mb: 3 }}
            />
            <Grid item alignSelf="flex-end">
              <Button component={Link} to="/" type="submit" color="primary" onClick={onSubmit} sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
              </Button>
            </Grid>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
