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
    CompanyName: "Musketeer Tech",
    jobTime: "Full-time",
    jobType: "Remote",
    ApplicationStatus:"Active",
    feedback: "--",
  },
  {
    id: 2,
    jobTitle: "Devops",
    CompanyName: "Musketeer Tech",
    jobTime: "Full-time",
    jobType: "Remote",
    ApplicationStatus:"Active",
    feedback: "Accepted",
  },
  {
    id: 3,
    jobTitle: "Backend Developer",
    CompanyName: "Devsinc",
    jobTime: "Full-time",
    jobType: "Remote",
    ApplicationStatus:"Active",
    feedback: "Rejected",
  }
];

function CustomToolbar() {
  return (
    <GridToolbarContainer style={{ height: "50px" }}>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'jobTitle', headerName: 'Title', width: 200 },
  { field: 'CompanyName', headerName: 'Company Name', width: 200 },
  { field: 'jobType', headerName: 'Type', width: 180 },
  { field: 'jobTime', headerName: 'Time', width: 180 },
  { field: 'ApplicationStatus', headerName: 'Application Status', width: 220 },
  { field: 'feedback', headerName: 'Feedback', width: 120 },
];

export default function Applications() {
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
