import { AddOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, List, Toolbar, Typography, styled } from '@mui/material';
import { useContext, useEffect } from 'react';
import { ComponentButton } from '../../common/ComponentButton';
import { ReviewerContext } from '../../context/ReviewerContext';
import { StudentItem } from './StudentItem';

const StyledDrawer = styled(Drawer)({
  display: 'block',
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
});

export const SideBar = () => {
  const { students, setStudents } = useContext(ReviewerContext);

  useEffect(() => {
    (async () => {
      // FIXME: leer el todo numero 2 de la raíz del proyecto
      const endPoint = import.meta.env.VITE_REACT_APP_REST_API + '/students/getAll';
      const response = await fetch(endPoint, { method: 'GET', headers: { 'Content-Type': 'aplication/json' } });
      const data = await response.json();
      const { students } = data;
      console.log(students);
      setStudents(students);
    })();
  }, []);

  return (
    <Box component="nav" sx={{ width: { sm: 280 }, flexShrink: { sm: 0 } }}>
      {/* FIXME: Hay que hacer esto responsive */}
      <StyledDrawer
        variant="permanent" // temporary
        open
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ReviewApp
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {students.map((student) => (
            <StudentItem key={student.id} name={student.name} email={student.email} />
          ))}
        </List>

        <ComponentButton route={'/add-student'} right={15} bottom={15}>
          <AddOutlined sx={{ fontSize: 20 }} />
        </ComponentButton>
      </StyledDrawer>
    </Box>
  );
};
