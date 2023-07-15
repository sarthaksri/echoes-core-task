import React from 'react';
import Navbar from './Components/Navbar';
import CoreTeam from './Components/CoreTeam';
import EBTeam from './Components/EB';
import Team from './Components/Team';
function App() {
  return (
   <>
  <Navbar />
  <Team />
  <EBTeam/>
   <CoreTeam />
   </>
  );
}

export default App;
