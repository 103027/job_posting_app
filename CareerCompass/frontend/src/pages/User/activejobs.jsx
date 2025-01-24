import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Jobs from '../../Components/Jobs';
import { useNavigate } from 'react-router';

function ActiveJobs() {
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
                <Box>
                    <Jobs />
                </Box>
            </Box>
        </>
    );
}

export default ActiveJobs;
