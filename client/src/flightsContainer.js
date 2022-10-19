import React from 'react';
import { decrement, increment, updateVotes } from "./app/voteCounter";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';

import ListSubheader from '@mui/material/ListSubheader';

const FlightsContainer = (props) => {
  // const flights = [{id: 0, destination: "Germany", flightName: "Delta", price: 250, votes: 0}, {id: 1, destination: "Germany", flightName: "American Airlines", price: 350, votes: 0}];
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
          <button id={`${item.id}`} className='vote' onClick={handleDownVote}>
            &#8681;
          </button>
          <span>{item.votes}</span>
          <button id={`${item.id}`} className='vote' onClick={handleUpVote}>
            &#8679;
          </button>
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
    </Box>
  );
}

export default FlightsContainer;