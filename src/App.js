import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input } from 'antd';
import NavBar from './components/NavBar.jsx'
import LeftBar from './components/LeftBar.jsx'
import Main from './components/Main.jsx'
import RightBar from './components/RightBar';
import LogoZone from './components/LogoZone.jsx'
import { ScrollView } from "@cantonjs/react-scroll-view";
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div style={{ height: '100vh', background: "rgba(0,0,0,0)" }}>
      <NavBar></NavBar>
      <div style={{ display: 'flex', flexDirection: 'row', height: '944px', background: "rgba(0,0,0,0)" }}>
        <LeftBar></LeftBar>
        <div>
          <div style={{
            height: '1px',
            //width: '1000px',
            background: '#D9D9D9'
          }}></div>
          <ScrollView style={{ height: '943px' }}>
            <Main></Main>
          </ScrollView>
        </div>
        <div>
          <div style={{
            height: '1px',
            //width: '1000px',
            background: '#D9D9D9'
          }}></div>
          <ScrollView style={{ height: '943px' }}>
            <RightBar />
          </ScrollView>
        </div>
      </div>
    </div>
  );
}

export default App;
