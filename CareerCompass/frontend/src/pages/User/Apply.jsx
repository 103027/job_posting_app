import { Box, Link, Typography, Divider, Button, TextField } from '@mui/material';
import { React, useState } from 'react';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { useNavigate } from 'react-router';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { styled } from '@mui/material/styles';


function Apply() {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const jobTitle = "Software Engineer"
  const CompanyName = "TechCorp"
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Generate a temporary URL for the file
    }
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "flex-start", margin: "40px 400px" }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', mb: 2 }}>
        <Button onClick={() => navigate("/job")}>
          <ArrowBackTwoToneIcon /> Back
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: "20px", padding: "20px", width: "100%", backgroundColor: "white", boxShadow: "10px 10px 30px grey" }}>
        <Typography variant='h6' style={{ fontWeight: 'bold' }}>{jobTitle}</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography>{CompanyName}</Typography>
        </Box>
      </Box >
      <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: "20px", padding: "20px", width: "100%", backgroundColor: "white", boxShadow: "10px 10px 30px grey", mt: 4 }}>
        <Typography variant='h6' style={{ fontWeight: 'bold' }}>Add your contact information</Typography>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography style={{ fontWeight: 'bold' }}>First Name</Typography>
            <TextField id="First-Name" variant="outlined" fullWidth size="small" margin="dense" />
          </Box>
          <Box>
            <Typography style={{ fontWeight: 'bold' }}>Last Name</Typography>
            <TextField id="First-Name" variant="outlined" fullWidth size="small" margin="dense" />
          </Box>
          <Box>
            <Typography style={{ fontWeight: 'bold' }}>Email</Typography>
            <TextField id="First-Name" variant="outlined" fullWidth size="small" margin="dense" />
          </Box>
          <Box>
            <Typography style={{ fontWeight: 'bold' }}>City</Typography>
            <TextField id="First-Name" variant="outlined" fullWidth size="small" margin="dense" />
          </Box>
          <Box>
            <Typography style={{ fontWeight: 'bold' }}>Phone Number</Typography>
            <TextField id="First-Name" variant="outlined" fullWidth size="small" margin="dense" />
          </Box>
        </Box>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography variant='h6' style={{ fontWeight: 'bold' }}>Add a resume</Typography>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            component="label"
            variant="contained"
            startIcon={<FileUploadIcon />}
            sx={{
              margin: "0px 100px",
              p: 2,
              backgroundColor: "white",
              color: "#0052cc",
              "&:hover": {
                backgroundColor: "white",
                color: "#0052cc",
              },
              fontWeight: "bold",
            }}
          >
            Upload Your Resume
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="application/pdf,application/msword"
            />
          </Button>

          {selectedFile && (
            <Box sx={{ margin: "0px 100px", p: 2, border: "1px solid #ccc", borderRadius: "10px" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {selectedFile.name}
              </Typography>
              {selectedFile.type === "application/pdf" ? (
                <iframe
                  src={`${preview}#toolbar=0`}
                  title="File Preview"
                  style={{ width: "100%", height: "550px", border: "none" }}
                ></iframe>
              ) : (
                <Typography>
                  File preview is not available. Please download the file to view its content.
                </Typography>
              )}
            </Box>
          )}
        </Box>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end", mb: 2, mt: 2 }}>
          <Button sx={{
            borderRadius: "10px", color: "white", backgroundColor: "#0052cc", "&:hover": {
              backgroundColor: " #003380"
            },
            p: "10px 20px"
          }} onClick={() => { navigate("/apply") }}>
            Submit Your Application
          </Button>
        </Box>
      </Box >
    </Box >
  );
}

export default Apply;
