import { Autorenew } from '@mui/icons-material';
import { IconButton, styled } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { rollMembers } from '../../../utils/fetch';

const StyledIconButton = styled(IconButton)({
  color: 'white',
  backgroundColor: '#32CD32',
  ':hover': { backgroundColor: '#32CD32', opacity: 0.5 },
  position: 'absolute',
  right: 21,
  top: 83,
});

export const RollMembers = () => {
  const queryClient = useQueryClient();
  const { status, mutate } = useMutation(rollMembers, {
    onSuccess: () => {
      queryClient.invalidateQueries(['reviewers']);
    },
  });
  const onDelete = async () => {
    try {
      if (status === 'loading') {
        return <div>Cargando los datos de los reviewers.</div>;
      }

      if (status === 'error') {
        return <div>Error al cargar los datos de los reviewers</div>;
      }
      mutate();

      // FIXME: solo se debería eliminar el usuario que se elimino del array de estudiante del contexto
    } catch (e) {
      console.log('error on submit ', e);
    }
  };
  return (
    <StyledIconButton onClick={onDelete} size="large">
      <Autorenew />
    </StyledIconButton>
  );
};
