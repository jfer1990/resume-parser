import { AddOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, IconButton, List, Toolbar, Typography } from '@mui/material';

import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StudentItem } from './StudentItem';
import { ReviewerContext } from './context/Reviewercontext';

export const SideBar = () => {
  const { drawerWidth, students, setStudents } = useContext(ReviewerContext);
  useEffect(() => {
    (async () => {
      const endPoint = import.meta.env.VITE_REACT_APP_REST_API + '/students/getAll';
      const response = await fetch(endPoint, { method: 'GET', headers: { 'Content-Type': 'aplication/json' } });
      const data = await response.json();
      const { students } = data;
      setStudents(students);
    })();
  }, []);

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent" // temporary
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ReviewApp
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {students.map((student) => (
            <StudentItem key={JSON.stringify(student)} student={student.name} studentEmail={student.email} />
          ))}
        </List>
        <IconButton
          component={Link}
          to="/add-student"
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'absolute',
            right: 20,
            bottom: 10,
          }}
        >
          <AddOutlined sx={{ fontSize: 20 }} />
        </IconButton>
      </Drawer>
    </Box>
  );
};
