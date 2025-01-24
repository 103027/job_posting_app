import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate} from 'react-router';
import { Button } from '@mui/material';
import {Link} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          '& .MuiDataGrid-row:nth-of-type(odd)': {
            backgroundColor: '#fafafa',
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#0052cc',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          },
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        },
      },
    },
  },
})

const rows = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    jobDescription: "Responsible for implementing visual elements that users see and interact within a web application.",
    stackRequired: ["React", "CSS", "HTML"],
    jobType: "Full-time",
    jobLocation: "Remote",
    emailContact: "frontend@example.com",
    jobStatus: "Active",
  },
  {
    id: 2,
    jobTitle: "Backend Developer",
    jobDescription: "Focus on server-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end.",
    stackRequired: ["Node.js", "Express", "MongoDB"],
    jobType: "Part-time",
    jobLocation: "Onsite",
    emailContact: "backend@example.com",
    jobStatus: "Active",
  },
  {
    id: 3,
    jobTitle: "UI/UX Designer",
    jobDescription: "Expected to design and deliver user-friendly, engaging, and beautiful designs that are consistent across all platforms.",
    stackRequired: ["Adobe XD", "Sketch", "Figma"],
    jobType: "Full-time",
    jobLocation: "Remote",
    emailContact: "uiux@example.com",
    jobStatus: "Not available",
  },
  {
    id: 4,
    jobTitle: "Data Scientist",
    jobDescription: "Responsible for analyzing large amounts of raw information to find patterns that will help improve our company.",
    stackRequired: ["Python", "R", "SQL"],
    jobType: "Full-time",
    jobLocation: "Onsite",
    emailContact: "datasci@example.com",
    jobStatus: "Active",
  },
  {
    id: 5,
    jobTitle: "Project Manager",
    jobDescription: "Responsible for planning, overseeing and leading projects from ideation through to completion.",
    stackRequired: ["Jira", "Trello", "MS Project"],
    jobType: "Part-time",
    jobLocation: "Remote",
    emailContact: "pm@example.com",
    jobStatus: "Active",
  }
];

function CustomToolbar() {
  return (
    <GridToolbarContainer style={{ height: "50px" }}>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}

function RenderLink(props) {
  const navigate = useNavigate();
  return (
    <Button style={{border:'0.2px solid black',borderRadius:'10px'}} onClick={()=>{navigate(`/viewJob/${1}`)}}>
      <VisibilityOutlinedIcon style={{color:'black'}}/>
    </Button>
  );
}

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'jobTitle', headerName: 'Title', width: 200 },
  { field: 'stackRequired', headerName: 'Stack Required', width: 300 },
  { field: 'jobType', headerName: 'Type', width: 180 },
  { field: 'jobLocation', headerName: 'Location', width: 180 },
  { field: 'jobStatus', headerName: 'Status', width: 120 },
  { field: 'Action', renderCell: RenderLink, width: 120 },
];

export default function Jobs() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <DataGrid
          disableColumnSelector
          disableColumnResize
          rows={rows}
          columns={columns}
          slots={{ toolbar: CustomToolbar }}
          initialState={{
            filter: {
              filterModel: {
                items: [],
              },
            },
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 25, 100]}
        />
      </ThemeProvider>
    </div>
  );
}
