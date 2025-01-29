import { Box, Link, Typography, Divider, Button } from '@mui/material';
import { React, useState } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { useNavigate } from 'react-router';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

function Job() {
    const [jobDetails, setJobDetails] = useState({
        title: 'Software Engineer',
        company: 'Tech Corp',
        companyDescription: 'A leading technology company specializing in software solutions.',
        location: 'San Francisco, CA',
        email: 'contact@techcorp.com',
        website: 'https://www.netflix.com',
        description: 'We are looking for a skilled Software Engineer to join our team. You will work on building scalable web applications and cutting-edge solutions.',
        type: 'Onsite',
        timing: 'Full-time',
        salary: '80,000 - 120,000',
        stackRequired: ['JavaScript', 'React', 'Node.js'],
    });
    const navigate = useNavigate();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "flex-start", margin: "40px 180px" }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',mb:2 }}>
                <Button onClick={() => navigate("/activejobs")}>
                    <ArrowBackTwoToneIcon /> Back
                </Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: "20px", padding: "40px", width: "100%", backgroundColor: "white", boxShadow: "10px 10px 30px grey" }}>
                <Typography variant='h4' style={{ fontWeight: 'bold' }}>{jobDetails.title}</Typography>
                <Box sx={{ mt: 2, display: "flex", flexDirection: "row", gap: 1 }}>
                    <Typography style={{ fontWeight: 'bold' }}>{jobDetails.company}</Typography>
                    <Typography>|</Typography>
                    <Link
                        href={jobDetails.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            cursor: "pointer",
                            color: "black",
                            textDecoration: "underline",
                            textDecorationColor: "black",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.5,
                            "&:hover": {
                                color: "#0052cc",
                                textDecorationColor: "#0052cc"
                            }
                        }}
                    >
                        {jobDetails.website} <LaunchIcon fontSize="small" />
                    </Link>
                    <Typography>|</Typography>
                    <Typography sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                    }}><MailOutlineIcon fontSize="small" /> {jobDetails.email}</Typography>
                    <Typography>|</Typography>
                    <Typography sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                    }}><LocationOnOutlinedIcon fontSize="small" /> {jobDetails.location}</Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography
                        sx={{
                            fontSize: "1rem",
                            lineHeight: 1.5,
                            fontWeight: 400,
                            fontStyle: "italic",
                            textAlign: "justify",
                        }}
                    >
                        {jobDetails.companyDescription}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", mt: 2 }}>
                    <Button sx={{
                        borderRadius: "10px", color: "white", backgroundColor: "#0052cc", "&:hover": {
                            backgroundColor: " #003380"
                        },
                        p: "10px 20px"
                    }} onClick={() => { navigate("/apply") }}>
                        Apply Now
                    </Button>
                </Box>
                <Divider sx={{ mt: 2 }} />
                <Box sx={{ mt: 2, ml: 2 }}>
                    <Typography variant='h6' sx={{ fontWeight: "bold" }}>
                        Job Details
                    </Typography>
                    <Box sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
                        <Typography sx={{
                            fontWeight: "bold", fontSize: "0.8rem", display: "inline-flex",
                            alignItems: "center",
                            gap: 2,
                        }}>
                            <PaymentIcon fontSize='small' /> Pay
                        </Typography>
                        <Box sx={{
                            ml: 2, mt: 2, borderRadius: "10px", backgroundColor: "#eeee", p: "4px 8px", display: "inline-block",
                            width: "fit-content",
                        }}>
                            <Typography>
                                <strong>Rs</strong> {jobDetails.salary} <strong>a month </strong>
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
                        <Typography sx={{
                            fontWeight: "bold", fontSize: "0.8rem", display: "inline-flex",
                            alignItems: "center",
                            gap: 2,
                        }}>
                            <WorkOutlineIcon fontSize='small' /> Job Type
                        </Typography>
                        <Box sx={{
                            ml: 2, mt: 2, borderRadius: "10px", backgroundColor: "#eeee", p: "4px 8px", display: "inline-block",
                            width: "fit-content",
                        }}>
                            <Typography>
                                {jobDetails.type}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
                        <Typography sx={{
                            fontWeight: "bold", fontSize: "0.8rem", display: "inline-flex",
                            alignItems: "center",
                            gap: 2,
                        }}>
                            <AccessTimeIcon fontSize='small' /> Job Timing
                        </Typography>
                        <Box sx={{
                            ml: 2, mt: 2, borderRadius: "10px", backgroundColor: "#eeee", p: "4px 8px", display: "inline-block",
                            width: "fit-content",
                        }}>
                            <Typography>
                                {jobDetails.timing}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
                        <Typography sx={{
                            fontWeight: "bold", fontSize: "0.8rem", display: "inline-flex",
                            alignItems: "center",
                            gap: 2,
                        }}>
                            <LayersOutlinedIcon fontSize='small' /> Stack Required
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            {
                                jobDetails.stackRequired.map((data) => (
                                    <Box sx={{
                                        ml: 2, mt: 2, borderRadius: "10px", backgroundColor: "#eeee", p: "4px 8px", display: "inline-block",
                                        width: "fit-content",
                                    }}>
                                        <Typography>
                                            {data}
                                        </Typography>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ mt: 2 }} />
                <Box sx={{ ml: 2, mt: 2 }}>
                    <Typography variant='h6' sx={{ fontWeight: "bold" }}>
                        Job Description
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {jobDetails.description}
                    </Typography>
                </Box>
                <Divider sx={{ mt: 2 }} />
            </Box>
        </Box >
    );
}

export default Job;
