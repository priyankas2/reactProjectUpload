// import React, { useState } from 'react';
// import { Button, Box, LinearProgress, Snackbar, Typography } from '@mui/material';

// const UploadButton = ( {onUpload} )=> {
//   const [uploading, setUploading] = useState(false);
//   const [successPopup, setSuccessPopup] = useState(false);

//   const handleUpload = (file) => {
//     setUploading(true);
//     setSuccessPopup(false);

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const data = event.target.result;
//       onUpload(data);

//       setTimeout(() => {
//         setUploading(false);
//         setSuccessPopup(true);
//       }, 2000);
//     };
//     reader.readAsBinaryString(file);
//   };

//   const handleClosePopup = () => {
//     setSuccessPopup(false);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const files = e.dataTransfer.files;
//     if (files.length > 0) {
//       handleUpload(files[0]);
//     }
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       handleUpload(file);
//     }
//   };

//   return (
//     <div className="wrapper">
//       <div className="container" style={{marginTop: 50}}>
//         <h1>Upload a file</h1>
//         <div className="upload-container">
//           <div
//             className="border-container"
//             style={{
//               padding: '100px',
//               backgroundColor: '#f1f1f1', 
//               border: '2px dashed rgba(198, 198, 198, 0.65)',
//               borderRadius: '10px',
//               textAlign: 'center',
//               cursor: 'pointer',
//             }}
//             onDragOver={handleDragOver}
//             onDrop={handleDrop}
//           >
//             <Typography variant="h6" gutterBottom>
//               Drag and drop files here
//             </Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//               or
//             </Typography>
//             <label htmlFor="file-upload" style={{ cursor: 'pointer', color: 'blue' }}>
//               <Button
//                 variant="contained"
//                 component="span"
//                 style={{ borderRadius: '6px', backgroundColor: '#1976d2', color: 'white', padding: '10px 20px' }}
//               >
//                 Browse
//               </Button>
//             </label>
//             <input
//               type="file"
//               accept=".xlsx, .xls"
//               onChange={handleFileInputChange}
//               style={{ display: 'none' }}
//               id="file-upload"
//             />
//           </div>
//         </div>
//       </div>

      
//       {uploading && <LinearProgress style={{ marginTop: '10px' }} />}

//       <Snackbar
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//         open={successPopup}
//         autoHideDuration={3000}
//         onClose={handleClosePopup}
//         message="File has been uploaded successfully"
//       />
//     </div>
//   );
// }

// export default UploadButton;


import React, { useState } from 'react';
import { Button, Box, LinearProgress, Snackbar, Typography } from '@mui/material';

function UploadButton({ onUpload }) {
  const [uploading, setUploading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleUpload = (file) => {
    setUploading(true);
    setSuccessPopup(false);

    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = event.target.result;

      try {
        // replace 'https://api.example.com/upload' with your actual API endpoint
        const response = await fetch('https://api.example.com/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/octet-stream',
          },
          body: data,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        onUpload(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setTimeout(() => {
          setUploading(false);
          setSuccessPopup(true);
        }, 2000);
      }
    };

    reader.readAsBinaryString(file);
  };

  const handleClosePopup = () => {
    setSuccessPopup(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleUpload(files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleUpload(file);
    }
  };

  return (
    <div className="wrapper">
      <div className="container" style={{marginTop: 60}}>
        <h1>Upload a file</h1>
        <div className="upload-container">
          <div
            className="border-container"
            style={{
              padding: '100px',
              backgroundColor: '#f1f1f1',
              border: '2px dashed rgba(198, 198, 198, 0.65)',
              borderRadius: '10px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <Typography variant="h6" gutterBottom>
              Drag and drop files here
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              or
            </Typography>
            <label htmlFor="file-upload" style={{ cursor: 'pointer', color: 'blue' }}>
              <Button
                variant="contained"
                component="span"
                style={{ borderRadius: '6px', backgroundColor: '#1976d2', color: 'white', padding: '10px 20px' }}
              >
                Browse
              </Button>
            </label>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileInputChange}
              style={{ display: 'none' }}
              id="file-upload"
            />
          </div>
        </div>
      </div>

      {uploading && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <LinearProgress />
        </div>
      )}

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={successPopup}
        autoHideDuration={3000}
        onClose={handleClosePopup}
        message="File has been uploaded successfully"
      />
    </div>
  );
}

export default UploadButton;
