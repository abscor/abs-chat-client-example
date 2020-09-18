import React from 'react';
import logo from './logo.svg';
import './App.css';
import ABSChat from "abs-chat-sdk";

const chat = new ABSChat('my-other-api-key');

function login () {
  chat.credentialsToToken('myUserName','MyPassWord')
}

function sendMessage(e) {
  chat.sendMessage('MyName', 'SomeoneSessionId', 'Hello There!', null)
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

      <button onClick={login}>login</button>

      <button onClick={connect}>connect</button>

      <button onClick={sendMessage}>sendMessage</button>

      <button onClick={startMonitor}>startMonitor</button>

      <button onClick={stopMonitor}>stopMonitor</button>

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
