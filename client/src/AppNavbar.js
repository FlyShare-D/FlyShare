import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';

const settings = ['Profile', 'Account', 'Logout'];

const ResponsiveAppBar = () => {

  const handleOpenUserMenu = (event) => {
    // setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    // setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ width: 40, height: 40 }} />
          <img alt="logo" src="../assets/flyshare2.png" style={{ height: 60 }} />
          <Box sx={{ }}>
            {/* <Tooltip title="Logout"> */}
              
              <Button variant="contained" disableElevation>
                <LogoutIcon />
              </Button>
              {/* <Button variant="outlined">
                <LogoutIcon />
              </Button> */}
            {/* </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              // anchorEl={anchorElUser}
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
