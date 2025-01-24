import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Jobs from '../../../Components/Jobs';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { useNavigate } from 'react-router';
import TextField from '@mui/material/TextField';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Divider from '@mui/material/Divider';



const steps = ['Company Details', 'Job Details'];

function AddJob() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

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

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} margin={'40px 120px'}>
                <Box display="flex" flexDirection="row" justifyContent="center" width="100%">
                    <Button onClick={() => navigate("/admin")}>
                        <ArrowBackTwoToneIcon /> Back
                    </Button>
                    <Box display="flex" flexGrow={1} justifyContent="center" marginRight={5}>
                        <Typography variant="h4" gutterBottom>
                            Add a Job
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '60%', mt: 3, mb: 3 }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>


                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </React.Fragment>
                ) : (
                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                        <Card sx={{ width: "100%", borderRadius: "10px" }}>
                            <CardHeader title="Company Details" />
                            <Divider />
                            <CardContent>
                                <Box component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 4, width: '53ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Job Title"
                                        size="small"
                                    />
                                    <TextField
                                        required
                                        type={"email"}
                                        id="outlined-email"
                                        label="Email"
                                        size="small"
                                    />
                                </Box>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 4, width: '53ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Read Only"
                                        defaultValue="Hello World"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                    <TextField
                                        id="outlined-number"
                                        label="Number"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Box>
                            </CardContent>
                            <Divider />
                            <React.Fragment >
                                <Box sx={{ display: 'flex',justifyContent:'space-between', flexDirection: 'row',p:2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Button onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        </Card>
                    </Box>
                )}
            </Box>
        </>
    );
}

export default AddJob;

