import React from 'react';
import styles1 from './Styles/team1.module.css';
import img1 from '../Images/DrSonamDullat.jpg';
import img2 from '../Images/team-1.jpg';
function Team() {
  return (
    <div className={styles1.container}>
      <h1>ECHOES TEAM</h1>
      <div class={styles1.card}>
        <img src={img2} alt="President" />
        Dr Bhullar
      </div>
      <p>President</p>
      <div class={styles1.card}>
        <img src={img1} alt="Vice President" />
        Dr Sonam Dullat
      </div>
      <p>Vice President</p>
    </div>
  )
}

export default Team
