import { PersonOutline } from '@mui/icons-material';
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// FIXME: Este componente debería estar dentro de una carpeta llamada ReviewersTable dentro de components
// FIXME: Este componente no es responsivo, debería de ser responsivo
const ReviewerItem = ({ name, members = [] }) => {
  return (
    <Grid
      item
      xs={4}
      sx={{
        // borderRight: "1px solid black",
        minHeight: '300px',
      }}
    >
      {/*  FIXME: Hay que priorizar tratar de usar styled components en vez de usar sx. Si son mas de 3 propiedades de sx que
      se usan o se usan selectores complejos */}
      <Box sx={{ background: '#5C5B85', borderRadius: 3, margin: 1, padding: 1 }}>
        <Typography color="white" variant="h6" textAlign="center">
          {name}
        </Typography>
      </Box>
      {/* <Divider /> */}
      <List sx={{ background: 'white', borderRadius: 3, margin: 1 }}>
        {members.map((member) => (
          // FIXME: key={JSON.stringify(member)} es una mala práctica, no se debe usar JSON.stringify en el key de un componente Member ya tiene un id que le regresa el BE
          <ListItem key={JSON.stringify(member)} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutline sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <Grid container>
                {/* FIXME: por que tanto margin no entiendo */}
                <ListItemText sx={{ marginLeft: 14 }} primary={member.name} />
              </Grid>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

ReviewerItem.propTypes = {
  name: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};

ReviewerItem.defaultProps = {
  members: [],
};

export default ReviewerItem;
