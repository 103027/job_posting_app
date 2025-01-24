import React from 'react';
import { useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffff',
        },
    },
});

function Header() {
    const [isAdmin, setIsAdmin] = useState()
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        setIsAdmin(true)
        setValue('1')
    },[])

    useEffect(()=>{
        if (value == "1") {
            isAdmin ? 
            navigate('/adminDashobard')
            :
            navigate('/userDashobard')
        } else if (value == "2") {
            isAdmin ? 
            navigate('/applicants')
            :
            navigate('/applications')
        } else if (value == "3") {
            navigate('/aboutus');
        }
    },[value])

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar position="fixed">
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: "65px" }}>
                            <img src={require('../pages/Authentication/logo2-2.png')} alt="Logo" />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    ml: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                CareerCompass
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 2, display: 'flex', justifyContent: 'center' }}>
                            <TabContext value={value}>
                                <Box>
                                    <TabList onChange={handleChange} textColor="black"
                                        sx={{
                                            '.MuiTabs-indicator': {
                                                backgroundColor: '#0052cc'
                                            }
                                        }}
                                        style={{marginTop:"20px"}}
                                        centered
                                    >
                                        <Tab label="Dashboard" value="1"/>
                                        {
                                            isAdmin ? <Tab label="Applicants" value="2"/> : <Tab label="Applications" value="2"/> 
                                        }
                                        <Tab label="About Us" value="3"/>
                                    </TabList>
                                </Box>
                            </TabContext>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                            <Button style={{ color: "black", border: "none" }} endIcon={<LogoutIcon style={{color:'#FF4B2B'}}/>}>
                                Hassan Muzaffar
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    );
}
export default Header;
