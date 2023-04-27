import { SaveOutlined } from '@mui/icons-material';
import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewerContext } from '../components/context/ReviewerContext';

// FIXME: Como rayos salgo de aquí si entro por error y quiero regresar al home??
// FIXME: Este componente es muy parecido a AddReviewerInput.jsx, se puede hacer un componente reutilizable que reciba los datos que cambian por props
// FIXME: No quiero repetir las anotaciones en este componente, pero son las mismas que en AddReviewerInput.jsx por eso no las pongo, hay que refactorizar ambos ya que tienen el mismo problema y contenido
export const AddStudentInput = () => {
  const { setStudents } = useContext(ReviewerContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  const OnInputChange = ({ target: { name, value } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const path = import.meta.env.VITE_REACT_APP_REST_API + '/students/';
      await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      setStudents((students) => [...students, form]);
      navigate('/');
    } catch (e) {
      console.log('error on submit ', e);
    }
  };
  const navigate = useNavigate();
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          Agregar un Estudiante:
        </Typography>
      </Grid>

      <Grid container>
        <form onSubmit={onSubmit}>
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
              <Button type="submit" color="primary" onClick={onSubmit} sx={{ padding: 2 }}>
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
