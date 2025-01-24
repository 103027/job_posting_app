import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Jobs from '../../../Components/Jobs';
import { useNavigate } from 'react-router';

function JobListings() {
  const navigate = useNavigate();
  return (
    <>
      <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} margin={'40px 120px'}>
        <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Jobs
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'flex-end'} flexDirection={'row'}>
              <Button variant="outlined" onClick={()=>{navigate('/addJob')}} startIcon={<AddIcon />} style={{color:"white",backgroundColor:"#0052cc",width:"150px",height:"40px",border:"2px",borderRadius:"20px"}}>
                Add Job
              </Button>
            </Box>
        </Box>
        <Box>
          <Jobs/>
        </Box>
      </Box>
    </>
  );
}

export default JobListings;
