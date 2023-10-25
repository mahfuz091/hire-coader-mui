/* eslint-disable no-unused-vars */
import { Grid, TextField } from "@mui/material";
import React from "react";

const Verification = () => {
  return (
    <div className="skill-mx-auto">
      <div style={{ maxWidth: "499px", margin: "0 auto", width: "100%" }} className="">

        <h2 className="verification-title">Verification Code has been Sent to your registered Email address</h2>
        <form action="" style={{ maxWidth: "295px", margin: "0 auto", width: "100%" }}>
          <p className="verification-code">Enter Verification Code</p>
          <Grid container className="code-grid" >
            <Grid item lg={3}>
              <TextField

                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#14A800",
                    },
                  },
                }}
                id='outlined-basic'
                label='5'
                variant='outlined'
                placeholder='5'
                className="code"
              />
            </Grid>
            <Grid lg={3}>
              <TextField

                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#14A800",
                    },
                  },
                }}
                id='outlined-basic'
                label='5'
                variant='outlined'
                placeholder='5'
                className="code"
              />
            </Grid>
            <Grid item lg={3}>
              <TextField

                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#14A800",
                    },
                  },
                }}
                id='outlined-basic'
                label='5'
                variant='outlined'
                placeholder='5'
                className="code"
              />
            </Grid>
            <Grid item lg={3}>
              <TextField

                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#14A800",
                    },
                  },
                }}
                id='outlined-basic'
                label='5'
                variant='outlined'
                placeholder='5'
                className="code"
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Verification;
