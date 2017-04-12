// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var userInfo = {
  imageUrl: 'https://lh3.googleusercontent.com/Rw5VGPMgqLaOq2e__19km8puncnTs2AB7ORN0IVIKGZg6IEOtirfrFuGMwVhU-q3o3J8mSZMXHriBAgIRe9NheXR1m4WN-SRo0BVx2jvV2eJ05KCE1j0PXgWM3sEHYUHJuYVVdlX9hvpPpiRZJTtY7vXVMjA3j4dnZqatSSckELwIK_jTY4GDuxipEsC9NIef15tYLD6dxCpB7CCogWkWenTBhz-IhAjlGbRnqyCBLQ8vyfHITX5bZRoJRENnnc1_zgRJvnUu924b309hG84kYgngyYKdanwyeWUgHGziYhs3F5xlQ9fOrp-9WSC22NaARVIzsfxAwAaNGsD22ZB6Whh1yGCoyYuCG1pvEFMcNnohVhSCnAufQp31UJXW-i8n2v23mHE1urUfF_6Pu00v3h62moIMvpExN7gRhx5jM7d_NhpBIxpXw_tL4yrbhKsRbCVrGARSESJldMlkfiQg_sQdWWv9XCU8ZHLP3UPOqoyYKvL7bkhJXaSlu9E5MBOjgzOWor_ROpx0RV-t1jRU1h2bByOse2WwR3NaB5oEKn9NK-hzKDVTK11xmvsBNHw7AmP_h87GnaN4LZr7URUWETAX57pDGN6iKdG8Ho6zMsarqs4xY9T=w2246-h1684-no',
  userName: 'jesseD',
  userEmail: 'jesse.deoms@gmail.com',
  trips: [{
    tripName: 'Hiking Trip with the Guys',
    tripDescription: 'fun in the mountains',
    tripId: 12312312
  },
  {
    tripName: 'Surfin in Hawaii',
    tripDescription: 'fun in ocean',
    tripId: 684332972
  }]
};

ReactDOM.render(
  <App userInfo={userInfo} />,
  document.getElementById('app')
);
