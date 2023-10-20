import { Link } from "react-router-dom";
import "./navbar.css";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logo from "../../assets/Images/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };
  const handleClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className='header'>
      <div className='page-wrapper'>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>
        <div onClick={handleClick} className='mobile-menu'>
          <IconButton
            size='large'
            edge='start'
            color='#000000'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleClose}>
          <MenuItem className='cursor-pointer' onClick={handleClose}>
            Jobs
          </MenuItem>
          <Link to='/order'>
            <MenuItem className='cursor-pointer' onClick={handleClose}>
              My Coders
            </MenuItem>
          </Link>
        </Menu>
        <ul className='desktop-menu'>
          <li>
            <Link to='/jobs'>Jobs</Link>
          </li>
          <li>
            <Link to='/coders'>Coders</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
