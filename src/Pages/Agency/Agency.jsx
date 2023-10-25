import { Button, Grid, TextField } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Agency.css"
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";


const Agency = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="agency-container">
                <form action="">
                    <div style={{ display: "flex", justifyContent: "space-between" }} className="form-group">
                        <h2>Agency</h2>
                        <AddBoxOutlinedIcon sx={{ color: "#14A800" }}></AddBoxOutlinedIcon>
                    </div>
                    <div className="form-group">
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
                            label='Agency Name'
                            variant='outlined'
                            placeholder='|Agency Name'
                        />
                    </div>
                    <div className="form-group">
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
                            label='Website'
                            variant='outlined'
                            placeholder='Website'
                        />
                    </div>
                    <div className="form-group">
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
                            label='Contact No.'
                            variant='outlined'
                            placeholder='Contact'
                        />
                    </div>

                    <Grid container  >
                        <Grid lg={6} className="fullwidth">
                            <div className="form-group">
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
                                    label='Country'
                                    variant='outlined'
                                    placeholder='Country'
                                    className="agency-field"
                                />
                            </div>
                        </Grid>
                        <Grid lg={6} className="fullwidth">
                            <div className="form-group">
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
                                    label='State'
                                    variant='outlined'
                                    placeholder='State'
                                    className="agency-field ml-15"
                                />
                            </div>
                        </Grid>
                    </Grid>


                    <Grid container  >
                        <Grid lg={6} className="fullwidth">
                            <div className="form-group">
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
                                    placeholder='City'
                                    className="agency-field"
                                />
                            </div>
                        </Grid>
                        <Grid lg={6} className="fullwidth">
                            <div className="form-group">
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
                                    placeholder='Zip Code'
                                    className="agency-field ml-15"
                                />
                            </div>
                        </Grid>
                    </Grid>
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
                    <div style={{ textAlign: 'right' }}><Button sx={{
                        backgroundColor: "#14A800",
                        color: "#fff",
                        mt: "20px",
                        mb: "100px",
                        py: "14px",
                        px: "32px",
                        // marginRight: "300px",
                        "&:hover": { backgroundColor: "#14A840" },
                    }}>Done</Button></div>


                </form>


            </div>
            <Footer></Footer>
        </>
    );
};

export default Agency;
