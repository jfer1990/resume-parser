import { AddOutlined, MenuOpenOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, IconButton, List, Toolbar, Typography, styled, useMediaQuery } from '@mui/material';
import { useContext, useEffect } from 'react';
import { ComponentButton } from '../../common/ComponentButton';
import { ReviewerContext } from '../../context/ReviewerContext';
import { MemberItem } from './MemberItem';

const StyledDrawer = styled(Drawer)({
  display: 'block',
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
});

export const SideBar = () => {
  const { members, setMembers, open, setOpen } = useContext(ReviewerContext);

  // @ts-ignore
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    (async () => {
      // FIXME: leer el todo numero 2 de la raíz del proyecto
      const endPoint = import.meta.env.VITE_REACT_APP_REST_API + '/students/getAll'; //cambiar por members
      const response = await fetch(endPoint, { method: 'GET', headers: { 'Content-Type': 'aplication/json' } });
      const data = await response.json();
      const { students } = data;

      setMembers(students);
    })();
  }, []);

  return (
    <Box component="nav" sx={{ width: { sm: 280 }, flexShrink: { sm: 0 } }}>
      <StyledDrawer variant={isSmallScreen ? 'temporary' : 'permanent'} open={!isSmallScreen || open}>
        <Toolbar>
          {isSmallScreen && (
            <IconButton onClick={() => setOpen(false)}>
              <MenuOpenOutlined />
            </IconButton>
          )}
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

        {isSmallScreen && (
          <ComponentButton route={'/add-member'} right={15} bottom={15}>
            <AddOutlined sx={{ fontSize: 20 }} />
          </ComponentButton>
        )}
      </StyledDrawer>
    </Box>
  );
};
