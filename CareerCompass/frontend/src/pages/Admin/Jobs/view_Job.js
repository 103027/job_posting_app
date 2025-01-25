import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Switch,
  FormControl,
  FormControlLabel,
  FormGroup,
  Card,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  RadioGroup,
  Radio,
  Checkbox,
  MenuItem,
  Select,
  InputAdornment,
  OutlinedInput,
  InputLabel,
} from '@mui/material';

import { useNavigate } from 'react-router';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

function ViewJob() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [jobStatus, setJobStatus] = useState(true); // true = Active, false = Not Active
  const [isPartTime, setIsPartTime] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [jobDetails, setJobDetails] = useState({
    title: 'Software Engineer',
    company: 'Tech Corp',
    companyDescription: 'A leading technology company specializing in software solutions.',
    location: 'San Francisco, CA',
    email: 'contact@techcorp.com',
    website: 'https://www.techcorp.com',
    description: 'We are looking for a skilled Software Engineer to join our team. You will work on building scalable web applications and cutting-edge solutions.',
    type: 'Onsite',
    timing: 'Full-time',
    salary: '80,000 - 120,000',
    stackRequired: ['JavaScript', 'React', 'Node.js'],
  });

  const [applicants, setApplicants] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Shortlisted' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Applied' },
    { id: 3, name: 'Emily Johnson', email: 'emily.johnson@example.com', status: 'Interviewed' },
  ]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleStatusChange = () => {
    setJobStatus(!jobStatus);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handlePartTimeChange = (e) => {
    setIsPartTime(e.target.checked);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleStackChange = (e) => {
    setJobDetails({ ...jobDetails, stackRequired: e.target.value });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4, gap: 4 }}>
      {/* Job Title */}
      <Box display="flex" flexDirection="row" justifyContent="center" width="80%" >
        <Button onClick={() => navigate("/adminDashboard")}>
          <ArrowBackTwoToneIcon /> Back
        </Button>
        <Box display="flex" flexGrow={1} justifyContent="center" marginRight={5}>
          <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 'bold', }}>
            {isEditing ? (
              <TextField
                name="title"
                value={jobDetails.title}
                onChange={handleInputChange}
                fullWidth
              />
            ) : (
              jobDetails.title
            )}
          </Typography>
        </Box>
      </Box>

      {/* Job Details Card */}
      <Card sx={{ width: '80%', borderRadius: 2, boxShadow: 3, backgroundColor: 'background.paper' }}>
        <CardContent>
          {/* Company Name */}
          <Typography variant="h6">Company:</Typography>
          {isEditing ? (
            <TextField
              name="company"
              value={jobDetails.company}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          ) : (
            <Typography sx={{ mb: 2 }}>{jobDetails.company}</Typography>
          )}

          {/* Company Description */}
          <Typography variant="h6">Company Description:</Typography>
          {isEditing ? (
            <TextField
              name="companyDescription"
              value={jobDetails.companyDescription}
              onChange={handleInputChange}
              multiline
              rows={2}
              fullWidth
              sx={{ mb: 2 }}
            />
          ) : (
            <Typography sx={{ mb: 2 }}>{jobDetails.companyDescription}</Typography>
          )}

          {/* Location */}
          <Typography variant="h6">Location:</Typography>
          {isEditing ? (
            <TextField
              name="location"
              value={jobDetails.location}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          ) : (
            <Typography sx={{ mb: 2 }}>{jobDetails.location}</Typography>
          )}

          {/* Contact Email */}
          <Typography variant="h6">Contact Email:</Typography>
          {isEditing ? (
            <TextField
              name="email"
              value={jobDetails.email}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          ) : (
            <Typography sx={{ mb: 2 }}>{jobDetails.email}</Typography>
          )}

          {/* Website */}
          <Typography variant="h6">Website:</Typography>
          {isEditing ? (
            <TextField
              name="website"
              value={jobDetails.website}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          ) : (
            <Typography sx={{ mb: 2 }}>{jobDetails.website}</Typography>
          )}

          {/* Job Description */}
          <Typography variant="h6">Job Description:</Typography>
          {isEditing ? (
            <TextField
              name="description"
              value={jobDetails.description}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 2 }}
            />
          ) : (
            <Typography sx={{ mb: 2 }}>{jobDetails.description}</Typography>
          )}

          {/* Job Type */}
          <Typography variant="h6">Job Type:</Typography>
          {isEditing ? (
            <FormControl>
              <RadioGroup
                row
                name="type"
                value={jobDetails.type}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Onsite" control={<Radio />} label="Onsite" />
                <FormControlLabel value="Remote" control={<Radio />} label="Remote" />
              </RadioGroup>
            </FormControl>
          ) : (
            <Typography sx={{ mb: 2 }}>{jobDetails.type}</Typography>
          )}

          {/* Job Timing */}
          <Typography variant="h6">Job Timing:</Typography>
          {isEditing ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox checked={jobDetails.timing === 'Full-time'} />}
                  label="Full-time"
                  onChange={() => setJobDetails({ ...jobDetails, timing: 'Full-time' })}
                />
                <FormControlLabel
                  control={<Checkbox checked={isPartTime} onChange={handlePartTimeChange} />}
                  label="Part-time"
                />
              </FormGroup>
              {isPartTime && (
                <Select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  sx={{ ml: 2, minWidth: 200 }}
                >
                  <MenuItem value="fixed-hours">Fixed Hours</MenuItem>
                  <MenuItem value="min-hours">Minimum Hours</MenuItem>
                  <MenuItem value="max-hours">Maximum Hours</MenuItem>
                  <MenuItem value="range">Range</MenuItem>
                </Select>
              )}
            </Box>
          ) : (
            <Typography sx={{ mb: 2 }}>{jobDetails.timing}</Typography>
          )}

          {/* Stack Required */}
          <Typography variant="h6">Stack Required:</Typography>
          {isEditing ? (
            <TextField
              name="stackRequired"
              value={jobDetails.stackRequired.join(', ')}
              onChange={handleStackChange}
              fullWidth
              sx={{ mb: 2 }}
              helperText="Enter stack technologies separated by commas"
            />
          ) : (
            <Typography sx={{ mb: 2 }}>{jobDetails.stackRequired.join(', ')}</Typography>
          )}

          {/* Salary Range */}
          <Typography variant="h6">Salary Range:</Typography>
          {isEditing ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FormControl>
                <InputLabel htmlFor="min-salary">Minimum</InputLabel>
                <OutlinedInput
                  id="min-salary"
                  value={jobDetails.salary.split('-')[0]}
                  onChange={(e) => {
                    const maxSalary = jobDetails.salary.split('-')[1];
                    setJobDetails({ ...jobDetails, salary: `${e.target.value}-${maxSalary}` });
                  }}
                  startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
                  label="Minimum"
                />
              </FormControl>
              <Typography>to</Typography>
              <FormControl>
                <InputLabel htmlFor="max-salary">Maximum</InputLabel>
                <OutlinedInput
                  id="max-salary"
                  value={jobDetails.salary.split('-')[1]}
                  onChange={(e) => {
                    const minSalary = jobDetails.salary.split('-')[0];
                    setJobDetails({ ...jobDetails, salary: `${minSalary}-${e.target.value}` });
                  }}
                  startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
                  label="Maximum"
                />
              </FormControl>
            </Box>
          ) : (
            <Typography sx={{ mb: 2 }}>{`Rs ${jobDetails.salary} per month`}</Typography>
          )}

          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            {/* Job Status */}
            <FormControlLabel
              control={<Switch checked={jobStatus} onChange={handleStatusChange} />}
              label={`Status: ${jobStatus ? 'Active' : 'Not Active'}`}
            />
            {/* Edit Button */}
            <Box>
              <Button variant="contained" color="primary" onClick={handleEditToggle}>
                {isEditing ? 'Save Changes' : 'Edit Details'}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Applicants Table */}
      <Card sx={{ width: '80%', borderRadius: 2, boxShadow: 3, backgroundColor: 'background.paper' }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>Applicants</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Email</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell>{applicant.name}</TableCell>
                    <TableCell>{applicant.email}</TableCell>
                    <TableCell>{applicant.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box >
  );
}

export default ViewJob;