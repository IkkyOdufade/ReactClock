import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Bukola from './components/bukola'
// import Button from 'react-bootstrap/Button'

import Clock from './components/clock'


function App() {
    return (
    
      <div className="App-header">
         {/* // <Button variant="flat" size="xl">click me</Button>
  // <Button variant="primary">Primary</Button>
  //   <Button variant="secondary">Secondary</Button>
  //   <Button variant="success">Success</Button>
  //   <Button variant="warning">Warning</Button>
  //   <Button variant="danger">Danger</Button>
  //   <Button variant="info">Info</Button>
  //   <Button variant="light">Light</Button>
  //   <Button variant="dark">Dark</Button>
  //   <Button variant="link">Link</Button>
       */}
    <h1>  On the awesome server, I live...</h1>

    <Clock></Clock>
           <Bukola></Bukola>
    </div>
  
    )}
  
  export default App;
  
  