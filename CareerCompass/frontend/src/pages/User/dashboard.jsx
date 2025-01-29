import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Applications from '../../Components/Applications';
import { useNavigate } from 'react-router';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} margin={'40px 120px'}>
        <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Your Applications
              </Typography>
            </Box>
        </Box>
        <Box>
          <Applications/>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
