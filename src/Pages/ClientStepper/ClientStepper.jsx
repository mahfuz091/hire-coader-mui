import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

import { Container } from "@mui/material";


import Verification from "../Steps/Verification/Verification";
import Complete from "../Steps/Complete/Complete";
import ClientAddress from "../ClientSteps/ClientAddress/ClientAddress";
import ClientDigitalPresence from "../ClientSteps/ClientDigitalPresence/ClientDigitalPresence";


const customStepLabelStyles = {
    "& .MuiStepLabel-active": {
        color: "green",
    },
};

// const customStepConnectorStyles = {
//   display: 'none',
// };

const customStepperStyles = {
    "& .MuiStepConnector-line": {
        // border: '2px solid #14a800', // Modify line styles
        borderRadius: "100%",
        marginTop: "6px",
    },
    "& .MuiStepIcon-root": {
        color: "#EAEFF3",
        border: "2px solid #E1E5E9",
        borderRadius: "100%",
        width: "41px",
        height: "41px",
    },
    "& .MuiStepIcon-root.Mui-active": {
        border: "2px solid #14a800",
        color: "white",
    },
    "& .MuiStepIcon-root.Mui-completed": {
        border: "0px solid #14a800",
        color: "#14a800",
    },
    "& .MuiStepLabel-label.Mui-completed": {
        color: "#14a800",
    },
    "& .MuiStepIcon-text": {
        fill: "#14a800",
    },
    "& .MuiStepLabel-label.Mui-active": {
        color: "#14a800",
    },


};

const ClientStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const steps = [

        "Address",
        "Digital Presence",
        "Verification",
    ];

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <ClientAddress />;
            case 1:
                return <ClientDigitalPresence />;
            case 2:
                return <Verification />;

            default:
                return <Complete />;
        }
    };
    return (
        <Container className='stepper-margin'>
            <Box sx={{ width: "100%" }}>
                <Stepper
                    activeStep={activeStep}
                    alternativeLabel
                    sx={customStepperStyles}
                >
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        if (activeStep === index) {
                            labelProps.style = customStepLabelStyles;
                        }

                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }

                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <Box sx={{ mt: 2 }}>{getStepContent(activeStep)}</Box>
                {activeStep === steps.length ?
                    null : <><Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            pt: 2,
                            maxWidth: "536px",
                            margin: "0 auto",
                            width: "100%",
                        }}
                    >
                        <Box className={activeStep === 0 ? "hidden" : "block"}>
                            <Button
                                sx={{
                                    border: "1px solid #6D6D6D",
                                    color: "#6D6D6D",
                                    mt: "20px",
                                    mb: "100px",
                                    py: "14px",
                                    px: "32px",
                                    marginLeft: "310px",

                                    "&:hover": {
                                        backgroundColor: "#14A840",
                                        color: "#FFF",
                                        border: "1px solid #14A840",

                                    },
                                }}
                                color='inherit'
                                onClick={handleBack}
                                disabled={activeStep === 0}
                            >
                                Back
                            </Button>
                        </Box>
                        <Box sx={{ flex: "1 1 auto" }} />

                        <Button
                            sx={{
                                backgroundColor: "#14A800",
                                mt: "20px",
                                mb: "100px",
                                py: "14px",
                                px: "32px",
                                // marginRight: "300px",
                                "&:hover": { backgroundColor: "#14A840" },
                            }}
                            variant='contained'
                            onClick={handleNext}
                        >
                            {activeStep === steps.length - 1 ? "Submit" : "Next"}
                        </Button>
                    </Box></>}
            </Box>
        </Container>
    );
};

export default ClientStepper;