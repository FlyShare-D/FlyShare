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
import { updateFlights, updateHotels, updateEvents, updateFlightIcon, updateHotelIcon, updateventIcon } from "./app/voteCounter";
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
  // const { flightIcon, eventIcon, hotelIcon, flights, hotels, events } = useSelector(state => state.counter);

  // {destination: '', flightName: '', price: '', votes: 0}

  const handleChangeFlightIcon = (e) => {
    //Invoke in each checkbox
    //handlechange for the checkboxes
    //need to add variable to the store that is a empty string for the checkboxes. if the checkbox is clicked itll change the store value to the value of the checkbox they clicked and more
    //acurately the endpoint this way we can save time from doing control flow
    console.log('Flight checked', e.target.checked);
    dispatch(updateFlightIcon(e.target.checked));
    
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
      {/* <Checkbox {...label} icon={<AirplaneTicketOutlinedIcon onClick={handleChangeIcon} />} checkedIcon={<AirplaneTicketIcon />} /> */}
      <Checkbox
        {...label}
        icon={<AirplaneTicketOutlinedIcon  />}
        checkedIcon={<AirplaneTicketIcon />}
        onChange={handleChangeFlightIcon}
      />
      {/* <Checkbox
        {...label}
        icon={<BedroomChildOutlinedIcon 
        onClick={handleChangeFlightIcon}/>}
        checkedIcon={<BedroomChildIcon />}
      />
            <Checkbox
        {...label}
        icon={<LocalActivityOutlinedIcon 
        onClick={handleChangeIcon}/>}
        checkedIcon={<LocalActivityIcon/>}
      /> */}
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

function DialogButton0() {
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  // const { flightIcon, eventIcon, hotelIcon, flights, hotels, events } = useSelector(state => state.counter);

  // {destination: '', flightName: '', price: '', votes: 0}

  const handleChangeFlightIcon = (e) => {
    //Invoke in each checkbox
    //handlechange for the checkboxes
    //need to add variable to the store that is a empty string for the checkboxes. if the checkbox is clicked itll change the store value to the value of the checkbox they clicked and more
    //acurately the endpoint this way we can save time from doing control flow
    console.log('Flight checked', e.target.checked);
    dispatch(updateFlightIcon(e.target.checked));
    
  }
  
  // const handleChangeEventIcon = (e) => {
  //   dispatch(updateEventIcon(e.checked))
  // }

  // const handleChangeHotelIcon = (e) => {
  //   dispatch(updateHotelIcon(e.checked))
  // }

  // const handlechangeInfo = (e) => {
  //   //updates the store when they update the textfield with the information
  //   //control flow depending on the use selector of the depends on the icon
  //   if({flightIcon}) {
  //     dispatch(updateFlights({destination: '', flightsName: e.target.value, price: '', votes: 0}));
  //   } else if({hotelIcon}) {
  //     dispatch(updateHotels({destination: '', hotelName: e.target.value, price: '', votes: 0}));
  //   } else if(eventIcon) {
  //     dispatch(updateEvents({destination: '', eventDetails: e.target.value, price: '', votes: 0}))
  //   } return;

  // }

  // const handleChangePrice = (e) => {
  //   //updates the store when they update the textfield with the price
  //   //control flow depending on the use selector on which icon they chose 
  //   if({flightIcon}) {
  //     dispatch(updateFlights({destination: '', flightsName: '', price: e.target.value, votes: 0}));
  //   } else if({hotelIcon}) {
  //     dispatch(updateHotels({destination: '', hotelName: '', price: e.target.value, votes: 0}));
  //   } else if(eventIcon) {
  //     dispatch(updateEvents({destination: '', eventDetails: '', price: e.target.value, votes: 0}));
  //   } return;

  // }

  // const handleSubmit = async () => {
  //   //also need to update the store with the action likely using a array to represent the fields for hotel, flight, and poi

  //   //when we create the fetch request post to the router in the back we are grabbing the relevent body information
  //   //via the useselector hook this is inside the handle click on submission of the final form 
  //    if({flightIcon}) {
  //     await fetch('http://localhost:3000/trip/flight'), {
  //       method: 'POST', 
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify({
  //         destination: {flights[flights.length - 1][destination]},
  //         flightsName: {flights[flights.length -1][flightsName]},
  //         price: {flights[flights.lengnth - 1][price]},
  //         votes: {flights[flights.length - 1][votes]}
  //       })
  //     }
  //     dispatch(updateFlightIcon(false));
  //   } else if({hotelIcon}) {
  //     await fetch('http://localhost:3000/trip/hotel'), {
  //       method: 'POST', 
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify({
  //         destination: {hotels[hotels.length - 1][destination]},
  //         flightsName: {hotels[hotels.length -1][flightsName]},
  //         price: {hotels[hotels.lengnth - 1][price]},
  //         votes: {hotels[hotels.length - 1][votes]}
  //       })
  //       dispatch(updateHotelIcon(false));
  //     } else if({eventIcon}) {
  //     await fetch('http://localhost:3000/trip/event'), {
  //       method: 'POST', 
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify({
  //         destination: {events[events.length - 1][destination]},
  //         flightsName: {event[events.length -1][flightsName]},
  //         price: {events[events.lengnth - 1][price]},
  //         votes: {events[events.length - 1][votes]}
  //       })
  //       dispatch(updateEventIcon(false));
  //     } return;
  //   }
  
    
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
      {/* <Checkbox {...label} icon={<AirplaneTicketOutlinedIcon onClick={handleChangeIcon} />} checkedIcon={<AirplaneTicketIcon />} /> */}
      <Checkbox
        {...label}
        icon={<AirplaneTicketOutlinedIcon  />}
        checkedIcon={<AirplaneTicketIcon />}
        onChange={handleChangeFlightIcon}
      />
      {/* <Checkbox
        {...label}
        icon={<BedroomChildOutlinedIcon 
        onClick={handleChangeFlightIcon}/>}
        checkedIcon={<BedroomChildIcon />}
      />
            <Checkbox
        {...label}
        icon={<LocalActivityOutlinedIcon 
        onClick={handleChangeIcon}/>}
        checkedIcon={<LocalActivityIcon/>}
      /> */}
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
