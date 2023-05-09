import { AddOutlined, HourglassEmpty, MenuOpenOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, IconButton, List, Toolbar, Typography, styled, useMediaQuery } from '@mui/material';
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

  const { data, isLoading, isError } = useQuery(['data'], fetchMembers);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    if (data && data.students) {
      setMembers(data.students);
    }
  }, [data, setMembers]);

  if (isLoading) {
    return <HourglassEmpty />;
  }

  if (isError) {
    return <div>Error al cargar los datos de los estudiantes.</div>;
  }

  return (
    <Box component="nav" sx={{ width: { sm: 300 }, flexShrink: { sm: 0 } }}>
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
