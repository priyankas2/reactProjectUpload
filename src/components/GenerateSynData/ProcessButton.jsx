// import React from 'react';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// const buttonStyle = {
//   backgroundColor: '#1976d2',
//   borderRadius: '6px',
//   color: 'white',
//   padding: '10px 20px',
// };

// const ProcessButton=()=> {
//   return (
//     <Box>
//       <Button onClick={() => alert('Processing...')} style={buttonStyle}>
//         Process
//       </Button>
//     </Box>
//   );
// }

// export default ProcessButton;


import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const buttonStyle = {
  backgroundColor: '#1976d2',
  borderRadius: '6px',
  color: 'white',
  padding: '10px 20px',
};

function ProcessButton() {
  const handleClick = async () => {
    try {
      const response = await fetch('https://api.example.com/data'); // replace with your API endpoint
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box>
      <Button onClick={handleClick} style={buttonStyle}>
        Process
      </Button>
    </Box>
  );
}

export default ProcessButton;