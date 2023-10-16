/* eslint-disable no-unused-vars */
import { Box, TextField } from '@mui/material';
import React from 'react';

const Skills = () => {
    return (
        <div className="skill-mx-auto">
            <div className="skill-container">
                <h2 className="skill-title">Skills and Experience</h2>

                <form className="form-skill" action="">

                    <div className=''>
                        <TextField fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#14A800"

                                    }
                                }
                            }}

                            id='outlined-basic'
                            label='Introduce Yourself'
                            variant='outlined'
                            placeholder='Text Here'
                            className='introduce'
                        />
                    </div>
                </form>
            </div >
        </div>

    );
};

export default Skills;