import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';
function hotelsContainer() {
  const hotels = [
    { id: 0, destination: 'Germany', hotelName: 'Hilton', price: 250, votes: 0 },
    { id: 1, destination: 'Germany', hotelName: 'Merriott', price: 350, votes: 0 },
  ];
  const listItems = [];
  const dispatch = useDispatch();

  const handleUpVote = (e) => {
    const target = e.target.id;
    const votes = hotels[target].votes;
    // 2) update state of the slice
    if (votes <= hotels.length - 1) {
      hotels[target].votes += 1;
    }
    console.log('Upvoted', hotels[target].votes);
    // a post request to the database to update the vote count
  };

  const handleDownVote = (e) => {
    // upvoting needs to trigger two actions:

    console.log('Downvoted', e.target.id);
    const target = e.target.id;
    const votes = hotels[target].votes;
    if (votes >= hotels.length - 1) hotels[target].votes -= 1;
    console.log('Upvoted', hotels[target].votes);
  };
  for (const hotel of hotels) {
    listItems.push(
      <ListItem sx={{ justifyContent: 'center' }} key={hotel}>
        <ListItemText primary={hotel.hotelName} />
        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
          <span>{hotel.price}</span>
          <Button id={`${hotel.id}`} className="vote" onClick={handleUpVote}>
            &#8679;
          </Button>
          <span>{hotel.votes}</span>
          <Button id={`${hotel.id}`} className="vote" onClick={handleDownVote}>
            &#8681;
          </Button>
        </Stack>
      </ListItem>
    );
  }
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>{listItems}</List>
      </nav>
    </Box>
  );
}

export default hotelsContainer;
