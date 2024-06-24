import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Collapse,
} from '@mui/material';
import {
  Dashboard,
  Timeline,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      subheader={
        <ListSubheader
          sx={{ bgcolor: 'inherit', color: '#DFDFDF' }}
          component="div"
          id="nested-list-subheader"
        >
          Menu
        </ListSubheader>
      }
      sx={{ width: '100%', height: '100%', bgcolor: '#2D1B6B' }}
      disablePadding
    >
      <ListItemButton onClick={() => navigate('/')} sx={{ ':hover': {} }}>
        <ListItemIcon>
          <Dashboard sx={{ color: 'white' }} fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary="Dhasboard"
          primaryTypographyProps={{
            fontSize: '0.9em',
            fontFamily: 'Poppins',
            color: 'white',
          }}
        />
      </ListItemButton>

      <ListItemButton onClick={handleClick} sx={{ ':hover': {} }}>
        <ListItemIcon>
          <Timeline sx={{ color: 'white' }} fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary="History"
          primaryTypographyProps={{
            fontSize: '0.9em',
            fontFamily: 'Poppins',
            color: 'white',
          }}
        />
        {open ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/history/senduro')} sx={{ pl: 4, ':hover': {} }}>
            <ListItemText
              primary="Senduro"
              primaryTypographyProps={{
                fontSize: '0.9em',
                fontFamily: 'Poppins',
                color: 'white',
              }}
            />
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/history/pasirian')} sx={{ pl: 4, ':hover': {} }}>
            <ListItemText
              primary="Pasirian"
              primaryTypographyProps={{
                fontSize: '0.9em',
                fontFamily: 'Poppins',
                color: 'white',
              }}
            />
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/history/lumajang')} sx={{ pl: 4, ':hover': {} }}>
            <ListItemText
              primary="Lumajang"
              primaryTypographyProps={{
                fontSize: '0.9em',
                fontFamily: 'Poppins',
                color: 'white',
              }}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

Sidebar.propTypes = {
  handleChangeAdminPageId: PropTypes.func,
};

export default Sidebar;
