'import React from 'react';
'import logo from './logo.svg';
import './App.css';
import ABSChat from "abs-chat-sdk";

const sticky_session_id = '79j2x-12s21-a98n-12ed';
var chat = new ABSChat('my-other-api-key', sticky_session_id);

chat.onmessage = function (event) {
    document.getElementById('chat_messages').innerHTML = document.getElementById('chat_messages').innerHTML + '<br>' + event.data;
};

function adminAuth () {
  chat.adminAuth('SomeAdminUserName','SomePassword')
}
function sendMessage(e) {
  //sendMessage(from_name, to_session_id, body, base64_encoded_image)
  chat.sendMessage('MyUserName', null, 'Hello World!', null)
}

function connect(e) {
  chat.connect()
}

function startMonitor(){
  chat.connectionMonitorLoopStart()
}

function stopMonitor(){
  chat.connectionMonitorLoopStop()
}

function App() {


  return (
    <div className="App">
      <header className="App-header">

      <button onClick={adminAuth}>adminAuth</button>

      <button onClick={connect}>connect</button>

      <button onClick={sendMessage}>sendMessage</button>

      <button onClick={startMonitor}>startMonitor</button>

      <button onClick={stopMonitor}>stopMonitor</button>

<div id="chat_messages"></div>

      <img src={logo} className="App-logo" alt="logo"/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
