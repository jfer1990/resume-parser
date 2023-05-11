import { Autorenew } from '@mui/icons-material';
import { IconButton, styled } from '@mui/material';

const StyledIconButton = styled(IconButton)({
  color: 'white',
  backgroundColor: '#32CD32',
  ':hover': { backgroundColor: '#32CD32', opacity: 0.5 },
  position: 'absolute',
  right: 21,
  top: 83,
});

export const RollMembers = () => {
  return (
    <StyledIconButton size="large">
      <Autorenew />
    </StyledIconButton>
  );
};
