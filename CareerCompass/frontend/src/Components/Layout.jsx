import React from 'react';
import { useState, useEffect } from 'react';
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
import { useLocation } from "react-router-dom";

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
    const location = useLocation();

    useEffect(() => {
        setIsAdmin(false)
        setValue('1')
    }, [])

    useEffect(() => {
        if (value == "1") {
            isAdmin ?
                navigate('/adminDashboard')
                :
                navigate('/userDashboard')
        } else if (value == "2") {
            navigate('/activejobs')
        } else if (value == "3") {
            navigate('/aboutus');
        }
    }, [value])

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
                        {
                            location.pathname.includes("/adminDashboard") || location.pathname.includes("/aboutus") || location.pathname.includes("/userDashboard") || location.pathname.includes("/activejobs")? 
                            <Box sx={{ flexGrow: 2, display: 'flex', justifyContent: 'center' }}>
                                <TabContext value={value}>
                                    <Box>
                                        <TabList onChange={handleChange} textColor="black"
                                            sx={{
                                                '.MuiTabs-indicator': {
                                                    backgroundColor: '#0052cc'
                                                }
                                            }}
                                            style={{ marginTop: "20px" }}
                                            centered
                                        >
                                            <Tab label="Dashboard" value="1" />
                                            {
                                                isAdmin ? ' ' : <Tab label="Jobs" value="2" />
                                            }
                                            <Tab label="About Us" value="3" />
                                        </TabList>
                                    </Box>
                                </TabContext>
                            </Box>
                            : ' '
                        }
                        <Box sx={{ display: 'flex', justifyContent: 'center', mr:"65px" }}>
                            <Button style={{ color: "black", border: "none" }} onClick={() => { navigate("/authentication") }} endIcon={<LogoutIcon style={{ color: '#FF4B2B' }} />}>
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
