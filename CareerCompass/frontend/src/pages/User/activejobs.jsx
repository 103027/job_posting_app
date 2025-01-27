import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardActions } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function JobCard({ jobTitle, companyName, salary, jobType, timing, stack, job_desc }) {
    const navigate = useNavigate();
    return (
        <Card sx={{ margin: '10px', borderRadius: "20px", cursor:"pointer" }} onClick={()=>{navigate("/Job")}}>
            <CardContent>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                        {jobTitle}
                    </Typography>
                    <CardActions>
                        <Button size="small" color="primary">
                            <SendIcon />
                        </Button>
                    </CardActions>
                </Box>
                <Typography variant="body1" color="textSecondary">
                    {companyName}
                </Typography>
                <Box sx={{ display: "inline-block", border: "1px solid black", pl: 2, pr: 2, mt: 3, borderRadius: "20px" }}>
                    <Typography variant="body1" sx={{ display: "inline" }}>
                        {salary}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
                    <Box sx={{ border: "1px solid black", pl: 2, pr: 2, mr: 2, mt: 3, borderRadius: "20px" }}>
                        <Typography variant="body1">
                            {jobType}
                        </Typography>
                    </Box>
                    <Box sx={{ border: "1px solid black", pl: 2, pr: 2, mr: 2, mt: 3, borderRadius: "20px" }}>
                        <Typography variant="body1">
                            {timing}
                        </Typography>
                    </Box>
                    {
                        stack.map((data) => (
                            <Box sx={{ border: "1px solid black", pl: 2, pr: 2, mr: 2, mt: 3, borderRadius: "20px" }} key={data}>
                                <Typography variant="body1">
                                    {data}
                                </Typography>
                            </Box>
                        ))
                    }
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" color="textSecondary">
                        {job_desc.split(" ").slice(0, 32).join(" ")}
                        {job_desc.split(" ").length > 32 && "..."}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

function ActiveJobs() {
    const jobs = [
        {
            jobTitle: 'Full Stack Developer',
            companyName: 'Harvey Taylor Pvt',
            salary: 'Rs 100,000 - Rs 140,000 a month',
            jobType: 'Remote',
            timing: 'Full-time',
            stack: ["React", "MUI", "Ant design"],
            job_desc: "Over the past decade, the scope of issues covered by the Emerging Security Challenges Division has evolved substantially. Cyber and energy security related tasks have matured and expanded. The work of the Division now also includes climate change, technological. The work of the Division now also includes climate change, technological"
        },
        {
            jobTitle: 'Backend Engineer',
            companyName: 'Code to Kloud',
            salary: 'Rs 50,000 - Rs 100,000 a month',
            jobType: 'OnSite',
            timing: 'Part-time',
            stack: ["Node", "AWS", "Devops"],
            job_desc: "Over the past decade, the scope of issues covered by the Emerging Security Challenges Division has evolved substantially. Cyber and energy security related tasks have matured and expanded. The work of the Division now also includes climate change, technological. The work of the Division now also includes climate change, technological The work of the Division now also includes climate change, technological"
        },
    ];
    const navigate = useNavigate();
    return (
        <>
            <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} margin={'40px 120px'}>
                <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'}>
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            Active Jobs
                        </Typography>
                    </Box>
                </Box>
                <Box display={'flex'} flexDirection={'row'}>
                    {jobs.map((job, index) => (
                        <JobCard
                            key={index}
                            jobTitle={job.jobTitle}
                            companyName={job.companyName}
                            salary={job.salary}
                            jobType={job.jobType}
                            timing={job.timing}
                            stack={job.stack}
                            job_desc={job.job_desc}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default ActiveJobs;
