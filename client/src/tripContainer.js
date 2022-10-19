import React from 'react';
import { updateVotes } from "./app/voteCounter";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';

import ListSubheader from '@mui/material/ListSubheader';

const TripContainer = (props) => {
  const { category } = props
  const listItems = [];
  const { flights, hotels, events } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleUpVote = (e) => {
    // upvoting needs to trigger two actions:
    // 1) a post request to the database to update the vote count
    // 2) update state of the slice
    const payload = {
      category: category,
      id: e.target.id,
      voteIncrement: 1,
    }
    dispatch(updateVotes(payload));
  }

  const handleDownVote = (e) => {
    // upvoting needs to trigger two actions:
    // 1) a post request to the database to update the vote count
    // 2) update state of the slice
    const payload = {
      category: category,
      id: e.target.id,
      voteIncrement: -1,
    }
    dispatch(updateVotes(payload));
  }

  let items;
  if (category === 'flight') items = flights;
  if (category === 'hotel') items = hotels;
  if (category === 'event') items = events;
  
  for (const item of items) {
    listItems.push(
      <ListItem sx={{justifyContent: 'center'}}>
        <ListItemText primary={item.flightName} />
        <Stack direction="row" spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
          <span>${new Intl.NumberFormat().format(item.price)}</span>
          <Button 
            sx={{backgroundColor: 'white', p: 0.5, border: 'none' }}
            id={`${item.id}`} className='vote' onClick={handleDownVote}>
            &#8681;
          </Button>
          <span>{item.votes}</span>
          <Button id={`${item.id}`} className='vote' onClick={handleUpVote}>
            &#8679;
          </Button>
      </Stack>
      </ListItem>
    )
  }
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              {`${category[0].toUpperCase()}${category.slice(1)}s`}
            </ListSubheader>
          }
        >
          {listItems}
        </List>
      </nav>
      <Divider/>
    </Box>
  );
}

export default TripContainer;