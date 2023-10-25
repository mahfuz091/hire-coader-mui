/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const Address = () => {
  return (
    <div className='skill-mx-auto'>
      <div className='skill-container'>
        <h2 className='skill-title'>Address</h2>

        <form className='form-skill' action=''>
          <div className='form-group '>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label '>Country</InputLabel>
              <Select
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#14A800",
                    },
                  },
                }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='Country'
              >
                <MenuItem value={10}></MenuItem>
                <MenuItem value={20}></MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='form-group '>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label '>State</InputLabel>
              <Select
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#14A800",
                    },
                  },
                }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='State'
              >
                <MenuItem value={10}></MenuItem>
                <MenuItem value={20}></MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='form-group'>
            <TextField
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#14A800",
                  },
                },
              }}
              id='outlined-basic'
              label='City'
              variant='outlined'
              placeholder=''
            />
          </div>

          <div className='form-group'>
            <TextField
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#14A800",
                  },
                },
              }}
              id='outlined-basic'
              label='Zip Code'
              variant='outlined'
              placeholder=''
            />
          </div>
          <div className='form-group'>
            <TextField
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#14A800",
                  },
                },
              }}
              id='outlined-basic'
              label='Address Line 1'
              variant='outlined'
              placeholder=''
            />
          </div>
          <div className='form-group'>
            <TextField
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#14A800",
                  },
                },
              }}
              id='outlined-basic'
              label='Address Line 2'
              variant='outlined'
              placeholder=''
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
