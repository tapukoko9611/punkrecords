import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import socketIO from "socket.io-client";


import './App.css';
import Adda from './components/adda';
import Storage from './components/storage';
import Incognito from './components/incognito';
import { AuthContextProvider } from './context/auth-context';

const socket = socketIO.connect("http://localhost:5000/");
//const socket = socketIO.connect("192.168.1.5:5000/");
//var socket = require('socket.io-client')('192.168.1.5:5000');//, {path: '/wstest1/socket.io'});
//var socket = socketIO('192.168.1.5', {path: '/nodejs/socket.io'});
//const socket = socketIO();
//var socket = socketIO.connect('192.168.1.5:5000/', {path: 'C:\Users\reora\Downloads\reakt\punkrecords\client\node_modules\@socket.io'});

// const { io } = require("socket.io-client");
// const socket = io();

function App() { 

  return (
    <div className="App" >
      <AuthContextProvider> 
        <Routes>
          <Route path="/ayo/adda/:addaId" element={ <Adda socket={socket}/> } />
          <Route path="/ayo/storage/:storageId" element={ <Storage socket={socket}/> } />
          <Route path="/ayo/ign/:query" element={ <Incognito /> } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
