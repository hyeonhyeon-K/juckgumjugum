const WebSocket = require('ws');

// WebSocket 서버 생성
const wss = new WebSocket.Server({ port: 8080 });

// 클라이언트 연결 이벤트 처리
wss.on('connection', (ws) => {
  console.log('클라이언트 연결됨');

  // 클라이언트로 메시지 보내기
  ws.send('알림: WebSocket 연결 성공');

  // 클라이언트로부터 메시지 받기
  ws.on('message', (message) => {
    console.log(`받은 메시지: ${message}`);

    // 받은 메시지를 클라이언트에게 다시 전송
    ws.send(`서버에서 받은 메시지: ${message}`);
  });

  // 클라이언트 연결 종료 이벤트 처리
  ws.on('close', () => {
    console.log('클라이언트 연결 종료됨');
  });
});