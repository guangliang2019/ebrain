import React from 'react';
import NavBar from './components/NavBar.jsx'
import LeftBar from './components/LeftBar.jsx'
import Main from './components/Main.jsx'
import RightBar from './components/RightBar';
import { ScrollView } from "@cantonjs/react-scroll-view";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router >
      <div style={{ height: '100vh', background: "rgba(0,0,0,0)" }}>
        <NavBar></NavBar>
        <div style={{ display: 'flex', flexDirection: 'row', height: '924px', background: "rgba(0,0,0,0)" }}>
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
    </Router>
  );
}
