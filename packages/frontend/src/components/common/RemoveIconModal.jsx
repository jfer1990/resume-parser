import styled from '@emotion/styled';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Button, Modal, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const RemoveIconModal = ({ name, onDelete, left, top }) => {
  const [open, setOpen] = useState(false);
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
  return (
    <div>
      <RemoveIcon
        cursor="pointer"
        onClick={() => setOpen(true)}
        sx={{
          color: 'white',
          position: 'absolute',
          opacity: '0',
          left: { left },
          top: { top },
          '&:hover': {
            opacity: '100%',
            backgroundColor: 'red', // Color de fondo en hover
            width: '25px',
            borderRadius: '50%',
            transform: 'scale(1.2)',
          },
        }}
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <StyledModalBox>
          <Typography variant="h6" gutterBottom>
            ¿Estás seguro de eliminar a {name}?
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Esta acción no se puede deshacer.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button variant="contained" onClick={onDelete} sx={{ mr: 2 }}>
              Eliminar
            </Button>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
          </Box>
        </StyledModalBox>
      </Modal>
    </div>
  );
};

RemoveIconModal.propTypes = {
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
};
