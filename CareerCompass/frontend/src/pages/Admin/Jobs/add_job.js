import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Jobs from '../../../Components/Jobs';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { useNavigate } from 'react-router';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import {
    Select,
    MenuItem,
    ListItemText,
} from '@mui/material';




const steps = ['Company Details', 'Job Details'];

function AddJob() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [isPartTime, setIsPartTime] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState('fixed-hours'); // To track the selected option

    const [stackRequired, setStackRequired] = React.useState([]);

    const techStacks = ['React', 'Node.js', 'MongoDB', 'Express', 'Python', 'Django', 'AWS', 'JavaScript'];


    const isStepSkipped = (step) => skipped.has(step);

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

    const handlePartTimeChange = (event) => {
        setIsPartTime(event.target.checked);
        if (!event.target.checked) {
            setSelectedOption('fixed-hours');
        }
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" margin="40px 120px">
                <Box display="flex" flexDirection="row" justifyContent="center" width="100%">
                    <Button onClick={() => navigate("/adminDashboard")}>
                        <ArrowBackTwoToneIcon /> Back
                    </Button>
                    <Box display="flex" flexGrow={1} justifyContent="center" marginRight={5}>
                        <Typography variant="h4" gutterBottom>
                            Add a Job
                        </Typography>
                    </Box>
                </Box>

                {/* Stepper */}
                <Box sx={{ width: '60%', mt: 3, mb: 3 }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                {/* Step Content */}
                {activeStep === 0 && (
                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                        <Card sx={{ width: "100%", borderRadius: "10px" }}>
                            <CardHeader title="Company Details" />
                            <Divider />
                            <CardContent>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 4, width: '80%' },
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField required id="company-name" label="Company Name" size="small" />
                                    <TextField required id="location" label="Location" size="small" />
                                    <TextField required type="email" id="contact-email" label="Contact Email" size="small" />
                                    <TextField required id="website-link" label="Website Link" size="small" />
                                    <TextField
                                        required
                                        id="company-description"
                                        label="Company Description"
                                        multiline
                                        rows={4}
                                    />
                                </Box>
                            </CardContent>
                            <Divider />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', p: 2 }}>
                                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                    Back
                                </Button>
                                <Button onClick={handleNext}>Next</Button>
                            </Box>
                        </Card>
                    </Box>
                )}

                {activeStep === 1 && (
                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                        <Card sx={{ width: "100%", borderRadius: "10px" }}>
                            <CardHeader title="Job Details" />
                            <Divider />
                            <CardContent>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 4, width: '80%' },
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            width: "80%",
                                            gap: "16px",
                                        }}
                                    >
                                        <TextField
                                            required
                                            id="job-title"
                                            label="Job Title"
                                            size="small"
                                            sx={{ flex: 1 }}
                                        />

                                        <FormControl
                                            sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                flex: 1,
                                            }}
                                        >
                                            <Typography id="radio-button" sx={{ mr: 2 }} variant="h6">
                                                Job Type:
                                            </Typography>
                                            <RadioGroup
                                                row
                                                aria-labelledby="radio-button-label"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="Onsite" control={<Radio />} label="Onsite" />
                                                <FormControlLabel value="Remote" control={<Radio />} label="Remote" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{width:"75%", mb:4, mt:4}}>
                                        <FormControl fullWidth>
                                            <InputLabel>Technologies Required</InputLabel>
                                            <Select
                                                multiple
                                                value={stackRequired}
                                                onChange={(e) => setStackRequired(e.target.value)}
                                                renderValue={(selected) => selected.join(', ')}
                                            >
                                                {techStacks.map((stack) => (
                                                    <MenuItem key={stack} value={stack}>
                                                        <Checkbox checked={stackRequired.indexOf(stack) > -1} />
                                                        <ListItemText primary={stack} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        width: "75%",
                                    }}>
                                        <Typography variant="h6">Job Timing: </Typography>
                                        <FormGroup
                                            sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                ml: 2
                                            }}
                                        >
                                            <FormControlLabel control={<Checkbox />} label="Full-time" />
                                            <FormControlLabel control={<Checkbox checked={isPartTime} onChange={handlePartTimeChange} />} label="Part-time" />
                                        </FormGroup>
                                    </Box>
                                    {isPartTime && (
                                        <>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    gap: 2,
                                                    width: "75%",
                                                }}
                                            >
                                                <Select
                                                    value={selectedOption}
                                                    onChange={handleOptionChange}
                                                    sx={{ minWidth: 200 }}
                                                >
                                                    <MenuItem value="fixed-hours">Fixed Hours</MenuItem>
                                                    <MenuItem value="min-hours">Minimum Hours</MenuItem>
                                                    <MenuItem value="max-hours">Maximum Hours</MenuItem>
                                                    <MenuItem value="range">Range</MenuItem>
                                                </Select>

                                                {/* Input Fields Based on Selected Option */}
                                                {selectedOption === "fixed-hours" && (
                                                    <TextField
                                                        label="Fixed Hours"
                                                        placeholder="Enter number of hours"
                                                        type="number"
                                                        sx={{ width: 200 }}
                                                    />
                                                )}

                                                {selectedOption === "min-hours" && (
                                                    <TextField
                                                        label="Minimum Hours"
                                                        placeholder="Enter minimum hours"
                                                        type="number"
                                                        sx={{ width: 200 }}
                                                    />
                                                )}

                                                {selectedOption === "max-hours" && (
                                                    <TextField
                                                        label="Maximum Hours"
                                                        placeholder="Enter maximum hours"
                                                        type="number"
                                                        sx={{ width: 200 }}
                                                    />
                                                )}

                                                {selectedOption === "range" && (
                                                    <TextField
                                                        label="Hours Range"
                                                        placeholder="Enter range (e.g., 10-20)"
                                                        sx={{ width: 200 }}
                                                    />
                                                )}
                                            </Box>
                                        </>

                                    )}

                                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5, mt: 4, width: "75%" }}>
                                        <Typography>Salary Range</Typography>
                                        <FormControl>
                                            <InputLabel htmlFor="min-amount">Minimum</InputLabel>
                                            <OutlinedInput
                                                id="min-amount"
                                                startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
                                                label="Minimum"
                                            />
                                        </FormControl>
                                        <Typography>to</Typography>
                                        <FormControl>
                                            <InputLabel htmlFor="max-amount">Maximum</InputLabel>
                                            <OutlinedInput
                                                id="max-amount"
                                                startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
                                                label="Maximum"
                                            />
                                        </FormControl>
                                        <Typography>per month</Typography>
                                    </Box>
                                    <TextField
                                        required
                                        id="job-description"
                                        label="Job Description"
                                        multiline
                                        rows={4}
                                    />
                                </Box>
                            </CardContent>
                            <Divider />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', p: 2 }}>
                                <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                                    Back
                                </Button>
                                <Button onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </Card>
                    </Box>
                )}

                {activeStep === steps.length && (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                )}
            </Box>
        </>
    );
}

export default AddJob;
