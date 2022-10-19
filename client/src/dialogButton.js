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
import { updateFlights, updateHotels, updateEvents, updateFlightIcon, updateHotelIcon, updateEventIcon, updateInformation, updatePrice, clearIcon } from "./app/voteCounter";
import { useSelector, useDispatch } from 'react-redux';
import { decrement } from "./app/voteCounter";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const DialogButton = () => {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const { flightIcon, eventIcon, hotelIcon, flights, hotels, events, price, information, destination } = useSelector(state => state.counter);

  // {destination: '', flightName: '', price: '', votes: 0}

  const handleChangeFlightIcon = (e) => {
    //Invoke in each checkbox
    //handlechange for the checkboxes
    //need to add variable to the store that is a empty string for the checkboxes. if the checkbox is clicked itll change the store value to the value of the checkbox they clicked and more
    //acurately the endpoint this way we can save time from doing control flow
    // console.log('Flight checked', e.target.checked);
    dispatch(updateFlightIcon(e.target.checked));
    
  }

  const handleChangeHotelIcon = (e) => {
    // console.log('Hotel Changed: ', e.target.checked);
    dispatch(updateHotelIcon(e.target.checked));
  }

  const handleChangeEventIcon = (e)=> {
    // console.log('Event Changed: ', e.target.checked);
    dispatch(updateEventIcon(e.target.checked));
  }

  const handleChangeInformation = (e) => {
    // console.log('heyooo: ', e.target.value);
    // console.log('flightIcon: ', {flightIcon});
    // console.log('hotelIcon: ', {hotelIcon});
    // console.log('eventsIcon: ', {eventIcon});
    dispatch(updateInformation(e.target.value));
  }

  const handleChangePrice = (e) => {
    // console.log('heyooo: ', e.target.value);
    // console.log('flightIcon: ', {flightIcon});
    // console.log('hotelIcon: ', {hotelIcon});
    // console.log('eventsIcon: ', {eventIcon});
    dispatch(updatePrice(Number(e.target.value)));
  }

  const handleSubmit = async () => {
    // const { flightIcon, hotelIcon, eventIcon, destination, information, price } = useSelector((state) => state.counter);
    let endpoint = '' 
    if (flightIcon) endpoint += 'flight';
    if (hotelIcon) endpoint += 'hotel';
    if (eventIcon) endpoint += 'event';

    let description = '' 
    if (flightIcon) description += 'flightName';
    if (hotelIcon) description += 'hotelName';
    if (eventIcon) description += 'eventDetails';

    const body = {
      destination: destination,
      price: price
    };
    body[description] = information;

    console.log('BODY: ', body);
    console.log('ENDPOINT: ', endpoint);

    await fetch(`http://localhost:3000/trip/${endpoint}`), {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body)
    }

    dispatch(clearIcon());
    setOpen(false); 
  }

  
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
      <Checkbox
        {...label}
        icon={<AirplaneTicketOutlinedIcon  />}
        checkedIcon={<AirplaneTicketIcon />}
        onChange={handleChangeFlightIcon}
      />
      <Checkbox
        {...label}
        icon={<BedroomChildOutlinedIcon />} 
        checkedIcon={<BedroomChildIcon />}
        onChange={handleChangeHotelIcon}
      />
      <Checkbox
        {...label}
        icon={<LocalActivityOutlinedIcon />}
        checkedIcon={<LocalActivityIcon/>}
        onChange={handleChangeEventIcon}
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
            onChange={handleChangeInformation}
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangePrice}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function DialogButton0() {
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleChangeFlightIcon = (e) => {
    //Invoke in each checkbox
    //handlechange for the checkboxes
    //need to add variable to the store that is a empty string for the checkboxes. if the checkbox is clicked itll change the store value to the value of the checkbox they clicked and more
    //acurately the endpoint this way we can save time from doing control flow
    console.log('Flight checked', e.target.checked);
    dispatch(updateFlightIcon(e.target.checked));
    
  }
  
    
    //then for the handle click on the submit button we need to use a useselector to template literal the endpoint and then fetch post to it we 
    //also change the value back to false in the store
  


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
      <Checkbox
        {...label}
        icon={<AirplaneTicketOutlinedIcon  />}
        checkedIcon={<AirplaneTicketIcon />}
        onChange={handleChangeFlightIcon}
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
