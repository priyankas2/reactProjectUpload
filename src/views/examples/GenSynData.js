import React, { useState } from 'react';
import { Grid, styled, Box } from '@mui/material';
import UploadButton from 'components/GenerateSynData/UploadButton.jsx';
import ProcessButton from 'components/GenerateSynData/ProcessButton.jsx';
import ShowButton from 'components/GenerateSynData/ShowButton.jsx';
import ResetButton from 'components/GenerateSynData/ResetButton.jsx';

const StyledContainer = styled(Box)({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'row', 
  alignItems: 'center',
  justifyContent: 'center', 
  gap: '2rem',
});

 const GenSynData =() =>{
  const [excelData, setExcelData] = useState(null);
  const [showButtons, setShowButtons] = useState(false);

  const handleUpload = (data) => {
    setExcelData(data);
    setShowButtons(true); 
  };

  const handleReset = () => {
    localStorage.clear();
    setExcelData(null);
    setShowButtons(false); 
  };

  return (
    <>
    <Box>
      <Grid container spacing={2} justifyContent="center" style={{ marginTop: 20 }}>
        <Grid item>
          <UploadButton onUpload={handleUpload} />
        </Grid>
      </Grid>
      <StyledContainer>
        <ResetButton onReset={handleReset} />
        {showButtons && (
          <>
            <ProcessButton />
          </>
        )}
      </StyledContainer>
      <Grid container spacing={2} justifyContent="center" style={{ marginTop: 20 }}>
      {showButtons && (
          <>
            <Box>
              {excelData && <ShowButton excelData={excelData} />}
            </Box>
          </>
        )}
      </Grid>
    </Box>
    </>
  );
}

export default GenSynData;

