import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const StyledFab = (props) => {
  return (
    <Fab 
    color="primary" 
    aria-label="add"
    onClick={props.onClick}
    sx={{
      position: 'fixed',
      zIndex: 1,
      bottom: 10,
      left: 0,
      right: 0,
      margin: '0 auto',
      }}>
      <AddIcon />
    </Fab>
  )
}

export default StyledFab;