import { AddOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, List, Toolbar, Typography, styled, useMediaQuery } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchMembers } from '../../../utils/fetch';
import { ComponentButton } from '../../common/ComponentButton';
import { ReviewerContext } from '../../context/ReviewerContext';
import { MemberItem } from './MemberItem';

const StyledDrawer = styled(Drawer)({
  display: 'block',
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
});

export const SideBar = () => {
  // @ts-ignore
  const { members, setMembers, open, setOpen } = useContext(ReviewerContext);

  const { data, status } = useQuery(['students'], fetchMembers);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    if (data && data.students) {
      setMembers(data.students);
    }
  }, [data, setMembers]);

  if (status === 'loading') {
    return <div>Cargando los datos de los estudiantes.</div>;
  }

  if (status === 'error') {
    return <div>Error al cargar los datos de los estudiantes.</div>;
  }

  return (
    <Box component="nav" sx={{ width: { sm: 300 }, flexShrink: { sm: 0 } }} onClick={() => setOpen(false)}>
      <StyledDrawer variant={isSmallScreen ? 'temporary' : 'permanent'} open={!isSmallScreen || open}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ReviewApp
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {members.map((member) => (
            <MemberItem key={member.id} name={member.name} email={member.email} />
          ))}
        </List>

        <ComponentButton route={'/add-member'} right={15} bottom={15}>
          <AddOutlined sx={{ fontSize: 20 }} />
        </ComponentButton>
      </StyledDrawer>
    </Box>
  );
};
