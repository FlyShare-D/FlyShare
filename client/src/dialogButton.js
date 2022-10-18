import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function DialogButton() {
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='dialog'>
      <Button variant="outlined" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <div>
      <Checkbox {...label} icon={<AirplaneTicketOutlinedIcon />} checkedIcon={<AirplaneTicketIcon />} />
      <Checkbox
        {...label}
        icon={<BedroomChildOutlinedIcon />}
        checkedIcon={<BedroomChildIcon />}
      />
            <Checkbox
        {...label}
        icon={<LocalActivityOutlinedIcon />}
        checkedIcon={<LocalActivityIcon/>}
      />
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Information"
            type="text"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default DialogButton;
