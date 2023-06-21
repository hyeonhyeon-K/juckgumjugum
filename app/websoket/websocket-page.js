// "use client"
// import { useEffect } from 'react';
// import React from 'react';

// function WebSocketPage() {
//   useEffect(() => {
//     const ws = new WebSocket('ws://localhost:3000');

//     ws.onopen = () => {
//       console.log('WebSocket connected');
//       console.log()
//     };

//     ws.onmessage = (event) => {
//       console.log('received:', event.data);
//     };

//     return () => {
//       ws.close();
//     };
//   }, []);

//   return <div>WebSocket Pagesssss</div>;
// }

// export default WebSocketPage;