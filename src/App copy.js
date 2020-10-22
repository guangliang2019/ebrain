import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input } from 'antd';
import NavBar from './components/NavBar.jsx'
import LeftBar from './components/LeftBar.jsx'
import Main from './components/Main.jsx'
import RightBar from './components/RightBar';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <NavBar></NavBar>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <LeftBar></LeftBar>
        <Main></Main>
        <RightBar />
      </div>
    </div>
  );
}

export default App;
