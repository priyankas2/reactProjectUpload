import React from 'react';
import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)({
  backgroundColor: '#1976d2',
  borderRadius: '6px',
  color: 'white',
  padding: '10px 20px',
  marginRight: '10px',
});

const ResetButton=( {onReset} )=> {
  const handleReset = () => {
    localStorage.clear();
    onReset();
    window.location.reload(); 
  };

  return (
    <StyledButton variant="contained" onClick={handleReset}>
      Reset
    </StyledButton>
  );
}

export default ResetButton;
