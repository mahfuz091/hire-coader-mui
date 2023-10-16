/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const Education = () => {
    return (
        <div className="skill-mx-auto">
            <div className="skill-container">
                <h2 className="skill-title">Education Qualification</h2>

                <form className="form-skill" action="">

                    <div className='form-group'>
                        <TextField fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#14A800"

                                    }
                                }
                            }}

                            id='outlined-basic'
                            label='University'
                            variant='outlined'
                            placeholder='|e.g. Stanford University'

                        />
                        <p className='character'>Max. 100 Character</p>
                    </div>

                    <div className="form-group ">
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label ' >
                                Passing Year
                            </InputLabel>
                            <Select
                                sx={{
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#14A800"
                                        }

                                    }
                                }}
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                label="Passing Year"

                            >
                                <MenuItem value={10}>Agency</MenuItem>
                                <MenuItem value={20}>Individual</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="form-group ">
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label ' >
                                Degree
                            </InputLabel>
                            <Select
                                sx={{
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#14A800"
                                        }

                                    }
                                }}
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                label="Degree"

                            >
                                <MenuItem value={10}>B.A.</MenuItem>
                                <MenuItem value={20}>Individual</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='form-group'>
                        <TextField fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#14A800"

                                    }
                                }
                            }}

                            id='outlined'
                            label='Brief about your Work Experience*'
                            variant='outlined'
                            placeholder='Text Here'
                            className='introduce'
                        />
                        <p className='character'>Max. 100 Character</p>
                    </div>
                    <div className='form-group password'>
                        <TextField
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#14A800"
                                    }
                                }
                            }}
                            id='outlined-basic'
                            label='Upload Profile Picture*'
                            variant='outlined'
                            placeholder='No File Chosen'
                        />
                        <div className='upload'>
                            <Button variant='outlined' component='label'>
                                Choose File
                                <input type='file' hidden />
                            </Button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default Education;