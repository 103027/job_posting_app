import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardActions } from '@mui/material';

function JobCard({ jobTitle, companyName, salary, jobType, timing }) {
    return (
        <Card style={{ marginBottom: '20px' }}>
            <CardContent>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    {jobTitle}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    {companyName}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                    {timing}
                </Typography>
                <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold' }}>
                    {salary}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    {jobType}
                </Button>
                <Button size="small" color="primary">
                    Easily apply
                </Button>
            </CardActions>
        </Card>
    );
}

function ActiveJobs() {
    const jobs = [
        {
            jobTitle: 'Full Stack Developer',
            companyName: 'Harvey Taylor Pvt',
            salary: 'Rs 100,000 - Rs 140,000 a month',
            jobType: 'Full-time',
            timing: 'Active 9 days ago',
        },
        {
            jobTitle: 'Backend Engineer',
            companyName: 'Code to Kloud',
            salary: 'Rs 50,000 - Rs 100,000 a month',
            jobType: 'Full-time',
            timing: 'Active 9 days ago',
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
                <Box sx={{ padding: '20px' }}>
                    {jobs.map((job, index) => (
                        <JobCard
                            key={index}
                            jobTitle={job.jobTitle}
                            companyName={job.companyName}
                            salary={job.salary}
                            jobType={job.jobType}
                            timing={job.timing}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default ActiveJobs;
