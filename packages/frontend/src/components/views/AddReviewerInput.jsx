import { ArrowBack, SaveOutlined } from '@mui/icons-material';
import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ComponentButton } from '../common/ComponentButton';
import { ReviewerContext } from '../context/ReviewerContext';

// FIXME: Este componente es muy parecido a AddmemberInput.jsx, se puede hacer un componente reutilizable que reciba los datos que cambian por props
export const AddReviewerInput = () => {
  const { onAddReviewer } = useContext(ReviewerContext);
  const [form, setForm] = useState({ name: '', email: '' });

  const OnInputChange = ({ target: { name, value } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      if (!form.name) {
        throw new Error('El nombre no puede estar vacío');
      }
      const path = import.meta.env.VITE_REACT_APP_REST_API + '/reviewers';

      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.status === 200) {
        onAddReviewer(form);
        navigate('/');
      } else {
        throw new Error('Hubo un problema al agregar el revisor.');
      }
    } catch (e) {
      console.log('error on submit ', e);
    }
  };
  const navigate = useNavigate();
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
      <Typography fontSize={39} fontWeight="light">
        Agregar Reviewer:
      </Typography>
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

      <ComponentButton route={'/'} right={18} bottom={35}>
        <ArrowBack sx={{ fontSize: 30 }} />
      </ComponentButton>
    </Grid>
  );
};
