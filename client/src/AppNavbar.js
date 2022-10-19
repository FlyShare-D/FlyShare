import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';

const settings = ['Profile', 'Account', 'Logout'];

const ResponsiveAppBar = () => {

  const { isLoggedIn } = useSelector((state) => state.counter);

  const handleOpenUserMenu = (event) => {
    // setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    // setAnchorElUser(null);
  };

  const handleLogout = () => {
    sessionStorage.clear();
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ width: 40, height: 40 }} />
          <img alt="logo" src="../assets/flyshareicon.png" style={{ height: 60 }} />
          <Box sx={{ }}>
              <Button variant="contained" disableElevation onClick={handleLogout}>
                {isLoggedIn && <LogoutIcon />}
              </Button>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
